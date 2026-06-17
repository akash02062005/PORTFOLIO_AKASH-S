import { ArrowLeft } from 'lucide-react'
import { navigate } from '../hooks/useHashRoute'
import Research from '../components/sections/Research'

export default function CertificatesPage() {
  return (
    <main className="pt-28">
      <div className="mx-auto w-full max-w-6xl px-5 md:px-8">
        <button
          onClick={() => navigate('/')}
          className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-300 transition hover:border-neon-cyan/50 hover:text-white"
        >
          <ArrowLeft size={16} /> Back to home
        </button>
      </div>
      <Research />
    </main>
  )
}
