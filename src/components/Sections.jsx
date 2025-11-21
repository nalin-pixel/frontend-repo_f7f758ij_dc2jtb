import { BookOpen, Flame, TrendingUp } from 'lucide-react'

function Section({ title, items = [], id }) {
  return (
    <section id={id} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">{title}</h2>
        <a href="#" className="text-sky-600">See all</a>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {items.map((b) => (
          <a key={b._id} href={`#/book/${b._id}`} className="group">
            <div className="aspect-[2/3] rounded-xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
              {b.cover_url ? (
                <img src={b.cover_url} alt={b.title} className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-slate-500 p-3 text-center text-sm">{b.title}</div>
              )}
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-slate-800 dark:text-slate-100 truncate">{b.title}</p>
              <p className="text-xs text-slate-500">{b.author}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}

export default function Sections({ featured = [], latest = [], trending = [] }) {
  return (
    <div>
      <Section id="catalog" title={<span className="inline-flex items-center gap-2"><BookOpen size={16}/> Featured</span>} items={featured} />
      <Section id="latest" title={<span className="inline-flex items-center gap-2"><Flame size={16}/> Latest Additions</span>} items={latest} />
      <Section title={<span className="inline-flex items-center gap-2"><TrendingUp size={16}/> Trending</span>} items={trending} />
    </div>
  )
}
