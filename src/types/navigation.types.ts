export interface NavItem {
  id: string;
  label: string;
  path: string;
  icon?: string;
  subItems?: NavItem[];
}

export interface SocialLink {
  platform: 'facebook' | 'twitter' | 'instagram' | 'linkedin' | 'youtube' | 'github';
  url: string;
  icon: string;
  label: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  path: string;
  component: string;
  requiresAuth: boolean;
  seo: {
    title: string;
    description: string;
    keywords: string[];
  };
}
