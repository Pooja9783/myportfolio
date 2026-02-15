
export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  link: string;
  image: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
