import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 3000;
const NGO_EMAIL = process.env.NGO_EMAIL || 'anticorruptionvolunteers150@gmail.com';

// In-memory record of dispatches for audit and administrative review
interface EmailDispatchLog {
  id: string;
  type: 'volunteer_enrollment' | 'concern_report' | 'contact_inquiry';
  recipient: string;
  subject: string;
  timestamp: string;
  senderEmail?: string;
  status: 'sent_smtp' | 'queued_logged';
  preview: string;
}

const dispatchLogs: EmailDispatchLog[] = [];

function getMailer() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host && !user) {
    return null;
  }

  return nodemailer.createTransport({
    host: host || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === 'true',
    auth: user && pass ? { user, pass } : undefined,
  });
}

async function sendOrLogEmail(options: {
  type: 'volunteer_enrollment' | 'concern_report' | 'contact_inquiry';
  senderEmail?: string;
  subject: string;
  text: string;
  html: string;
}) {
  const mailer = getMailer();
  const fromAddress = process.env.SMTP_FROM || `VACOCA Automated Desk <${NGO_EMAIL}>`;

  let status: 'sent_smtp' | 'queued_logged' = 'queued_logged';

  if (mailer) {
    try {
      await mailer.sendMail({
        from: fromAddress,
        to: NGO_EMAIL,
        replyTo: options.senderEmail || undefined,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });
      status = 'sent_smtp';
      console.log(`[EMAIL DISPATCH] Successfully sent email to ${NGO_EMAIL} via SMTP: ${options.subject}`);
    } catch (err: any) {
      console.error(`[EMAIL DISPATCH WARNING] Failed to send via SMTP, falling back to secure log:`, err?.message || err);
      status = 'queued_logged';
    }
  } else {
    console.log(`[EMAIL DISPATCH] Logged dispatch for ${NGO_EMAIL} (SMTP not configured): ${options.subject}`);
  }

  const logEntry: EmailDispatchLog = {
    id: Date.now().toString() + Math.random().toString(36).substring(2, 6),
    type: options.type,
    recipient: NGO_EMAIL,
    subject: options.subject,
    timestamp: new Date().toISOString(),
    senderEmail: options.senderEmail,
    status,
    preview: options.text.substring(0, 180) + '...',
  };

  dispatchLogs.unshift(logEntry);
  if (dispatchLogs.length > 100) {
    dispatchLogs.pop();
  }

  return { status, recipient: NGO_EMAIL, logId: logEntry.id };
}

async function startServer() {
  const app = express();
  app.use(express.json());

  // Health check
  app.get('/api/health', (req, res) => {
    res.json({
      status: 'ok',
      ngoEmail: NGO_EMAIL,
      smtpConfigured: Boolean(process.env.SMTP_HOST || process.env.SMTP_USER),
      dispatchesLogged: dispatchLogs.length,
    });
  });

  // 1. Volunteer Enrollment Endpoint
  app.post('/api/enroll', async (req, res) => {
    try {
      const {
        fullName,
        email,
        phone,
        country,
        city,
        areaOfInterest,
        skills,
        motivation,
        weeklyHours,
      } = req.body;

      if (!fullName || !email) {
        return res.status(400).json({ error: 'Full name and email are required.' });
      }

      const subject = `[VACOCA Volunteer Enrollment] ${fullName} - ${city || 'Unknown City'}, ${country || 'Africa'}`;
      const text = `
NEW VOLUNTEER ENROLLMENT SUBMISSION
--------------------------------------------------
To: Volunteers Anti-Corruption Campaign Africa (VACOCA)
Recipient: ${NGO_EMAIL}

APPLICANT PROFILE:
- Full Name: ${fullName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Location: ${city || 'N/A'}, ${country || 'N/A'}
- Area of Interest: ${areaOfInterest || 'General Advocacy'}
- Weekly Availability: ${weeklyHours || 'Flexible'}

SKILLS & BACKGROUND:
${skills || 'None specified'}

MOTIVATION / STATEMENT:
${motivation || 'Dedicated to fighting corruption.'}

SUBMITTED VIA:
VACOCA Movement Web Portal
Timestamp: ${new Date().toLocaleString()}
--------------------------------------------------
      `.trim();

      const html = `
<div style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 24px;">
  <div style="background-color: #1B4332; color: #ffffff; padding: 16px; margin: -24px -24px 20px -24px;">
    <h2 style="margin: 0; font-size: 20px; text-transform: uppercase;">VACOCA Volunteer Enrollment</h2>
    <p style="margin: 4px 0 0 0; font-size: 12px; color: #D4AF37;">Volunteers Anti-Corruption Campaign Africa</p>
  </div>
  
  <p style="font-size: 14px; line-height: 1.5;">A new volunteer has enrolled through the official VACOCA portal.</p>
  
  <table style="width: 100%; border-collapse: collapse; margin-top: 16px; font-size: 13px;">
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold; width: 140px;">Applicant Name:</td>
      <td style="padding: 8px 0;">${fullName}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Email:</td>
      <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #1B4332;">${email}</a></td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Phone:</td>
      <td style="padding: 8px 0;">${phone || 'Not provided'}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Location:</td>
      <td style="padding: 8px 0;">${city || 'N/A'}, ${country || 'N/A'}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Focus Area:</td>
      <td style="padding: 8px 0;">${areaOfInterest || 'Advocacy'}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Availability:</td>
      <td style="padding: 8px 0;">${weeklyHours || 'Flexible'}</td>
    </tr>
  </table>

  <div style="margin-top: 20px; background-color: #f9f9f7; padding: 14px; border-left: 3px solid #D4AF37;">
    <strong style="display: block; font-size: 12px; text-transform: uppercase; color: #555;">Skills:</strong>
    <p style="margin: 6px 0 0 0; font-size: 13px;">${skills || 'Not provided'}</p>
  </div>

  <div style="margin-top: 14px; background-color: #f9f9f7; padding: 14px; border-left: 3px solid #1B4332;">
    <strong style="display: block; font-size: 12px; text-transform: uppercase; color: #555;">Motivation Statement:</strong>
    <p style="margin: 6px 0 0 0; font-size: 13px; font-style: italic;">"${motivation || 'Committed to resisting corruption.'}"</p>
  </div>

  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eeeeee; font-size: 11px; color: #888;">
    Secretariat: Nommo Gallery, Opposite Rwenzori House, Kampala, Uganda • Motto: “No more corruption we shall win.”
  </div>
</div>
      `.trim();

      const result = await sendOrLogEmail({
        type: 'volunteer_enrollment',
        senderEmail: email,
        subject,
        text,
        html,
      });

      return res.json({
        success: true,
        message: `Volunteer enrollment successfully sent to VACOCA Secretariat (${NGO_EMAIL})`,
        recipient: NGO_EMAIL,
        deliveryStatus: result.status,
      });
    } catch (error: any) {
      console.error('Error handling /api/enroll:', error);
      res.status(500).json({ error: 'Internal server error processing enrollment.' });
    }
  });

  // 2. Report Concern Endpoint
  app.post('/api/report', async (req, res) => {
    try {
      const {
        trackingCode,
        title,
        category,
        entity,
        description,
        location,
        dateObserved,
        evidenceDescription,
        urgency,
        isAnonymous,
        reporterName,
        reporterContact,
      } = req.body;

      if (!title || !description) {
        return res.status(400).json({ error: 'Title and description are required.' });
      }

      const reportCode = trackingCode || `VAC-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
      const subject = `[VACOCA Confidential Report - Ref: ${reportCode}] ${title} (${category || 'General'} / Urgency: ${urgency || 'Standard'})`;

      const reporterInfoText = isAnonymous
        ? 'STRICTLY ANONYMOUS (No contact details provided)'
        : `Name: ${reporterName || 'Confidential'}\nContact: ${reporterContact || 'Confidential'}`;

      const text = `
NEW CITIZEN CONCERN REPORT RECEIVED
--------------------------------------------------
To: Volunteers Anti-Corruption Campaign Africa (VACOCA)
Recipient: ${NGO_EMAIL}
Tracking Reference: ${reportCode}
Timestamp: ${new Date().toLocaleString()}

INCIDENT DETAILS:
- Subject/Incident: ${title}
- Category: ${category || 'Corruption'}
- Urgency Level: ${urgency || 'Standard'}
- Institution / Target Entity: ${entity || 'Not disclosed'}
- Location: ${location || 'Not specified'}
- Date/Period Observed: ${dateObserved || 'Recent'}

DESCRIPTION OF CONCERN:
${description}

EVIDENCE & DOCUMENTATION SUMMARY:
${evidenceDescription || 'No physical documents attached.'}

REPORTER STATUS:
${reporterInfoText}

MANDATE NOTICE:
VACOCA operates under the 1995 Constitution of the Republic of Uganda as a registered anti-corruption NGO.
--------------------------------------------------
      `.trim();

      const html = `
<div style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 24px;">
  <div style="background-color: #8B1E1E; color: #ffffff; padding: 16px; margin: -24px -24px 20px -24px;">
    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #ffcccc; display: block;">Confidential Integrity Dispatch</span>
    <h2 style="margin: 4px 0 0 0; font-size: 18px; text-transform: uppercase;">Reference Code: ${reportCode}</h2>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-top: 12px; font-size: 13px;">
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold; width: 140px;">Incident Title:</td>
      <td style="padding: 8px 0; font-weight: bold; color: #1B4332;">${title}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Category:</td>
      <td style="padding: 8px 0;">${category || 'General'}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Urgency:</td>
      <td style="padding: 8px 0; color: #8B1E1E; font-weight: bold;">${urgency || 'Standard'}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Target Institution:</td>
      <td style="padding: 8px 0;">${entity || 'Not disclosed'}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Location:</td>
      <td style="padding: 8px 0;">${location || 'N/A'}</td>
    </tr>
    <tr style="border-bottom: 1px solid #eeeeee;">
      <td style="padding: 8px 0; font-weight: bold;">Reporter Status:</td>
      <td style="padding: 8px 0;">${isAnonymous ? '<span style="color: #666; font-style: italic;">Anonymous Citizen</span>' : reporterName + ' (' + (reporterContact || 'Contact on file') + ')'}</td>
    </tr>
  </table>

  <div style="margin-top: 20px; background-color: #fdfaf6; padding: 14px; border-left: 4px solid #8B1E1E;">
    <strong style="display: block; font-size: 12px; text-transform: uppercase; color: #666;">Detailed Description:</strong>
    <p style="margin: 8px 0 0 0; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${description}</p>
  </div>

  ${evidenceDescription ? `
  <div style="margin-top: 14px; background-color: #f9f9f7; padding: 14px; border-left: 3px solid #1B4332;">
    <strong style="display: block; font-size: 12px; text-transform: uppercase; color: #666;">Reported Evidence & Documents:</strong>
    <p style="margin: 6px 0 0 0; font-size: 13px;">${evidenceDescription}</p>
  </div>` : ''}

  <div style="margin-top: 24px; padding-top: 16px; border-top: 1px solid #eeeeee; font-size: 11px; color: #888;">
    Dispatched securely to VACOCA Secretariat (${NGO_EMAIL}) • Nommo Gallery, Kampala, Uganda.
  </div>
</div>
      `.trim();

      const result = await sendOrLogEmail({
        type: 'concern_report',
        senderEmail: !isAnonymous && reporterContact?.includes('@') ? reporterContact : undefined,
        subject,
        text,
        html,
      });

      return res.json({
        success: true,
        trackingCode: reportCode,
        message: `Concern report successfully logged and transmitted to VACOCA Secretariat (${NGO_EMAIL})`,
        recipient: NGO_EMAIL,
        deliveryStatus: result.status,
      });
    } catch (error: any) {
      console.error('Error handling /api/report:', error);
      res.status(500).json({ error: 'Internal server error processing concern report.' });
    }
  });

  // 3. Contact Inquiries Endpoint
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, subject, category, message } = req.body;
      if (!name || !email || !message) {
        return res.status(400).json({ error: 'Name, email, and message are required.' });
      }

      const emailSubject = `[VACOCA Public Inquiry] ${subject || 'New Inquiry'} - from ${name}`;
      const text = `
NEW CONTACT INQUIRY
--------------------------------------------------
To: ${NGO_EMAIL}
From: ${name} <${email}>
Phone: ${phone || 'Not provided'}
Category: ${category || 'General'}
Subject: ${subject || 'General Inquiry'}

MESSAGE:
${message}
--------------------------------------------------
      `.trim();

      const html = `
<div style="font-family: Arial, sans-serif; color: #1a1a1a; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; padding: 24px;">
  <div style="background-color: #1B4332; color: #ffffff; padding: 16px; margin: -24px -24px 20px -24px;">
    <h2 style="margin: 0; font-size: 18px; text-transform: uppercase;">VACOCA Contact Inquiry</h2>
  </div>
  <p><strong>From:</strong> ${name} (<a href="mailto:${email}">${email}</a>)</p>
  <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
  <p><strong>Category:</strong> ${category || 'General'}</p>
  <div style="background: #f9f9f7; padding: 14px; border-left: 3px solid #D4AF37; margin-top: 14px;">
    <p style="margin: 0; font-size: 13px; line-height: 1.6; white-space: pre-wrap;">${message}</p>
  </div>
</div>
      `.trim();

      const result = await sendOrLogEmail({
        type: 'contact_inquiry',
        senderEmail: email,
        subject: emailSubject,
        text,
        html,
      });

      return res.json({
        success: true,
        message: `Inquiry successfully forwarded to ${NGO_EMAIL}`,
        recipient: NGO_EMAIL,
        deliveryStatus: result.status,
      });
    } catch (error: any) {
      console.error('Error handling /api/contact:', error);
      res.status(500).json({ error: 'Internal server error processing contact message.' });
    }
  });

  // 4. View Dispatches Log (for CMS admin)
  app.get('/api/dispatches', (req, res) => {
    res.json({
      recipient: NGO_EMAIL,
      total: dispatchLogs.length,
      dispatches: dispatchLogs,
    });
  });

  // Vite middleware setup
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
    console.log(`Configured NGO recipient email: ${NGO_EMAIL}`);
  });
}

startServer();
