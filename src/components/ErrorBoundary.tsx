import React, { ErrorInfo, ReactNode } from 'react';
import { ShieldAlert, RefreshCw, RotateCcw } from 'lucide-react';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('VACOCA UI caught error:', error, errorInfo);
  }

  private handleResetCache = () => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const keys = [
          'vacoca_stats',
          'vacoca_stats_v2',
          'vacoca_leader',
          'vacoca_leader_v2',
          'vacoca_stories',
          'vacoca_stories_v2',
          'vacoca_contact',
          'vacoca_reports',
          'vacoca_volunteers',
          'vacoca_partners',
          'vacoca_messages',
        ];
        keys.forEach((k) => window.localStorage.removeItem(k));
      }
    } catch {
      // Ignore
    }
    window.location.reload();
  };

  private handleReload = () => {
    this.setState({ hasError: false, error: null });
    window.location.reload();
  };

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#F9F9F7] text-[#1A1A1A] flex flex-col items-center justify-center p-6 text-center">
          <div className="max-w-md w-full bg-white border border-gray-200 p-8 shadow-sm space-y-6">
            <div className="w-14 h-14 mx-auto bg-[#1B4332]/10 border border-[#1B4332]/20 flex items-center justify-center text-[#1B4332]">
              <ShieldAlert className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <span className="text-[11px] font-mono font-bold tracking-widest text-[#1B4332] uppercase">
                VACOCA System Notice
              </span>
              <h1 className="text-2xl font-black uppercase font-display tracking-tight text-[#1A1A1A]">
                Application Refresh Required
              </h1>
              <p className="text-sm text-gray-600 leading-relaxed">
                The movement portal encountered an unexpected display issue. You can reload the page or reset the local cache to restore standard view state.
              </p>
            </div>

            {this.state.error && (
              <div className="p-3 bg-gray-50 border border-gray-200 text-left text-[11px] font-mono text-gray-600 overflow-x-auto max-h-24">
                {this.state.error.message}
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <button
                type="button"
                onClick={this.handleReload}
                className="flex-1 py-3 px-4 bg-[#1B4332] hover:bg-green-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Reload View</span>
              </button>

              <button
                type="button"
                onClick={this.handleResetCache}
                className="flex-1 py-3 px-4 bg-[#1A1A1A] hover:bg-gray-800 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Reset Cache</span>
              </button>
            </div>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
