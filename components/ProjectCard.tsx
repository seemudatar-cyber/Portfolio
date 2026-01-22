import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const hasLiveUrl = project.liveUrl && project.liveUrl !== '#' && project.liveUrl.trim() !== '';
  const hasGithubUrl = project.githubUrl && project.githubUrl !== '#' && project.githubUrl.trim() !== '';

  return (
    <div className="group relative bg-[#0a0f1a] border border-white/5 rounded-[40px] overflow-hidden transition-all duration-700 hover:border-blue-500/40 hover:shadow-[0_0_80px_-20px_rgba(37,99,235,0.2)] flex flex-col h-full">
      {/* Visual Header */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-60 group-hover:opacity-100 grayscale-[50%] group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
        
        {/* Solutions Badge */}
        <div className="absolute top-6 left-6">
          <div className="flex items-center space-x-2 px-3 py-1.5 bg-black/80 backdrop-blur-xl border border-white/10 rounded-full">
            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
            <span className="text-[8px] font-black text-white/90 uppercase tracking-widest">Deployed Solution</span>
          </div>
        </div>
      </div>
      
      <div className="p-10 flex flex-col flex-1">
        <h3 className="text-2xl font-black text-white group-hover:text-blue-400 transition-colors tracking-tight leading-tight mb-6">
          {project.title}
        </h3>
        
        <p className="text-gray-400 text-[13px] mb-10 leading-relaxed line-clamp-4 font-light italic">
          {project.longDescription}
        </p>
        
        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-10">
            {project.tags.map(tag => (
              <span key={tag} className="px-3 py-1.5 text-[8px] uppercase tracking-widest font-black bg-blue-500/5 border border-blue-500/10 rounded-lg text-blue-500/70">
                {tag}
              </span>
            ))}
          </div>
          
          <div className="flex items-center space-x-4">
            {hasGithubUrl && (
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center space-x-3 py-4 bg-white/5 border border-white/10 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-white hover:text-black transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                <span>Project Code</span>
              </a>
            )}
            
            {hasLiveUrl && (
              <a 
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-blue-600 rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-blue-500 transition-all shadow-lg text-white text-center"
              >
                Launch Portal
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;