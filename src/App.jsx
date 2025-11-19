import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Logos from './components/Logos'
import Services from './components/Services'
import Process from './components/Process'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Logos />
        <Services />
        <Process />
        <CTA />
      </main>
      <footer className="bg-white border-t border-slate-200 py-10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-slate-500 text-sm flex flex-col sm:flex-row gap-3 justify-between">
          <p>© {new Date().getFullYear()} FlowForge Consulting. All rights reserved.</p>
          <p>Digitalization & automation partner for SMBs.</p>
        </div>
      </footer>
    </div>
  )
}

export default App