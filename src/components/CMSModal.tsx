import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { StoryItem } from '../types';
import {
  X,
  Sliders,
  BarChart3,
  UserCheck,
  FileText,
  ShieldAlert,
  Users,
  Building,
  Mail,
  Download,
  Upload,
  RotateCcw,
  Plus,
  Trash2,
  Edit2,
  CheckCircle,
  Clock,
  Eye,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const CMSModal: React.FC = () => {
  const {
    isCMSOpen,
    setIsCMSOpen,
    impactStats,
    updateImpactStats,
    leaderProfile,
    updateLeaderProfile,
    stories,
    addStory,
    deleteStory,
    reports,
    updateReportStatus,
    volunteerApplications,
    partnerInquiries,
    contactMessages,
    contactDetails,
    updateContactDetails,
    resetToDefaults,
    exportDataJSON,
    importDataJSON,
    showToast,
  } = useApp();

  const [activeTab, setActiveTab] = useState<
    'stats' | 'leadership' | 'news' | 'reports' | 'volunteers' | 'partners' | 'contact' | 'system'
  >('stats');

  // Stats Form State
  const [statsForm, setStatsForm] = useState(impactStats);

  // Leader Form State
  const [leaderForm, setLeaderForm] = useState(leaderProfile);

  // New Story Form State
  const [newStoryForm, setNewStoryForm] = useState<Partial<StoryItem>>({
    title: '',
    category: 'NEWS',
    excerpt: '',
    content: '',
    author: 'VACOCA Editorial Team',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    tags: ['Civic Action'],
  });
  const [isAddingStory, setIsAddingStory] = useState(false);
  const [tagsInput, setTagsInput] = useState('Civic Action, Transparency');

  // Contact Form State
  const [contactForm, setContactForm] = useState(contactDetails);

  // Report view details modal
  const [selectedReportId, setSelectedReportId] = useState<string | null>(null);

  if (!isCMSOpen) return null;

  const handleSaveStats = (e: React.FormEvent) => {
    e.preventDefault();
    updateImpactStats(statsForm);
  };

  const handleSaveLeader = (e: React.FormEvent) => {
    e.preventDefault();
    updateLeaderProfile(leaderForm);
  };

  const handleSaveContact = (e: React.FormEvent) => {
    e.preventDefault();
    updateContactDetails(contactForm);
  };

  const handleCreateStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newStoryForm.title || !newStoryForm.content) {
      showToast('Title and content are required.', 'warning');
      return;
    }
    const tagsArray = tagsInput.split(',').map((t) => t.trim()).filter(Boolean);
    const story: StoryItem = {
      id: `story-${Date.now()}`,
      title: newStoryForm.title || 'Untitled Update',
      slug: (newStoryForm.title || 'update').toLowerCase().replace(/[^a-z0-9]+/g, '-'),
      category: (newStoryForm.category as StoryItem['category']) || 'NEWS',
      excerpt: newStoryForm.excerpt || 'New update from the movement.',
      content: newStoryForm.content || '',
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      readTime: '3 min read',
      author: newStoryForm.author || 'VACOCA Secretariat',
      image: newStoryForm.image || 'https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1200&q=80',
      tags: tagsArray,
      featured: false,
    };
    addStory(story);
    setIsAddingStory(false);
    setNewStoryForm({
      title: '',
      category: 'NEWS',
      excerpt: '',
      content: '',
      author: 'VACOCA Editorial Team',
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80',
    });
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const content = ev.target?.result as string;
      if (content) {
        importDataJSON(content);
      }
    };
    reader.readAsText(file);
  };

  const selectedReport = reports.find((r) => r.id === selectedReportId);

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.96 }}
          className="w-full max-w-5xl h-[92vh] bg-[#0E1219] border border-[#262F42] rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-200"
        >
          {/* Header */}
          <div className="p-4 sm:p-5 border-b border-white/10 bg-[#121622] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-[#0E5A35] border border-[#D4AF37]/50 flex items-center justify-center">
                <Sliders className="w-5 h-5 text-[#D4AF37]" />
              </div>
              <div>
                <h2 className="text-lg font-black text-white font-display flex items-center gap-2">
                  VACOCA Movement CMS & Administration
                  <span className="text-[10px] uppercase px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37] border border-[#D4AF37]/30 font-mono-accent">
                    Live Editor
                  </span>
                </h2>
                <p className="text-xs text-slate-400">
                  Update statistics, leadership profile & titles, stories, and review confidential citizen submissions.
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsCMSOpen(false)}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close CMS"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Tabs */}
          <div className="bg-[#0A0D14] border-b border-white/10 px-4 flex gap-1 overflow-x-auto text-xs font-semibold">
            {[
              { id: 'stats', label: 'Impact Metrics', icon: BarChart3 },
              { id: 'leadership', label: 'Leadership Profile', icon: UserCheck },
              { id: 'news', label: 'News & Campaigns', icon: FileText, count: stories.length },
              { id: 'reports', label: 'Concern Submissions', icon: ShieldAlert, count: reports.length, alert: reports.length > 0 },
              { id: 'volunteers', label: 'Volunteer Registry', icon: Users, count: volunteerApplications.length },
              { id: 'partners', label: 'Partnership Inquiries', icon: Building, count: partnerInquiries.length },
              { id: 'contact', label: 'Contact Placeholders', icon: Mail },
              { id: 'system', label: 'Backup & Reset', icon: Download },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-1.5 px-3 py-3 border-b-2 transition-all whitespace-nowrap cursor-pointer ${
                    isActive
                      ? 'border-[#D4AF37] text-[#D4AF37] bg-white/[0.04]'
                      : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                  {tab.count !== undefined && (
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                        tab.alert
                          ? 'bg-rose-900 text-rose-200 font-bold'
                          : 'bg-white/10 text-slate-300'
                      }`}
                    >
                      {tab.count}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Body Content */}
          <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-[#0E1219]">
            {/* TAB 1: IMPACT METRICS */}
            {activeTab === 'stats' && (
              <form onSubmit={handleSaveStats} className="max-w-2xl space-y-6">
                <div className="p-4 rounded-xl bg-[#141A26] border border-[#2B354C]">
                  <h3 className="text-sm font-bold text-white mb-1">Impact Statistics Placeholders</h3>
                  <p className="text-xs text-slate-400">
                    As mandated, default values use verified placeholders ([000]+). Update these anytime official verified counts are released.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Volunteers Metric
                    </label>
                    <input
                      type="text"
                      value={statsForm.volunteers}
                      onChange={(e) => setStatsForm({ ...statsForm, volunteers: e.target.value })}
                      placeholder="e.g. [000]+ or 1,250+"
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                    <span className="text-[11px] text-slate-500">Label: {statsForm.volunteersLabel}</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Communities Reached
                    </label>
                    <input
                      type="text"
                      value={statsForm.communities}
                      onChange={(e) => setStatsForm({ ...statsForm, communities: e.target.value })}
                      placeholder="e.g. [000]+ or 45+"
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                    <span className="text-[11px] text-slate-500">Label: {statsForm.communitiesLabel}</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Campaigns Metric
                    </label>
                    <input
                      type="text"
                      value={statsForm.campaigns}
                      onChange={(e) => setStatsForm({ ...statsForm, campaigns: e.target.value })}
                      placeholder="e.g. [00]+ or 12+"
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                    <span className="text-[11px] text-slate-500">Label: {statsForm.campaignsLabel}</span>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Partnerships Metric
                    </label>
                    <input
                      type="text"
                      value={statsForm.partnerships}
                      onChange={(e) => setStatsForm({ ...statsForm, partnerships: e.target.value })}
                      placeholder="e.g. [00]+ or 18+"
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                    <span className="text-[11px] text-slate-500">Label: {statsForm.partnershipsLabel}</span>
                  </div>
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#0E5A35] hover:bg-[#137A4B] text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-[#D4AF37]/50 shadow-md"
                  >
                    Save Impact Metrics
                  </button>
                </div>
              </form>
            )}

            {/* TAB 2: LEADERSHIP PROFILE */}
            {activeTab === 'leadership' && (
              <form onSubmit={handleSaveLeader} className="max-w-3xl space-y-6">
                <div className="p-4 rounded-xl bg-[#141A26] border border-[#2B354C]">
                  <h3 className="text-sm font-bold text-white mb-1">Movement Founder & Leadership Profile</h3>
                  <p className="text-xs text-slate-400">
                    Leader name is configured as <strong>Dr. Allawi Ssemanda Apuuli</strong> (Founder, VACOCA & Executive Director, Development Watch Centre). You can edit credentials, titles, quotes, and bio paragraphs live.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Leader Name
                    </label>
                    <input
                      type="text"
                      value={leaderForm.name}
                      onChange={(e) => setLeaderForm({ ...leaderForm, name: e.target.value })}
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none font-bold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Official Title / Designation
                    </label>
                    <input
                      type="text"
                      value={leaderForm.title}
                      onChange={(e) => setLeaderForm({ ...leaderForm, title: e.target.value })}
                      placeholder="e.g. Founder, VACOCA | Executive Director, DWC"
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-sm text-white focus:border-[#D4AF37] focus:outline-none text-[#D4AF37] font-semibold"
                    />
                    <div className="flex flex-wrap gap-1.5 pt-1 text-[10px]">
                      <span className="text-slate-500">Quick presets:</span>
                      {[
                        'Founder, VACOCA | Executive Director, DWC',
                        'Leader, VACOCA',
                        'Executive Director',
                        'National Coordinator',
                        'Founder & Chairman',
                        'President',
                      ].map((preset) => (
                        <button
                          type="button"
                          key={preset}
                          onClick={() => setLeaderForm({ ...leaderForm, title: preset })}
                          className="px-1.5 py-0.5 rounded bg-white/5 hover:bg-[#D4AF37]/20 hover:text-[#D4AF37] text-slate-400"
                        >
                          {preset}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                    Leader Portrait Image Path / URL
                  </label>
                  <input
                    type="text"
                    value={leaderForm.image || ''}
                    onChange={(e) => setLeaderForm({ ...leaderForm, image: e.target.value })}
                    placeholder="/ldr.png"
                    className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                  />
                  <span className="text-[11px] text-slate-500">
                    Default: <code className="text-[#D4AF37]">/ldr.png</code> (stored in <code className="text-slate-300">public/ldr.png</code> for Vercel deployment)
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                    Approved Quote Placeholder
                  </label>
                  <textarea
                    rows={2}
                    value={leaderForm.approvedQuote}
                    onChange={(e) => setLeaderForm({ ...leaderForm, approvedQuote: e.target.value })}
                    className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                  />
                  <span className="text-[11px] text-slate-500">
                    Factual guideline: Uses placeholder for approved quotes rather than fabricating official statements.
                  </span>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                    Biography Paragraphs (one per line)
                  </label>
                  <textarea
                    rows={4}
                    value={Array.isArray(leaderForm.bio) ? leaderForm.bio.join('\n\n') : (leaderForm.bio || '')}
                    onChange={(e) =>
                      setLeaderForm({
                        ...leaderForm,
                        bio: e.target.value.split('\n\n').filter(Boolean),
                      })
                    }
                    className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                    Leadership Message Paragraphs (one per line)
                  </label>
                  <textarea
                    rows={3}
                    value={Array.isArray(leaderForm.message) ? leaderForm.message.join('\n\n') : (leaderForm.message || '')}
                    onChange={(e) =>
                      setLeaderForm({
                        ...leaderForm,
                        message: e.target.value.split('\n\n').filter(Boolean),
                      })
                    }
                    className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-white/10">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#0E5A35] hover:bg-[#137A4B] text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-[#D4AF37]/50 shadow-md"
                  >
                    Save Leadership Profile
                  </button>
                </div>
              </form>
            )}

            {/* TAB 3: NEWS & CAMPAIGNS */}
            {activeTab === 'news' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-bold text-white">Movement Content & Stories</h3>
                    <p className="text-xs text-slate-400">Manage campaign updates, civic investigations, and official statements.</p>
                  </div>
                  <button
                    onClick={() => setIsAddingStory(!isAddingStory)}
                    className="px-3 py-1.5 bg-[#0E5A35] hover:bg-[#137A4B] text-white text-xs font-bold rounded-lg border border-[#D4AF37]/40 flex items-center gap-1.5"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{isAddingStory ? 'Cancel' : 'Create Article'}</span>
                  </button>
                </div>

                {isAddingStory && (
                  <form onSubmit={handleCreateStory} className="p-5 rounded-xl bg-[#141A26] border border-[#2D364A] space-y-4">
                    <h4 className="text-xs font-mono-accent font-bold uppercase text-[#D4AF37]">
                      Publish New Movement Article
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-300">Article Title</label>
                        <input
                          type="text"
                          required
                          value={newStoryForm.title || ''}
                          onChange={(e) => setNewStoryForm({ ...newStoryForm, title: e.target.value })}
                          placeholder="e.g. Community Social Audits in Urban Wards"
                          className="w-full bg-[#192030] border border-white/10 rounded-lg p-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-300">Category</label>
                        <select
                          value={newStoryForm.category}
                          onChange={(e) => setNewStoryForm({ ...newStoryForm, category: e.target.value as any })}
                          className="w-full bg-[#192030] border border-white/10 rounded-lg p-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                        >
                          <option value="CAMPAIGNS">CAMPAIGNS</option>
                          <option value="COMMUNITY ACTION">COMMUNITY ACTION</option>
                          <option value="VOLUNTEER STORIES">VOLUNTEER STORIES</option>
                          <option value="NEWS">NEWS</option>
                          <option value="STATEMENTS">STATEMENTS</option>
                          <option value="EVENTS">EVENTS</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-300">Short Excerpt / Lead</label>
                      <input
                        type="text"
                        value={newStoryForm.excerpt || ''}
                        onChange={(e) => setNewStoryForm({ ...newStoryForm, excerpt: e.target.value })}
                        placeholder="Brief summary of the report or event..."
                        className="w-full bg-[#192030] border border-white/10 rounded-lg p-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                      />
                    </div>

                    <div className="space-y-1">
                      <label className="text-xs text-slate-300">Full Content (Markdown or plain text)</label>
                      <textarea
                        rows={5}
                        required
                        value={newStoryForm.content || ''}
                        onChange={(e) => setNewStoryForm({ ...newStoryForm, content: e.target.value })}
                        placeholder="Write article content here..."
                        className="w-full bg-[#192030] border border-white/10 rounded-lg p-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-1">
                        <label className="text-xs text-slate-300">Tags (comma-separated)</label>
                        <input
                          type="text"
                          value={tagsInput}
                          onChange={(e) => setTagsInput(e.target.value)}
                          placeholder="e.g. Healthcare, Audit, Youth"
                          className="w-full bg-[#192030] border border-white/10 rounded-lg p-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs text-slate-300">Author</label>
                        <input
                          type="text"
                          value={newStoryForm.author || ''}
                          onChange={(e) => setNewStoryForm({ ...newStoryForm, author: e.target.value })}
                          className="w-full bg-[#192030] border border-white/10 rounded-lg p-2 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="flex justify-end gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setIsAddingStory(false)}
                        className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-slate-300"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 rounded-lg bg-[#0E5A35] hover:bg-[#137A4B] text-white text-xs font-bold"
                      >
                        Publish to Stories
                      </button>
                    </div>
                  </form>
                )}

                <div className="space-y-2">
                  {stories.map((story) => (
                    <div
                      key={story.id}
                      className="p-3.5 rounded-xl bg-[#141824] border border-white/5 flex items-center justify-between gap-4"
                    >
                      <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-[#D4AF37]/10 text-[#D4AF37]">
                            {story.category}
                          </span>
                          <span className="text-[11px] text-slate-400">{story.date}</span>
                        </div>
                        <h4 className="text-sm font-bold text-white truncate">{story.title}</h4>
                        <p className="text-xs text-slate-400 truncate">{story.excerpt}</p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => deleteStory(story.id)}
                          className="p-2 rounded-lg text-rose-400 hover:bg-rose-950/40 transition-colors"
                          title="Delete Article"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 4: CONCERN SUBMISSIONS (REPORTS) */}
            {activeTab === 'reports' && (
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-start gap-3">
                  <ShieldAlert className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-rose-200">Confidential Concern Submissions Desk</h3>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Submissions are stored with encrypted-like secure reference codes. As per our charter, submissions are reviewed for civic guidance and referral to lawful institutions.
                    </p>
                  </div>
                </div>

                {reports.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 bg-[#121622] rounded-xl border border-white/5">
                    <ShieldAlert className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    <p className="text-sm">No concern submissions logged yet.</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Citizen reports submitted via the "Report a Concern" page will appear here for review.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {reports.map((report) => (
                      <div
                        key={report.id}
                        className="p-4 rounded-xl bg-[#141824] border border-white/10 space-y-3"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/5 pb-2">
                          <div className="flex items-center gap-2">
                            <span className="font-mono-accent text-xs font-bold text-[#D4AF37] px-2 py-0.5 bg-[#D4AF37]/10 rounded border border-[#D4AF37]/20">
                              REF: {report.trackingCode}
                            </span>
                            <span className="text-xs text-slate-400">{report.timestamp}</span>
                          </div>
                          <span
                            className={`text-xs px-2.5 py-0.5 rounded-full font-semibold ${
                              report.status === 'Referred to Lawful Authority'
                                ? 'bg-emerald-950 text-emerald-300 border border-emerald-700'
                                : 'bg-amber-950 text-amber-300 border border-amber-700'
                            }`}
                          >
                            {report.status}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                          <div>
                            <span className="text-slate-500 block">Type of Concern:</span>
                            <span className="font-semibold text-white">{report.typeOfConcern}</span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Location:</span>
                            <span className="text-slate-200">
                              {report.locationCityOrRegion}, {report.locationCountry}
                            </span>
                          </div>
                          <div>
                            <span className="text-slate-500 block">Institution / Sector:</span>
                            <span className="text-slate-200">{report.institutionOrSector}</span>
                          </div>
                        </div>

                        <div className="p-2.5 rounded-lg bg-[#0C0E14] text-xs text-slate-300 leading-relaxed border border-white/5">
                          {report.description}
                        </div>

                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs pt-1">
                          <div className="text-slate-400">
                            {report.isAnonymous ? (
                              <span className="text-amber-400 font-semibold">🔒 100% Anonymous Informant</span>
                            ) : (
                              <span>
                                Contact: {report.contactName} ({report.contactEmail || report.contactPhone})
                              </span>
                            )}
                          </div>
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() =>
                                updateReportStatus(report.id, 'Information Verified', 'Verified by review desk')
                              }
                              className="px-2.5 py-1 bg-white/5 hover:bg-white/10 text-slate-300 rounded text-[11px]"
                            >
                              Mark Verified
                            </button>
                            <button
                              onClick={() =>
                                updateReportStatus(
                                  report.id,
                                  'Referred to Lawful Authority',
                                  'Referred to relevant statutory oversight body'
                                )
                              }
                              className="px-2.5 py-1 bg-emerald-950 hover:bg-emerald-900 text-emerald-300 border border-emerald-800 rounded text-[11px] font-semibold"
                            >
                              Refer to Authority
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 5: VOLUNTEER REGISTRY */}
            {activeTab === 'volunteers' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Registered Movement Volunteers</h3>
                  <span className="text-xs text-[#D4AF37] font-mono-accent">
                    Total: {volunteerApplications.length}
                  </span>
                </div>

                {volunteerApplications.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 bg-[#121622] rounded-xl border border-white/5">
                    <Users className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    <p className="text-sm">No volunteer applications logged yet.</p>
                    <p className="text-xs text-slate-500 mt-1">
                      Applications submitted via the "Get Involved" page will appear here.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {volunteerApplications.map((v) => (
                      <div key={v.id} className="p-4 rounded-xl bg-[#141824] border border-white/5 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-bold text-white">{v.fullName}</h4>
                            <p className="text-xs text-slate-400">
                              {v.email} • {v.phone} • {v.city}, {v.country}
                            </p>
                          </div>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-semibold">
                            {v.status}
                          </span>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs pt-1">
                          <div className="p-2 rounded bg-[#0D1017]">
                            <span className="text-slate-500 block">Area of Interest:</span>
                            <span className="text-slate-200">{v.areaOfInterest}</span>
                          </div>
                          <div className="p-2 rounded bg-[#0D1017]">
                            <span className="text-slate-500 block">Skills & Availability:</span>
                            <span className="text-slate-200">
                              {v.skills} ({v.weeklyHours})
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-slate-300 italic pt-1">"{v.motivation}"</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 6: PARTNERS */}
            {activeTab === 'partners' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-white">Institutional & Community Partnerships</h3>
                  <span className="text-xs text-[#D4AF37] font-mono-accent">
                    Total: {partnerInquiries.length}
                  </span>
                </div>

                {partnerInquiries.length === 0 ? (
                  <div className="text-center py-12 text-slate-500 bg-[#121622] rounded-xl border border-white/5">
                    <Building className="w-8 h-8 mx-auto mb-2 text-slate-600" />
                    <p className="text-sm">No partnership inquiries logged yet.</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {partnerInquiries.map((p) => (
                      <div key={p.id} className="p-4 rounded-xl bg-[#141824] border border-white/5 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="text-sm font-bold text-white">{p.organizationName}</h4>
                            <p className="text-xs text-slate-400">
                              Contact: {p.contactPerson} ({p.email}, {p.phone}) • {p.country}
                            </p>
                          </div>
                          <span className="text-[11px] px-2 py-0.5 rounded bg-sky-950 text-sky-300 border border-sky-800">
                            {p.organizationType}
                          </span>
                        </div>
                        <p className="text-xs text-slate-300 bg-[#0D1017] p-2.5 rounded-lg">{p.proposal}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}

            {/* TAB 7: CONTACT PLACEHOLDERS */}
            {activeTab === 'contact' && (
              <form onSubmit={handleSaveContact} className="max-w-2xl space-y-5">
                <div className="p-4 rounded-xl bg-[#141A26] border border-[#2B354C]">
                  <h3 className="text-sm font-bold text-white mb-1">Contact Details & Placeholders</h3>
                  <p className="text-xs text-slate-400">
                    Factual Rule: Official contact details use editable placeholders until officially registered and approved.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Official Email Placeholder
                    </label>
                    <input
                      type="text"
                      value={contactForm.emailPlaceholder}
                      onChange={(e) => setContactForm({ ...contactForm, emailPlaceholder: e.target.value })}
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Phone Number Placeholder
                    </label>
                    <input
                      type="text"
                      value={contactForm.phonePlaceholder}
                      onChange={(e) => setContactForm({ ...contactForm, phonePlaceholder: e.target.value })}
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono-accent uppercase tracking-wider text-slate-300">
                      Secretariat / Office Address Placeholder
                    </label>
                    <textarea
                      rows={2}
                      value={contactForm.officeAddressPlaceholder}
                      onChange={(e) => setContactForm({ ...contactForm, officeAddressPlaceholder: e.target.value })}
                      className="w-full bg-[#161C28] border border-white/10 rounded-lg p-2.5 text-xs text-white focus:border-[#D4AF37] focus:outline-none leading-relaxed"
                    />
                  </div>
                </div>

                <div className="flex justify-end pt-4 border-t border-white/10">
                  <button
                    type="submit"
                    className="px-5 py-2.5 bg-[#0E5A35] hover:bg-[#137A4B] text-white font-bold text-xs uppercase tracking-wider rounded-lg border border-[#D4AF37]/50"
                  >
                    Save Contact Info
                  </button>
                </div>
              </form>
            )}

            {/* TAB 8: BACKUP & RESET */}
            {activeTab === 'system' && (
              <div className="max-w-2xl space-y-6">
                <div className="p-4 rounded-xl bg-[#141A26] border border-[#2B354C]">
                  <h3 className="text-sm font-bold text-white mb-1">Data Portability & State Management</h3>
                  <p className="text-xs text-slate-400">
                    Export your custom CMS configuration as JSON or restore factory defaults.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-[#141824] border border-white/5 space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2">
                      <Download className="w-4 h-4 text-[#D4AF37]" /> Export CMS Backup
                    </h4>
                    <p className="text-xs text-slate-400">
                      Download all current articles, statistics, and leader settings as a JSON file.
                    </p>
                    <button
                      onClick={exportDataJSON}
                      className="w-full py-2 bg-[#1C2333] hover:bg-[#252E42] text-white text-xs font-bold rounded-lg border border-white/10 transition-colors"
                    >
                      Download JSON Backup
                    </button>
                  </div>

                  <div className="p-4 rounded-xl bg-[#141824] border border-white/5 space-y-3">
                    <h4 className="text-xs font-bold text-white uppercase flex items-center gap-2">
                      <Upload className="w-4 h-4 text-emerald-400" /> Import JSON Backup
                    </h4>
                    <p className="text-xs text-slate-400">
                      Upload a previously exported JSON backup to restore all content.
                    </p>
                    <label className="w-full py-2 bg-[#1C2333] hover:bg-[#252E42] text-white text-xs font-bold rounded-lg border border-white/10 transition-colors flex items-center justify-center cursor-pointer">
                      Select JSON File
                      <input type="file" accept=".json" onChange={handleImportFile} className="hidden" />
                    </label>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-rose-950/20 border border-rose-900/40 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-bold text-rose-200">Reset to Initial Placeholders</h4>
                    <p className="text-xs text-slate-400">
                      Restores all leadership titles, impact [000]+ stats, and sample articles.
                    </p>
                  </div>
                  <button
                    onClick={resetToDefaults}
                    className="px-3.5 py-2 rounded-lg bg-rose-950 hover:bg-rose-900 text-rose-200 border border-rose-800 text-xs font-bold flex items-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" /> Reset Data
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
