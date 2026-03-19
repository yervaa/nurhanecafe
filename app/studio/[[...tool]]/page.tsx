export const dynamic = "force-static";

export default function StudioPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="glass-card max-w-2xl px-8 py-10 text-center">
        <p className="section-kicker">Sanity Studio</p>
        <h1 className="mt-4 font-display text-4xl text-ink">Sanity schemas are configured and ready.</h1>
        <p className="mt-4 text-sm leading-7 text-ink/70">
          This storefront is wired for Sanity content fetching with fallback data, and the schema files are included in
          the repository. To run the Studio locally, add your Sanity environment variables and use the Sanity CLI or a
          dedicated Studio workspace.
        </p>
      </div>
    </main>
  );
}
