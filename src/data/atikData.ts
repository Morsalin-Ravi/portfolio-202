export interface VideoClipCategory {
  title: string;
  vertical: boolean;
  cols: string;
  ids: string[];
}

export interface FloatingBadge {
  label: string;
  dot: string;
  pos: string;
  delay: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface SocialLink {
  label: string;
  href: string;
  dotColor?: string;
}

export const PERSONAL_INFO = {
  name: "Morsalin Ravi",
  brandMark: "MORSALIN RAVI",
  shortMark: "MR",
  title: "Video Editor & Motion Designer",
  location: "Based in Bangladesh · Remote Worldwide",
  tagline: "// SHORT-FORM · TALKING-HEAD · FACELESS · YOUTUBE LONG-FORM · COMMERCIALS",
  bio: "Video Editor & Motion Designer crafting fast-paced, retention-focused video edits and kinetic motion graphics for creators, agencies, and ambitious brands worldwide.",
  email: "morsalinravi2018@gmail.com",
  avatarImage: "/avatar.png",
};

export const ATIK_NAV_SECTIONS = [
  { id: 'home', name: 'HOME' },
  { id: 'reel', name: 'REEL' },
  { id: 'work', name: 'WORK' },
  { id: 'skills', name: 'SKILLS' },
  { id: 'contact', name: 'CONTACT' },
];

export const INTRO_REEL_ID = 'tRueenzq-tU';

export const HERO_BADGES: FloatingBadge[] = [
  { label: 'Premiere Pro', dot: '#2196F3', pos: '-top-4 -left-4 sm:-left-8', delay: '0s' },
  { label: 'After Effects', dot: '#64B5F6', pos: '-top-3 -right-4 sm:-right-8', delay: '0.8s' },
  { label: 'CapCut', dot: '#90CAF9', pos: '-bottom-4 -left-3 sm:-left-8', delay: '1.6s' },
  { label: 'DaVinci Resolve', dot: '#E3F2FD', pos: '-bottom-3 -right-4 sm:-right-8', delay: '2.4s' },
];

export const HERO_STATS: StatItem[] = [
  { value: '3+', label: 'YEARS EDITING' },
  { value: '50+', label: 'VIDEOS DELIVERED' },
  { value: '7', label: 'CONTENT STYLES' },
  { value: '4K', label: 'MASTER EXPORT' },
];

export const WORK_CATEGORIES: VideoClipCategory[] = [
  {
    title: 'Dynamic Motion Graphics',
    vertical: true,
    cols: 'grid-cols-2 md:grid-cols-4',
    ids: ['3S3PDXdgJwI', 'StRFdSNedW4', 'dSCJx-TQvmU', 'TLQ5hw0WIMY'],
  },
  {
    title: 'Talking Head Video',
    vertical: true,
    cols: 'grid-cols-2 md:grid-cols-4',
    ids: ['CqLeoDky5a0', 'NaaQ9Jg54pM', 'KofcC8Liwzg', 'Y6q_o_HJ11Y'],
  },
  {
    title: 'YouTube Long Form',
    vertical: false,
    cols: 'grid-cols-1 sm:grid-cols-2',
    ids: ['Iz639Nda8zc', 'ZlJWdMWfSIU', 'VH0ZXrglRHY', 'nB9-9AtVn8c'],
  },
  {
    title: 'Faceless Video',
    vertical: false,
    cols: 'grid-cols-1 sm:grid-cols-2',
    ids: ['gX5qTmxw1Go', 'tKCqETwonbc', '9Y8D3CmUSzs', 'xwlQyxs0YKI'],
  },
  {
    title: 'Vox Style',
    vertical: false,
    cols: 'grid-cols-1 sm:grid-cols-2',
    ids: ['5IHM6XVBgMc', 'CceIrGxaIPY'],
  },
  {
    title: 'Typography Reels',
    vertical: true,
    cols: 'grid-cols-2 md:grid-cols-3',
    ids: ['xAkZzywR8hw', 'CCGhgSlI6eQ', '13xAzTOOw2g'],
  },
];

export const TOOLKIT_SOFTWARE = [
  'Adobe Premiere Pro',
  'Adobe After Effects',
  'DaVinci Resolve Studio',
  'Cinema 4D',
  'CapCut Pro',
  'Adobe Audition',
  'Photoshop',
  'Illustrator',
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    dotColor: '#2196F3',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com',
    dotColor: '#64B5F6',
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    dotColor: '#2196F3',
  },
  {
    label: 'WhatsApp',
    href: 'https://wa.me/8801604076721',
    dotColor: '#64B5F6',
  },
];

export const CONTACT_EMAIL = 'morsalinravi2018@gmail.com';
export const DISCORD_TAG = 'morsalinravi';
