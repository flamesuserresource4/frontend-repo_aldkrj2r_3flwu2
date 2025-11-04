import { useState } from 'react';
import { Users, ClipboardList, Trophy, Shield } from 'lucide-react';

function Stat({ label, value }) {
  return (
    <div className="rounded-lg border border-white/10 bg-zinc-900/40 p-4">
      <p className="text-xs text-gray-400">{label}</p>
      <p className="text-xl font-semibold text-white mt-1">{value}</p>
    </div>
  );
}

function PanelCard({ title, desc, cta }) {
  return (
    <div className="rounded-xl border border-white/10 bg-gradient-to-b from-zinc-900/60 to-zinc-900/30 p-5 hover:border-red-500/40 transition-colors">
      <h4 className="text-white font-semibold">{title}</h4>
      <p className="text-gray-400 text-sm mt-2">{desc}</p>
      <button className="mt-4 inline-flex items-center gap-2 text-xs px-3 py-2 rounded-md text-black bg-gradient-to-r from-red-500 to-red-600 hover:from-red-400 hover:to-red-500 shadow-[0_0_20px_rgba(255,0,0,0.5)]">
        {cta}
      </button>
    </div>
  );
}

function Leaderboard() {
  const data = [
    { team: 'Neon Ninjas', score: 96 },
    { team: 'Quantum Quokkas', score: 92 },
    { team: 'Red Shift', score: 90 },
    { team: 'Grid Guardians', score: 87 },
    { team: 'Byte Brigade', score: 85 },
  ];
  return (
    <div className="rounded-xl border border-white/10 bg-zinc-900/40 p-5">
      <div className="flex items-center gap-2 mb-4">
        <Trophy className="h-5 w-5 text-red-400" />
        <h4 className="text-white font-semibold">Leaderboard</h4>
      </div>
      <ul className="space-y-2">
        {data.map((row, i) => (
          <li key={row.team} className="flex items-center justify-between text-sm">
            <span className="text-gray-300">
              <span className="text-red-400 mr-3">#{i + 1}</span>
              {row.team}
            </span>
            <span className="text-white font-medium">{row.score}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Dashboard() {
  const [role, setRole] = useState('participant');

  return (
    <section className="py-16 md:py-20 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-md bg-gradient-to-br from-red-500 to-red-700 shadow-[0_0_20px_rgba(255,0,0,0.6)]" />
            <h3 className="text-white font-semibold text-xl">Dashboard</h3>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setRole('participant')}
              className={`px-3 py-2 rounded-md text-xs md:text-sm border ${
                role === 'participant'
                  ? 'border-red-500/60 text-red-300 bg-red-500/10'
                  : 'border-white/10 text-gray-300 hover:border-red-500/40'
              }`}
            >
              <Users className="inline-block h-4 w-4 mr-2" /> Participant
            </button>
            <button
              onClick={() => setRole('giver')}
              className={`px-3 py-2 rounded-md text-xs md:text-sm border ${
                role === 'giver'
                  ? 'border-red-500/60 text-red-300 bg-red-500/10'
                  : 'border-white/10 text-gray-300 hover:border-red-500/40'
              }`}
            >
              <Shield className="inline-block h-4 w-4 mr-2" /> Statement Giver
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {role === 'participant' ? (
            <>
              <Stat label="Active Registrations" value="3" />
              <Stat label="Team Invites" value="2" />
              <Stat label="Pending Reviews" value="1" />
              <Stat label="Total Points" value="2480" />
            </>
          ) : (
            <>
              <Stat label="Live Challenges" value="2" />
              <Stat label="Submissions to Review" value="7" />
              <Stat label="Judges Assigned" value="5" />
              <Stat label="Announcements" value="1" />
            </>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {role === 'participant' ? (
              <>
                <PanelCard title="My Teams" desc="Create or join a team, manage members, and collaborate." cta="Manage Teams" />
                <PanelCard title="Submissions" desc="Upload builds or link repos, track review status." cta="Submit Project" />
                <PanelCard title="Hackathons" desc="Browse available challenges and register quickly." cta="Explore Now" />
                <PanelCard title="Results" desc="View scores, feedback, and placements." cta="View Results" />
              </>
            ) : (
              <>
                <PanelCard title="My Challenges" desc="Post new problem statements with scoring criteria." cta="Create Challenge" />
                <PanelCard title="Evaluate" desc="Score team submissions and leave feedback." cta="Open Evaluations" />
                <PanelCard title="Participants" desc="View registered teams and members." cta="View Teams" />
                <PanelCard title="Winners" desc="Publish winners and share highlights." cta="Announce" />
              </>
            )}
          </div>
          <Leaderboard />
        </div>
      </div>
    </section>
  );
}
