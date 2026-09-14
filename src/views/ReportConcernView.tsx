import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  ShieldAlert,
  Lock,
  AlertTriangle,
  Upload,
  CheckCircle2,
  Copy,
  Info,
  Mail,
} from 'lucide-react';

export const ReportConcernView: React.FC = () => {
  const { submitReport, showToast, setCurrentView } = useApp();

  const [form, setForm] = useState({
    typeOfConcern: 'Public Procurement & Contracting',
    locationCountry: '',
    locationCityOrRegion: '',
    dateOfIncident: '',
    description: '',
    institutionOrSector: '',
    isAnonymous: true,
    contactName: '',
    contactEmail: '',
    contactPhone: '',
    consentGiven: false,
    evidenceFileNames: '',
  });

  const [simulatedFileName, setSimulatedFileName] = useState<string | null>(null);
  const [submittedTrackingCode, setSubmittedTrackingCode] = useState<string | null>(null);
  const [lastSubmittedReport, setLastSubmittedReport] = useState<typeof form | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSimulatedFileName(file.name);
      setForm({ ...form, evidenceFileNames: file.name });
      showToast(`Document "${file.name}" attached securely.`);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.consentGiven) {
      showToast('Please check the consent and procedure acknowledgement.', 'warning');
      return;
    }

    const reportToSubmit = {
      typeOfConcern: form.typeOfConcern,
      locationCountry: form.locationCountry,
      locationCityOrRegion: form.locationCityOrRegion,
      dateOfIncident: form.dateOfIncident || 'Recent / Ongoing',
      description: form.description,
      institutionOrSector: form.institutionOrSector,
      evidenceProvided: !!simulatedFileName,
      evidenceFileName: simulatedFileName || undefined,
      isAnonymous: form.isAnonymous,
      contactName: form.isAnonymous ? undefined : form.contactName,
      contactEmail: form.isAnonymous ? undefined : form.contactEmail,
      contactPhone: form.isAnonymous ? undefined : form.contactPhone,
      consentGiven: form.consentGiven,
    };

    const code = submitReport(reportToSubmit);
    setLastSubmittedReport({ ...form });
    setSubmittedTrackingCode(code);
  };

  const copyTrackingCode = () => {
    if (submittedTrackingCode && navigator.clipboard) {
      navigator.clipboard.writeText(submittedTrackingCode);
      showToast('Reference tracking code copied!');
    }
  };

  return (
    <div className="pt-32 pb-24 bg-[#F9F9F7] text-[#1A1A1A]">
      {/* Emergency Top Alert Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="p-4 bg-white border border-rose-200 border-l-4 border-rose-600 flex items-start gap-3.5 shadow-sm">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-gray-800 leading-relaxed">
            <strong className="text-rose-700">Emergency Notice:</strong> VACOCA is a civil society initiative and not an emergency response or armed law-enforcement authority. If you or someone else is in immediate physical danger or facing life-threatening coercion, please contact your local emergency or police authorities immediately.
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="space-y-4 max-w-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-[2px] bg-[#1B4332]" />
            <span className="text-xs font-mono-accent font-bold tracking-widest text-[#1B4332] uppercase">
              Secure & Responsible Intake Portal
            </span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black text-[#1A1A1A] uppercase font-display tracking-tight leading-tight">
            REPORT A <span className="text-[#1B4332]">CONCERN</span>
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            Submit information responsibly to help shine light on irregularities and connect concerns to appropriate lawful channels and oversight mechanisms.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Main Form Column */}
          <div className="lg:col-span-8 bg-white border border-gray-200 p-6 sm:p-10 shadow-sm space-y-8">
            {submittedTrackingCode ? (
              /* Success Confirmation Box */
              <div className="p-8 bg-[#F9F9F7] border border-gray-200 border-t-4 border-[#1B4332] text-center space-y-6">
                <CheckCircle2 className="w-14 h-14 text-[#1B4332] mx-auto" />
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#1A1A1A] uppercase font-display">
                    Concern Logged & Dispatched
                  </h3>
                  <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed">
                    Your submission has been securely recorded and transmitted directly to the VACOCA Secretariat intake desk for verified assessment.
                  </p>
                </div>

                {/* Direct Transmission Verification Badge */}
                <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs font-medium flex items-center justify-center gap-2 max-w-md mx-auto">
                  <Mail className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Transmitted to NGO Email: <strong>anticorruptionvolunteers150@gmail.com</strong></span>
                </div>

                {/* Tracking Reference Display */}
                <div className="p-4 bg-white border border-gray-300 max-w-sm mx-auto space-y-1">
                  <span className="text-[11px] font-mono-accent text-gray-500 uppercase tracking-wider block">
                    Your Confidential Reference Code:
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-lg font-mono font-black text-[#1B4332]">
                      {submittedTrackingCode}
                    </span>
                    <button
                      onClick={copyTrackingCode}
                      className="p-1 text-gray-400 hover:text-black transition-colors cursor-pointer"
                      title="Copy code"
                    >
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Report Summary Snapshot */}
                {lastSubmittedReport && (
                  <div className="p-4 bg-white border border-gray-200 text-left text-xs space-y-2 max-w-lg mx-auto">
                    <div className="flex justify-between border-b border-gray-100 pb-1.5">
                      <span className="text-gray-500 font-mono-accent uppercase">Category:</span>
                      <strong className="text-[#1A1A1A]">{lastSubmittedReport.typeOfConcern}</strong>
                    </div>
                    {lastSubmittedReport.institutionOrSector && (
                      <div className="flex justify-between border-b border-gray-100 pb-1.5">
                        <span className="text-gray-500 font-mono-accent uppercase">Institution / Sector:</span>
                        <span className="text-[#1A1A1A]">{lastSubmittedReport.institutionOrSector}</span>
                      </div>
                    )}
                    <div className="flex justify-between border-b border-gray-100 pb-1.5">
                      <span className="text-gray-500 font-mono-accent uppercase">Location:</span>
                      <span className="text-[#1A1A1A]">{lastSubmittedReport.locationCityOrRegion || 'N/A'}, {lastSubmittedReport.locationCountry || 'N/A'}</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-100 pb-1.5">
                      <span className="text-gray-500 font-mono-accent uppercase">Reporter Privacy:</span>
                      <span className="text-[#1B4332] font-semibold">
                        {lastSubmittedReport.isAnonymous ? 'Strictly Anonymous' : `${lastSubmittedReport.contactName || 'Disclosed'} (${lastSubmittedReport.contactEmail || lastSubmittedReport.contactPhone || 'Contact provided'})`}
                      </span>
                    </div>
                    {simulatedFileName && (
                      <div className="flex justify-between pt-0.5">
                        <span className="text-gray-500 font-mono-accent uppercase">Attachment:</span>
                        <span className="text-gray-700 font-mono">{simulatedFileName}</span>
                      </div>
                    )}
                  </div>
                )}

                <div className="p-4 bg-white border border-gray-200 text-xs text-gray-600 max-w-lg mx-auto leading-relaxed text-left">
                  <p>
                    <strong>Next Steps:</strong> VACOCA evaluates all intake records according to procedure. Where verified, our legal and advocacy teams compile sanitized civic briefs or assist in referral to the appropriate statutory oversight authority.
                  </p>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  {lastSubmittedReport && (
                    <a
                      href={`mailto:anticorruptionvolunteers150@gmail.com?subject=${encodeURIComponent(`[VACOCA Confidential Report - Ref: ${submittedTrackingCode}] ${lastSubmittedReport.institutionOrSector || lastSubmittedReport.typeOfConcern}`)}&body=${encodeURIComponent(`To: Volunteers Anti-Corruption Campaign Africa (VACOCA)\nSecretariat Email: anticorruptionvolunteers150@gmail.com\n\nCONFIDENTIAL CONCERN REPORT\nReference Tracking Code: ${submittedTrackingCode}\nCategory: ${lastSubmittedReport.typeOfConcern}\nTarget Institution / Entity: ${lastSubmittedReport.institutionOrSector || 'Not disclosed'}\nLocation: ${lastSubmittedReport.locationCityOrRegion || ''}, ${lastSubmittedReport.locationCountry || ''}\nDate of Incident: ${lastSubmittedReport.dateOfIncident || 'Recent / Ongoing'}\n\nDescription of Incident:\n${lastSubmittedReport.description}\n\nEvidence Documents Attached/Noted:\n${simulatedFileName || 'None'}\n\nReporter Status: ${lastSubmittedReport.isAnonymous ? 'Anonymous Citizen' : (lastSubmittedReport.contactName || '') + ' (' + (lastSubmittedReport.contactEmail || lastSubmittedReport.contactPhone || '') + ')'}\n\nSubmitted via VACOCA Intake Portal.`)}`}
                      className="w-full sm:w-auto px-5 py-3 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      <Mail className="w-4 h-4 text-[#D4AF37]" />
                      <span>Send Direct Email Copy</span>
                    </a>
                  )}
                  <button
                    onClick={() => {
                      setSubmittedTrackingCode(null);
                      setSimulatedFileName(null);
                      setForm({
                        typeOfConcern: 'Public Procurement & Contracting',
                        locationCountry: '',
                        locationCityOrRegion: '',
                        dateOfIncident: '',
                        description: '',
                        institutionOrSector: '',
                        isAnonymous: true,
                        contactName: '',
                        contactEmail: '',
                        contactPhone: '',
                        consentGiven: false,
                        evidenceFileNames: '',
                      });
                    }}
                    className="w-full sm:w-auto px-5 py-3 border border-gray-300 hover:bg-gray-100 text-[#1A1A1A] text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Submit Another Report
                  </button>
                  <button
                    onClick={() => setCurrentView('home')}
                    className="w-full sm:w-auto px-5 py-3 bg-[#1A1A1A] hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-widest cursor-pointer"
                  >
                    Return to Homepage
                  </button>
                </div>
              </div>
            ) : (
              /* The Form Itself */
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Anonymous Toggle Banner */}
                <div className="p-4 bg-[#F9F9F7] border border-gray-200 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <Lock className={`w-5 h-5 ${form.isAnonymous ? 'text-[#1B4332]' : 'text-gray-500'}`} />
                    <div>
                      <h4 className="text-sm font-bold text-[#1A1A1A]">
                        {form.isAnonymous ? 'Anonymous Submission Mode: ACTIVE' : 'Confidential Contact Mode'}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {form.isAnonymous
                          ? 'No personal identification details will be collected or stored with this report.'
                          : 'You may provide your contact info so our analysts can follow up if needed.'}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, isAnonymous: !form.isAnonymous })}
                    className={`px-3 py-1.5 text-xs font-mono-accent font-bold uppercase tracking-wider border transition-colors cursor-pointer ${
                      form.isAnonymous
                        ? 'bg-[#1B4332] border-[#1B4332] text-white'
                        : 'bg-white border-gray-300 text-[#1A1A1A]'
                    }`}
                  >
                    {form.isAnonymous ? 'Stay Anonymous' : 'Switch to Anonymous'}
                  </button>
                </div>

                {/* Section 1: Type & Institution */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Type of Concern *
                    </label>
                    <select
                      value={form.typeOfConcern}
                      onChange={(e) => setForm({ ...form, typeOfConcern: e.target.value })}
                      className="w-full bg-white border border-gray-300 p-3 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    >
                      <option value="Public Procurement & Contracting">Public Procurement & Contracting</option>
                      <option value="Healthcare Resource Diversion">Healthcare Resource Diversion</option>
                      <option value="Education / School Funds Misuse">Education / School Funds Misuse</option>
                      <option value="Bribery & Checkpoint Extortion">Bribery & Checkpoint Extortion</option>
                      <option value="Land / Environmental Grabbing">Land / Environmental Grabbing</option>
                      <option value="Public Infrastructure Non-Delivery">Public Infrastructure Non-Delivery</option>
                      <option value="Other Civic Concern">Other Civic Concern</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Relevant Institution / Department / Sector *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.institutionOrSector}
                      onChange={(e) => setForm({ ...form, institutionOrSector: e.target.value })}
                      placeholder="e.g. Municipal Works Dept, District Health Center"
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Section 2: Location & Date */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Country in Africa *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.locationCountry}
                      onChange={(e) => setForm({ ...form, locationCountry: e.target.value })}
                      placeholder="e.g. Kenya, Uganda, Ghana"
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      City / District / Region *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.locationCityOrRegion}
                      onChange={(e) => setForm({ ...form, locationCityOrRegion: e.target.value })}
                      placeholder="e.g. Mombasa, Jinja, Kumasi"
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                      Approximate Date of Incident
                    </label>
                    <input
                      type="text"
                      value={form.dateOfIncident}
                      onChange={(e) => setForm({ ...form, dateOfIncident: e.target.value })}
                      placeholder="e.g. June 2026 or Ongoing"
                      className="w-full bg-white border border-gray-300 p-3 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Section 3: Detailed Description */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold flex justify-between">
                    <span>Factual Description of the Concern *</span>
                    <span className="text-gray-500 font-normal">State facts clearly and objectively</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    value={form.description}
                    onChange={(e) => setForm({ ...form, description: e.target.value })}
                    placeholder="Provide specific factual details: What happened? Who was involved? What public resources or procedures were affected? Avoid unsupported rumors."
                    className="w-full bg-white border border-gray-300 p-3.5 text-sm text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none leading-relaxed"
                  />
                </div>

                {/* Section 4: Supporting Evidence File Upload */}
                <div className="space-y-2">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-gray-700 font-bold">
                    Supporting Documents / Photographs / Receipts (Optional)
                  </label>
                  <div className="p-6 bg-[#F9F9F7] border border-dashed border-gray-300 flex flex-col items-center justify-center text-center">
                    <Upload className="w-6 h-6 text-gray-500 mb-2" />
                    <p className="text-xs text-gray-600">
                      {simulatedFileName ? (
                        <span className="text-[#1B4332] font-bold">Attached: {simulatedFileName}</span>
                      ) : (
                        <span>Upload relevant document, tender notice, receipt, or photo</span>
                      )}
                    </p>
                    <label className="mt-3 px-4 py-2 bg-white border border-gray-300 hover:bg-gray-50 text-[#1A1A1A] text-xs font-bold uppercase tracking-wider cursor-pointer">
                      <span>Browse Files</span>
                      <input
                        type="file"
                        onChange={handleFileUpload}
                        className="hidden"
                        accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                      />
                    </label>
                  </div>
                </div>

                {/* Section 5: Optional Contact Fields */}
                {!form.isAnonymous && (
                  <div className="p-5 bg-[#F9F9F7] border border-gray-200 space-y-4">
                    <h4 className="text-xs font-mono-accent font-bold uppercase text-[#1B4332]">
                      Your Confidential Contact Information
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <input
                        type="text"
                        value={form.contactName}
                        onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                        placeholder="Your Name (Optional)"
                        className="w-full bg-white border border-gray-300 p-2.5 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                      <input
                        type="email"
                        value={form.contactEmail}
                        onChange={(e) => setForm({ ...form, contactEmail: e.target.value })}
                        placeholder="Your Email"
                        className="w-full bg-white border border-gray-300 p-2.5 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                      <input
                        type="tel"
                        value={form.contactPhone}
                        onChange={(e) => setForm({ ...form, contactPhone: e.target.value })}
                        placeholder="Your Phone Number"
                        className="w-full bg-white border border-gray-300 p-2.5 text-xs text-[#1A1A1A] focus:border-[#1B4332] focus:outline-none"
                      />
                    </div>
                  </div>
                )}

                {/* MANDATORY LEGAL & PROCEDURAL CONSENT CHECKBOX */}
                <div className="p-5 bg-[#F9F9F7] border border-gray-200 space-y-3">
                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent-checkbox"
                      checked={form.consentGiven}
                      onChange={(e) => setForm({ ...form, consentGiven: e.target.checked })}
                      className="mt-1 w-4 h-4 text-[#1B4332] border-gray-300 focus:ring-[#1B4332] cursor-pointer"
                    />
                    <label htmlFor="consent-checkbox" className="text-xs text-gray-700 leading-relaxed cursor-pointer">
                      <strong>Mandatory Procedure Acknowledgement:</strong> I understand that Volunteers Anti-Corruption Campaign Africa (VACOCA) is a civil society initiative and does not exercise judicial or criminal prosecution authority. “VACOCA will review submissions according to its procedures and may provide information, guidance or referral to relevant and appropriate institutions where applicable.” I certify that the information provided is submitted in good faith.
                    </label>
                  </div>
                </div>

                {/* Direct Email Routing Notice */}
                <div className="p-3 bg-[#F9F9F7] border border-gray-200 text-xs text-gray-700 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#1B4332] shrink-0" />
                  <span>
                    <strong>Direct Intake Delivery:</strong> When submitted, your concern report is securely transmitted directly to the NGO email at <code className="text-[#1B4332] font-mono font-bold">anticorruptionvolunteers150@gmail.com</code>.
                  </span>
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-4 bg-[#1B4332] hover:bg-green-800 text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShieldAlert className="w-4 h-4 text-[#D4AF37]" />
                    <span>SUBMIT INFORMATION RESPONSIBLY</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Guidelines & Safety Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-8 bg-white border border-gray-200 space-y-4 shadow-sm">
              <div className="w-10 h-10 bg-[#F9F9F7] border border-gray-200 text-[#1B4332] flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#1A1A1A] uppercase font-display">
                How VACOCA Protects Submissions
              </h4>
              <ul className="space-y-3 text-xs text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <span><strong>No Public Accusations:</strong> Submissions are never published on the public internet without verification.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <span><strong>Confidential Review:</strong> Handled by trained civil society researchers and legal advisors.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#1B4332] shrink-0 mt-0.5" />
                  <span><strong>Lawful Referral:</strong> Verified concerns are packaged into constructive briefs for legitimate oversight agencies.</span>
                </li>
              </ul>
            </div>

            <div className="p-6 bg-white border border-gray-200 space-y-3 text-xs text-gray-600 leading-relaxed shadow-sm">
              <h5 className="font-bold text-[#1A1A1A] uppercase flex items-center gap-1.5 font-display">
                <Info className="w-4 h-4 text-[#1B4332]" /> Informant Safety Tips
              </h5>
              <p>• Avoid submitting reports from employer-monitored computers or work networks.</p>
              <p>• Retain your confidential reference code in a secure location.</p>
              <p>• Do not confront alleged wrongdoers directly in high-risk situations.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
