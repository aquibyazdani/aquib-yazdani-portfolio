"use client";

import { useEffect } from "react";

/**
 * There is no local content snapshot any more, so an unreachable CMS has
 * nothing to fall back to. This keeps that failure legible instead of blank.
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error("[page]", error);
  }, [error]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-5 bg-background px-6 text-center">
      <div>
        <h1 className="font-[family-name:var(--font-family-headline)] text-3xl tracking-wide text-[var(--foreground)]">
          Something went wrong
        </h1>
        <p className="mt-2 max-w-md text-sm text-[var(--muted-foreground)]">
          This page could not be loaded just now. Please try again in a moment.
        </p>
      </div>
      <button
        type="button"
        onClick={reset}
        className="cursor-pointer rounded-[var(--radius-md)] bg-[var(--primary)] px-5 py-2.5 text-sm text-[var(--primary-foreground)] transition-opacity hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
