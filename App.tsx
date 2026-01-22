import React, { useState, useEffect } from 'react';
import ProjectCard from './components/ProjectCard';
import { PROJECTS, SKILLS, PERSONAL_INFO } from './constants';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const downloadProfileInfo = () => {
    const data = {
      name: PERSONAL_INFO.name,
      role: PERSONAL_INFO.role,
      bio: PERSONAL_INFO.bio,
      impact: PERSONAL_INFO.impactSummary,
      contact: {
        email: PERSONAL_INFO.email,
        linkedin: PERSONAL_INFO.linkedin,
        github: PERSONAL_INFO.github
      }
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'seema-datar-profile.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-blue-500/30">
      {/* Background Grid */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none opacity-[0.15]" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-black/95 backdrop-blur-md border-b border-white/5 py-4 shadow-lg' : 'bg-transparent py-10'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div 
            className="flex items-center space-x-3 group cursor-pointer" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <div className="w-9 h-9 bg-blue-600 rounded-lg flex items-center justify-center font-black text-sm shadow-[0_0_15px_rgba(37,99,235,0.4)] transition-transform group-hover:scale-110">SD</div>
            <span className="font-black text-xl tracking-tighter uppercase">
              Seema <span className="text-blue-500">Datar</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-gray-400">
            <button onClick={() => scrollToSection('solutions')} className="hover:text-blue-400 transition-colors uppercase">Portals</button>
            <button onClick={() => scrollToSection('impact')} className="hover:text-blue-400 transition-colors uppercase">Leadership</button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors uppercase">Profile</button>
            <a 
              href={PERSONAL_INFO.linkedin} 
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all font-black shadow-lg shadow-blue-600/20"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-64 pb-32 md:pt-72 md:pb-48 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center lg:text-left">
          <div className="max-w-4xl mx-auto lg:mx-0">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/10 text-blue-400 text-[9px] font-black uppercase tracking-[0.4em] mb-12">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>Executive Engineering Leader</span>
            </div>
            
            <h1 className="text-6xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-10 uppercase italic">
              Connect.<br/>Analyze.<br/><span className="text-blue-500 not-italic">Enable.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-14 leading-relaxed max-w-2xl font-light mx-auto lg:mx-0">
              Strategizing <span className="text-white font-medium underline decoration-blue-500/40 underline-offset-8">high-integrity architectures</span> for the world's leading financial institutions and global payment ecosystems.
            </p>

            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <button 
                onClick={() => scrollToSection('solutions')}
                className="px-12 py-5 bg-blue-600 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-blue-500 transition-all text-center shadow-xl shadow-blue-600/10"
              >
                View Portals
              </button>
              <button 
                onClick={downloadProfileInfo}
                className="px-12 py-5 bg-white/5 border border-white/10 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-white/10 transition-all text-center"
              >
                Download Profile
              </button>
            </div>
          </div>
        </div>
        
        {/* Glow Effect */}
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      </section>

      {/* Metrics Bar */}
      <section className="py-20 border-y border-white/5 bg-black/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            { label: 'Experience', val: '23+ Yrs' },
            { label: 'Integrity', val: 'SOX/SEC' },
            { label: 'Scale', val: 'Global' },
            { label: 'Impact', val: 'VP Level' }
          ].map((stat, i) => (
            <div key={i} className="text-center md:text-left">
              <p className="text-blue-500 font-black text-3xl mb-1">{stat.val}</p>
              <p className="text-gray-500 text-[9px] uppercase tracking-[0.4em] font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions / Portals */}
      <section id="solutions" className="py-32 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase italic">Strategic <span className="text-blue-500 not-italic">Portals.</span></h2>
              <p className="text-gray-500 text-xl font-light leading-relaxed border-l-2 border-blue-600/30 pl-8">
                Demonstrated architectures in automated compliance, merchant risk scoring, and high-visibility financial telemetry.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {PROJECTS.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Impact */}
      <section id="impact" className="py-40 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-blue-500 font-black text-[10px] uppercase tracking-[0.6em] mb-8 block">Executive Record</span>
            <h2 className="text-5xl md:text-7xl font-black mb-12 tracking-tighter italic uppercase">Leadership <span className="text-blue-500 not-italic">Impact.</span></h2>
            <p className="text-xl text-gray-400 leading-relaxed font-light mb-16">
              {PERSONAL_INFO.impactSummary}
            </p>
            
            <div className="space-y-10">
              {[
                { title: 'Strategic Alignment', desc: 'Leading cross-org alignment for multi-rail settlement platforms.' },
                { title: 'Global Compliance', desc: 'Architecting SOX-compliant financial systems for global scale.' },
                { title: 'Operational Stability', desc: 'Restoring mission-critical services during large-scale regressions.' }
              ].map((item, idx) => (
                <div key={idx} className="flex space-x-6 items-start">
                  <span className="text-blue-500 font-black text-lg">0{idx + 1}</span>
                  <div>
                    <h4 className="font-bold text-xl mb-2 text-white/90 uppercase tracking-tight">{item.title}</h4>
                    <p className="text-gray-500 font-light leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative group">
            <div className="absolute -inset-10 bg-blue-600/5 rounded-[60px] blur-3xl opacity-50 group-hover:opacity-100 transition-opacity duration-1000" />
            <div className="relative bg-[#0d1117] border border-white/5 rounded-[48px] p-12 shadow-2xl overflow-hidden">
               {/* Terminal Style Skillset */}
               <div className="flex space-x-2 mb-10">
                 <div className="w-3 h-3 rounded-full bg-red-500/30" />
                 <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
                 <div className="w-3 h-3 rounded-full bg-green-500/30" />
               </div>
               <div className="flex flex-wrap gap-3">
                 {SKILLS.map(skill => (
                   <span 
                     key={skill.name} 
                     className="px-4 py-2.5 bg-blue-500/10 border border-blue-500/20 rounded-xl text-[11px] font-semibold text-blue-300/90 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all"
                   >
                     {skill.name}
                   </span>
                 ))}
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* About / Final CTA */}
      <section id="about" className="py-40 relative border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-12 tracking-tight italic uppercase">Seema <span className="text-blue-500 not-italic">Datar.</span></h2>
          <p className="text-2xl text-gray-400 leading-relaxed mb-16 font-light italic">
            "{PERSONAL_INFO.bio}"
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#030303] border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black mb-2 uppercase tracking-tighter">Seema <span className="text-blue-500">Datar</span></h3>
              <p className="text-gray-600 text-[10px] font-black uppercase tracking-[0.5em]">Kirkland, WA • Global Engineering Leadership</p>
            </div>
            <div className="flex items-center space-x-10 text-gray-500 text-[10px] font-black uppercase tracking-widest">
              {PERSONAL_INFO.github && <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>}
              {PERSONAL_INFO.linkedin && <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>}
              {PERSONAL_INFO.email && <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-white transition-colors">Email</a>}
            </div>
          </div>
          <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] text-gray-700 font-bold uppercase tracking-[0.5em] gap-4">
             <span>© 2025 Executive Portfolio • Seema Datar</span>
             <span className="text-blue-500/40">Secure • Scalable • Strategic</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;