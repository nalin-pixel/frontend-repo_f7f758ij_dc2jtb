import { ArrowRight, Star } from 'lucide-react'

export default function Hero({ featured = [] }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,.2), transparent 30%), radial-gradient(circle at 80% 30%, rgba(14,165,233,.2), transparent 30%), radial-gradient(circle at 50% 80%, rgba(45,212,191,.2), transparent 30%)'
      }} />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Explore knowledge with elegance</h1>
            <p className="mt-4 text-slate-300 text-lg">Browse books, journals, papers, and more — curated in a modern digital library built for speed, clarity, and accessibility.</p>
            <div className="mt-6 flex items-center gap-3">
              <a href="#catalog" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-sky-600 text-white hover:bg-sky-700">Browse Collection <ArrowRight size={18} /></a>
              <a href="#latest" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-700/50 text-slate-200 hover:border-slate-500">Latest Additions</a>
            </div>
            <div className="mt-8 flex items-center gap-6 text-slate-300">
              <div className="flex items-center gap-2"><Star className="text-teal-400" size={18}/> Minimal design</div>
              <div className="flex items-center gap-2"><Star className="text-teal-400" size={18}/> Fast search</div>
              <div className="flex items-center gap-2"><Star className="text-teal-400" size={18}/> Accessible</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {featured.slice(0,6).map((b) => (
              <div key={b._id} className="aspect-[2/3] rounded-xl overflow-hidden bg-slate-800/50 border border-slate-700">
                {b.cover_url ? (
                  <img src={b.cover_url} alt={b.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-slate-400 p-3 text-center text-sm">{b.title}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
