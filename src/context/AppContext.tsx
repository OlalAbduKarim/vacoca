import React, { createContext, useContext, useState, useEffect, useTransition } from 'react';
import {
  PageView,
  ImpactStats,
  LeaderProfile,
  StoryItem,
  ConcernReport,
  VolunteerApplication,
  PartnerInquiry,
  ContactMessage,
  ContactDetails,
} from '../types';
import {
  INITIAL_IMPACT_STATS,
  INITIAL_LEADER_PROFILE,
  INITIAL_STORIES,
  INITIAL_CONTACT_DETAILS,
} from '../data/initialData';

interface Toast {
  id: string;
  type: 'success' | 'info' | 'warning' | 'error';
  message: string;
}

interface AppContextType {
  currentView: PageView;
  setCurrentView: (view: PageView) => void;
  // CMS state
  impactStats: ImpactStats;
  updateImpactStats: (stats: Partial<ImpactStats>) => void;
  leaderProfile: LeaderProfile;
  updateLeaderProfile: (profile: Partial<LeaderProfile>) => void;
  stories: StoryItem[];
  addStory: (story: StoryItem) => void;
  updateStory: (id: string, story: Partial<StoryItem>) => void;
  deleteStory: (id: string) => void;
  contactDetails: ContactDetails;
  updateContactDetails: (details: Partial<ContactDetails>) => void;
  // Submissions
  reports: ConcernReport[];
  submitReport: (report: Omit<ConcernReport, 'id' | 'trackingCode' | 'timestamp' | 'status'>) => string;
  updateReportStatus: (id: string, status: ConcernReport['status'], note?: string) => void;
  volunteerApplications: VolunteerApplication[];
  submitVolunteer: (app: Omit<VolunteerApplication, 'id' | 'timestamp' | 'status'>) => void;
  partnerInquiries: PartnerInquiry[];
  submitPartnerInquiry: (inquiry: Omit<PartnerInquiry, 'id' | 'timestamp' | 'status'>) => void;
  contactMessages: ContactMessage[];
  submitContactMessage: (msg: Omit<ContactMessage, 'id' | 'timestamp'>) => void;
  // Modals & UI
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isCMSOpen: boolean;
  setIsCMSOpen: (open: boolean) => void;
  activeStoryModal: StoryItem | null;
  setActiveStoryModal: (story: StoryItem | null) => void;
  setSelectedArticle: (story: StoryItem | null) => void;
  toasts: Toast[];
  showToast: (message: string, type?: Toast['type']) => void;
  removeToast: (id: string) => void;
  resetToDefaults: () => void;
  exportDataJSON: () => void;
  importDataJSON: (jsonStr: string) => boolean;
}

const safeStorage = {
  getItem: (key: string): string | null => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        return window.localStorage.getItem(key);
      }
    } catch {
      // Storage access may be denied in sandboxed iframes
    }
    return null;
  },
  setItem: (key: string, value: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(key, value);
      }
    } catch {
      // Storage access may be denied in sandboxed iframes
    }
  },
  removeItem: (key: string): void => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.removeItem(key);
      }
    } catch {
      // Storage access may be denied in sandboxed iframes
    }
  },
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [, startTransition] = useTransition();

  // Route State
  const [currentView, setCurrentViewState] = useState<PageView>('home');

  const setCurrentView = (view: PageView) => {
    startTransition(() => {
      setCurrentViewState(view);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  };

  // CMS State with Safe LocalStorage & Automatic Cache Migration
  const [impactStats, setImpactStats] = useState<ImpactStats>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_stats_v2') || safeStorage.getItem('vacoca_stats');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return { ...INITIAL_IMPACT_STATS, ...parsed };
        }
      }
      return INITIAL_IMPACT_STATS;
    } catch {
      return INITIAL_IMPACT_STATS;
    }
  });

  const [leaderProfile, setLeaderProfile] = useState<LeaderProfile>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_leader_v2') || safeStorage.getItem('vacoca_leader');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          // Purge any deprecated names or malformed data
          if (
            !parsed.name ||
            typeof parsed.name !== 'string' ||
            parsed.name.toLowerCase().includes('henry') ||
            parsed.name.toLowerCase().includes('sebutinde')
          ) {
            return INITIAL_LEADER_PROFILE;
          }
          const image =
            !parsed.image || parsed.image.includes('images.unsplash.com/photo-1534528741775')
              ? '/ldr.png'
              : parsed.image;

          return {
            ...INITIAL_LEADER_PROFILE,
            ...parsed,
            image,
            bio: Array.isArray(parsed.bio) ? parsed.bio : INITIAL_LEADER_PROFILE.bio,
            message: Array.isArray(parsed.message) ? parsed.message : INITIAL_LEADER_PROFILE.message,
          };
        }
      }
      return INITIAL_LEADER_PROFILE;
    } catch {
      return INITIAL_LEADER_PROFILE;
    }
  });

  const [stories, setStories] = useState<StoryItem[]>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_stories_v2') || safeStorage.getItem('vacoca_stories');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // If old sample stories exist without DWC publications, or mention deprecated names, refresh
          if (parsed.some((s: StoryItem) => s.id === 'story-1' || s.id === 'story-2' || (s.author && s.author.toLowerCase().includes('henry')))) {
            return INITIAL_STORIES;
          }
          return parsed;
        }
      }
      return INITIAL_STORIES;
    } catch {
      return INITIAL_STORIES;
    }
  });

  const [contactDetails, setContactDetails] = useState<ContactDetails>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_contact');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') {
          return { ...INITIAL_CONTACT_DETAILS, ...parsed };
        }
      }
      return INITIAL_CONTACT_DETAILS;
    } catch {
      return INITIAL_CONTACT_DETAILS;
    }
  });

  const [reports, setReports] = useState<ConcernReport[]>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_reports');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  const [volunteerApplications, setVolunteerApplications] = useState<VolunteerApplication[]>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_volunteers');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  const [partnerInquiries, setPartnerInquiries] = useState<PartnerInquiry[]>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_partners');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  const [contactMessages, setContactMessages] = useState<ContactMessage[]>(() => {
    try {
      const saved = safeStorage.getItem('vacoca_messages');
      if (saved) {
        const parsed = JSON.parse(saved);
        return Array.isArray(parsed) ? parsed : [];
      }
      return [];
    } catch {
      return [];
    }
  });

  // Modals & UI
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isCMSOpen, setIsCMSOpen] = useState(false);
  const [activeStoryModal, setActiveStoryModal] = useState<StoryItem | null>(null);
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Sync to local storage
  useEffect(() => {
    safeStorage.setItem('vacoca_stats_v2', JSON.stringify(impactStats));
    safeStorage.setItem('vacoca_stats', JSON.stringify(impactStats));
  }, [impactStats]);

  useEffect(() => {
    safeStorage.setItem('vacoca_leader_v2', JSON.stringify(leaderProfile));
    safeStorage.setItem('vacoca_leader', JSON.stringify(leaderProfile));
  }, [leaderProfile]);

  useEffect(() => {
    safeStorage.setItem('vacoca_stories_v2', JSON.stringify(stories));
    safeStorage.setItem('vacoca_stories', JSON.stringify(stories));
  }, [stories]);

  useEffect(() => {
    safeStorage.setItem('vacoca_contact', JSON.stringify(contactDetails));
  }, [contactDetails]);

  useEffect(() => {
    safeStorage.setItem('vacoca_reports', JSON.stringify(reports));
  }, [reports]);

  useEffect(() => {
    safeStorage.setItem('vacoca_volunteers', JSON.stringify(volunteerApplications));
  }, [volunteerApplications]);

  useEffect(() => {
    safeStorage.setItem('vacoca_partners', JSON.stringify(partnerInquiries));
  }, [partnerInquiries]);

  useEffect(() => {
    safeStorage.setItem('vacoca_messages', JSON.stringify(contactMessages));
  }, [contactMessages]);

  // Toast Helpers
  const showToast = (message: string, type: Toast['type'] = 'success') => {
    const id = Date.now().toString() + Math.random().toString(36).substring(2, 6);
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      removeToast(id);
    }, 5000);
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  // CMS Updaters
  const updateImpactStats = (newStats: Partial<ImpactStats>) => {
    setImpactStats((prev) => ({ ...prev, ...newStats, lastUpdated: new Date().toLocaleDateString() }));
    showToast('Impact metrics updated successfully!');
  };

  const updateLeaderProfile = (newProfile: Partial<LeaderProfile>) => {
    setLeaderProfile((prev) => ({ ...prev, ...newProfile }));
    showToast('Leadership information updated successfully!');
  };

  const addStory = (story: StoryItem) => {
    setStories((prev) => [story, ...prev]);
    showToast(`Story "${story.title.substring(0, 30)}..." published!`);
  };

  const updateStory = (id: string, updatedFields: Partial<StoryItem>) => {
    setStories((prev) => prev.map((s) => (s.id === id ? { ...s, ...updatedFields } : s)));
    showToast('Article updated in movement news.');
  };

  const deleteStory = (id: string) => {
    setStories((prev) => prev.filter((s) => s.id !== id));
    showToast('Article removed.', 'info');
  };

  const updateContactDetails = (details: Partial<ContactDetails>) => {
    setContactDetails((prev) => ({ ...prev, ...details }));
    showToast('Contact information updated.');
  };

  // Report Submission with Secure Tracking Code
  const submitReport = (reportData: Omit<ConcernReport, 'id' | 'trackingCode' | 'timestamp' | 'status'>): string => {
    const trackingCode = `VAC-2026-${Math.random().toString(36).substring(2, 7).toUpperCase()}`;
    const newReport: ConcernReport = {
      ...reportData,
      id: Date.now().toString(),
      trackingCode,
      timestamp: new Date().toLocaleString(),
      status: 'Received - Under Review',
    };
    setReports((prev) => [newReport, ...prev]);
    showToast(`Concern logged securely. Reference ID: ${trackingCode}`);
    return trackingCode;
  };

  const updateReportStatus = (id: string, status: ConcernReport['status'], note?: string) => {
    setReports((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status, statusNote: note || r.statusNote } : r))
    );
    showToast('Report status updated.');
  };

  // Volunteer Submission
  const submitVolunteer = (appData: Omit<VolunteerApplication, 'id' | 'timestamp' | 'status'>) => {
    const newApp: VolunteerApplication = {
      ...appData,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
      status: 'Pending Review',
    };
    setVolunteerApplications((prev) => [newApp, ...prev]);
    showToast('Volunteer application received! Welcome to the VACOCA movement.');
  };

  // Partner Submission
  const submitPartnerInquiry = (inquiryData: Omit<PartnerInquiry, 'id' | 'timestamp' | 'status'>) => {
    const newInquiry: PartnerInquiry = {
      ...inquiryData,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
      status: 'Received',
    };
    setPartnerInquiries((prev) => [newInquiry, ...prev]);
    showToast('Partnership proposal received! Our coordination team will reach out.');
  };

  // Contact Message
  const submitContactMessage = (msgData: Omit<ContactMessage, 'id' | 'timestamp'>) => {
    const newMsg: ContactMessage = {
      ...msgData,
      id: Date.now().toString(),
      timestamp: new Date().toLocaleString(),
    };
    setContactMessages((prev) => [newMsg, ...prev]);
    showToast('Message sent to VACOCA inquiry desk.');
  };

  // Backup / Reset
  const resetToDefaults = () => {
    setImpactStats(INITIAL_IMPACT_STATS);
    setLeaderProfile(INITIAL_LEADER_PROFILE);
    setStories(INITIAL_STORIES);
    setContactDetails(INITIAL_CONTACT_DETAILS);
    safeStorage.removeItem('vacoca_stats');
    safeStorage.removeItem('vacoca_stats_v2');
    safeStorage.removeItem('vacoca_leader');
    safeStorage.removeItem('vacoca_leader_v2');
    safeStorage.removeItem('vacoca_stories');
    safeStorage.removeItem('vacoca_stories_v2');
    safeStorage.removeItem('vacoca_contact');
    showToast('All placeholders restored to initial defaults.', 'info');
  };

  const exportDataJSON = () => {
    const backup = {
      impactStats,
      leaderProfile,
      stories,
      contactDetails,
      reportsCount: reports.length,
      volunteerCount: volunteerApplications.length,
      exportDate: new Date().toISOString(),
    };
    const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `vacoca-cms-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
    showToast('CMS backup JSON downloaded.');
  };

  const importDataJSON = (jsonStr: string): boolean => {
    try {
      const data = JSON.parse(jsonStr);
      if (data.impactStats) setImpactStats(data.impactStats);
      if (data.leaderProfile) setLeaderProfile(data.leaderProfile);
      if (data.stories) setStories(data.stories);
      if (data.contactDetails) setContactDetails(data.contactDetails);
      showToast('CMS data restored successfully!');
      return true;
    } catch {
      showToast('Failed to parse JSON file.', 'error');
      return false;
    }
  };

  return (
    <AppContext.Provider
      value={{
        currentView,
        setCurrentView,
        impactStats,
        updateImpactStats,
        leaderProfile,
        updateLeaderProfile,
        stories,
        addStory,
        updateStory,
        deleteStory,
        contactDetails,
        updateContactDetails,
        reports,
        submitReport,
        updateReportStatus,
        volunteerApplications,
        submitVolunteer,
        partnerInquiries,
        submitPartnerInquiry,
        contactMessages,
        submitContactMessage,
        isSearchOpen,
        setIsSearchOpen,
        isCMSOpen,
        setIsCMSOpen,
        activeStoryModal,
        setActiveStoryModal,
        setSelectedArticle: setActiveStoryModal,
        toasts,
        showToast,
        removeToast,
        resetToDefaults,
        exportDataJSON,
        importDataJSON,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
