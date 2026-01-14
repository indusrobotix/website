// Theme types
export interface ThemeColors {
  primaryBlue: string;
  secondaryTeal: string;
  accentTeal: string;
  lightTeal: string;
  darkBlue: string;
  metalGray: string;
  lightGray: string;
  white: string;
}

export interface Theme {
  colors: ThemeColors;
  shadows: {
    small: string;
    medium: string;
    large: string;
  };
  transitions: {
    default: string;
    fast: string;
    slow: string;
  };
}

// Business types
export interface BusinessInfo {
  name: string;
  founded: number;
  owner: string;
  location: string;
  email: string;
  phone: string;
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}

export interface SeoConfig {
  title: string;
  description: string;
  keywords: string[];
  author: string;
  ogImage: string;
  twitterHandle: string;
  canonicalUrl: string;
}
