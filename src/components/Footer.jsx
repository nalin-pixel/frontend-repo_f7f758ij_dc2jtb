export default function Footer() {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Digital Library. All rights reserved.</p>
        <nav className="text-sm text-slate-500 flex items-center gap-4">
          <a href="#" className="hover:text-slate-700">Accessibility</a>
          <a href="#" className="hover:text-slate-700">Privacy</a>
          <a href="#" className="hover:text-slate-700">Contact</a>
        </nav>
      </div>
    </footer>
  )
}
