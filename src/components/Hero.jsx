import Spline from '@splinetool/react-spline';
import { Rocket, PlusCircle } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/hinHjJppKaZFIbCr/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gentle radial vignette and red glow overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.4)_60%,rgba(0,0,0,0.8)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-red-500/10 mix-blend-screen" />

      <div className="relative z-10 max-w-7xl mx-auto h-full px-6 flex items-center">
        <div className="max-w-3xl">
          <p className="uppercase tracking-[0.35em] text-xs md:text-sm text-red-400/80 mb-4">University Hackathon Platform</p>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-white drop-shadow-[0_0_36px_rgba(255,0,0,0.25)]">
            HackVerse
          </h1>
          <p className="text-base md:text-lg text-gray-300 mt-4 max-w-2xl">
            Compete, collaborate, and create. Post challenges, form teams, and submit cutting‑edge solutions in a bold, minimal, neon‑red interface.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 shadow-[0_0_35px_rgba(255,0,0,0.6)] transition-colors"
            >
              <Rocket className="h-5 w-5" />
              Browse Hackathons
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-white/10 text-white hover:border-red-500/60 hover:text-red-300 transition-colors"
            >
              <PlusCircle className="h-5 w-5" />
              Post a Challenge
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
