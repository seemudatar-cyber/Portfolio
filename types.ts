
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  stats: {
    stars: number;
    forks: number;
  };
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'ai';
  icon?: string;
}

export interface Message {
  role: 'user' | 'model';
  content: string;
}
