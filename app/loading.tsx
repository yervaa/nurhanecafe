export default function Loading() {
  return (
    <main className="min-h-screen bg-cream px-4 py-16">
      <div className="section-shell space-y-8">
        <div className="glass-card shine animate-shimmer h-20 w-full" />
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-card shine animate-shimmer h-[420px] w-full" />
          <div className="space-y-6">
            <div className="glass-card shine animate-shimmer h-24 w-full" />
            <div className="glass-card shine animate-shimmer h-24 w-5/6" />
            <div className="glass-card shine animate-shimmer h-24 w-4/6" />
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => (
            <div key={index} className="glass-card shine animate-shimmer h-80 w-full" />
          ))}
        </div>
      </div>
    </main>
  );
}
