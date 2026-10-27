export type ProjectCategory = 
  | 'All' 
  | 'Commercial Video Editing' 
  | 'Brand Advertisement' 
  | 'Motion Graphics' 
  | 'Social Media Campaign' 
  | 'Cinematic Storytelling' 
  | 'Product Promotional Video';

export interface Project {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: ProjectCategory;
  shortDescription: string;
  creativeBrief: string;
  role: string;
  techniques: string[];
  tools: string[];
  deliverables: string[];
  results?: string;
  duration: string;
  year: string;
  aspectRatio: string;
  featured: boolean;
  accentColor: string;
  // Theme key for procedural cinematic poster preview
  theme: 'automotive' | 'luxury' | 'motion' | 'social' | 'narrative' | 'product';
  videoPreviewUrl?: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  shortSubtitle: string;
  description: string;
  valueDelivered: string;
  deliverables: string[];
  iconName: string;
  keySoftware: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  summary: string;
  description: string;
  milestones: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole: string;
  company: string;
  projectTitle: string;
  isPlaceholder?: boolean;
}

export interface ContactConfig {
  name: string;
  title: string;
  email: string;
  location: string;
  availability: string;
  timeZone: string;
  socials: {
    platform: string;
    url: string;
    handle: string;
  }[];
}
