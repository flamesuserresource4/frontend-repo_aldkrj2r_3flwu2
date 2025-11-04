import { motion } from 'framer-motion';
import { Calendar, Clock, Award } from 'lucide-react';

const Card = ({ title, desc, deadline, tag }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -6, boxShadow: '0 0 40px rgba(255,0,0,0.35)' }}
    transition={{ type: 'spring', stiffness: 220, damping: 22 }}
    className="group relative rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-900/30 p-5 backdrop-blur hover:border-red-500/40"
  >
    <div className="absolute inset-0 rounded-xl bg-red-500/0 group-hover:bg-red-500/5 transition-colors" />
    <div className="flex items-start justify-between">
      <h3 className="text-white font-semibold text-lg">{title}</h3>
      {tag && (
        <span className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-red-600/20 text-red-300 border border-red-500/30">
          {tag}
        </span>
      )}
    </div>
    <p className="text-gray-400 mt-2 text-sm">{desc}</p>
    <div className="flex items-center gap-6 mt-4 text-xs text-gray-300/90">
      <span className="inline-flex items-center gap-2"><Calendar className="h-4 w-4 text-red-400" /> Deadline</span>
      <span className="inline-flex items-center gap-2"><Clock className="h-4 w-4 text-red-400" /> {deadline}</span>
      <span className="inline-flex items-center gap-2"><Award className="h-4 w-4 text-red-400" /> Prizes</span>
    </div>
  </motion.div>
);

export default function Highlights() {
  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-white">Ongoing & Upcoming</h2>
            <p className="text-gray-400 mt-2">Join live challenges or get ready for what's next.</p>
          </div>
          <a href="#" className="text-red-400 hover:text-red-300 text-sm">View all</a>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="AI for Social Good"
            desc="Build ML solutions that make an impact. Datasets provided."
            deadline="Mar 28, 2025"
            tag="Ongoing"
          />
          <Card
            title="Web3 Identity"
            desc="Design secure, privacy‑first identity primitives on-chain."
            deadline="Apr 05, 2025"
            tag="Upcoming"
          />
          <Card
            title="Sustainable Campus Tech"
            desc="Optimize energy, transport, or waste with data‑driven apps."
            deadline="Apr 18, 2025"
            tag="Upcoming"
          />
        </div>
      </div>
    </section>
  );
}
