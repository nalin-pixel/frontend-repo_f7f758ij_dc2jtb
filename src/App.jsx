import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Sections from './components/Sections'
import Footer from './components/Footer'
import { apiGet, apiPost } from './lib/api'

function App() {
  const [theme, setTheme] = useState('light')
  const [homeData, setHomeData] = useState({ featured: [], latest: [], trending: [], announcements: [] })
  const [query, setQuery] = useState('')
  const [results, setResults] = useState([])

  useEffect(() => {
    loadHome()
  }, [])

  const loadHome = async () => {
    try {
      const data = await apiGet('/home')
      setHomeData(data)
    } catch (e) {
      // noop
    }
  }

  const handleSearch = async (q) => {
    setQuery(q)
    if (!q) {
      setResults([])
      return
    }
    try {
      const data = await apiPost('/books/search', { q, limit: 30 })
      setResults(data.items)
    } catch (e) {
      setResults([])
    }
  }

  const cardsToShow = query ? results : homeData.featured

  return (
    <div className="min-h-screen bg-white dark:bg-slate-950">
      <Navbar onSearch={handleSearch} theme={theme} setTheme={setTheme} />

      <Hero featured={homeData.featured} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {homeData.announcements?.length > 0 && (
          <div className="rounded-xl border border-sky-200/60 dark:border-sky-900/50 bg-sky-50 dark:bg-sky-950 text-sky-900 dark:text-sky-100 p-4">
            <ul className="list-disc list-inside text-sm">
              {homeData.announcements.map((a) => (
                <li key={a.id} className="mb-1">{a.title}: {a.body}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {query && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
          <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-3">Search results for “{query}”</h2>
          {results.length === 0 ? (
            <p className="text-slate-500">No results found.</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {results.map((b) => (
                <div key={b._id} className="group">
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
                </div>
              ))}
            </div>
          )}
        </section>
      )}

      {!query && (
        <Sections featured={homeData.featured} latest={homeData.latest} trending={homeData.trending} />
      )}

      <Footer />
    </div>
  )
}

export default App
