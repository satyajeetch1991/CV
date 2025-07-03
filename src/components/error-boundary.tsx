"use client";

import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  private handleTryAgain = () => {
    // Reset error state, or reload if error persists
    if (this.state.hasError) {
      this.setState({ hasError: false, error: undefined });
      // Optionally, reload the page if error persists after reset
      // window.location.reload();
    }
  };

  public render() {
    if (this.state.hasError) {
      return (
        this.props.fallback || (
          <div
            className="flex min-h-screen flex-col items-center justify-center p-4"
            aria-live="assertive"
          >
            <div className="max-w-md text-center">
              <h2 className="mb-4 text-2xl font-bold">Something went wrong</h2>
              <p className="mb-4 text-muted-foreground">
                We apologize for the inconvenience. Please try refreshing the page.
              </p>
              {process.env.NODE_ENV === "development" && this.state.error && (
                <pre className="mb-4 text-xs text-red-500 whitespace-pre-wrap">
                  {this.state.error.message}
                </pre>
              )}
              <button
                type="button"
                onClick={this.handleTryAgain}
                className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
              >
                Try again
              </button>
            </div>
          </div>
        )
      );
    }

    return this.props.children;
  }
}