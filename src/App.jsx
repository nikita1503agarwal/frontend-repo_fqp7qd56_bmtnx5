import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Work from './components/Work'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Work />
        <Process />
        <CTA />
      </main>
      <footer className="py-12 border-t border-black/10 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Flames Web Studio. All rights reserved.</p>
          <div className="text-sm text-gray-500">Designed & built with care.</div>
        </div>
      </footer>
    </div>
  )
}

export default App
