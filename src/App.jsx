import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="min-h-screen bg-black antialiased">
      <Navbar />
      <Hero />
      <Highlights />
      <Dashboard />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-gray-400 bg-black">
        <p>
          © {new Date().getFullYear()} HackVerse. Built for modern university hackathons. <span className="text-red-400">Stay bold.</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
