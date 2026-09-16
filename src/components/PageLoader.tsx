/**
 * Shown while a route waits on the CMS API. Content now comes only from the
 * API, so every page has a moment with nothing to render — this fills it.
 */
export default function PageLoader({ label = "Loading" }: { label?: string }) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-background px-6" role="status" aria-live="polite">
      <span
        className="size-7 animate-spin rounded-full border-2 border-[var(--muted)] border-t-[var(--primary)]"
        aria-hidden="true"
      />
      <span className="text-sm text-[var(--muted-foreground)]">{label}</span>
    </div>
  );
}
