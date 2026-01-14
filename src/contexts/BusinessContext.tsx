import React, { createContext, useContext, ReactNode } from 'react';
import { BusinessInfo, SeoConfig } from '../types';

interface BusinessContextType {
  businessInfo: BusinessInfo;
  seoConfig: SeoConfig;
}

const businessInfo: BusinessInfo = {
  name: 'IndusRoboTix',
  founded: 2026,
  owner: 'Furqan Khatti',
  location: 'Pakistan',
  email: 'info@indusrobotix.com',
  phone: '+92 300 1234567',
  socialMedia: {
    facebook: 'https://facebook.com/indusrobotix',
    twitter: 'https://twitter.com/indusrobotix',
    instagram: 'https://instagram.com/indusrobotix',
    linkedin: 'https://linkedin.com/company/indusrobotix',
    youtube: 'https://youtube.com/@indusrobotix'
  }
};

const seoConfig: SeoConfig = {
  title: 'IndusRoboTix - Pakistan\'s Premier Robotics Solutions',
  description: 'Custom robotic kits and precision-designed acrylic chassis. IndusRoboTix provides quality robotics solutions for students, educators, and makers across Pakistan.',
  keywords: ['robotics', 'Pakistan', 'robotic kits', 'STEM education', 'Arduino', 'custom chassis', 'electronics', 'automation'],
  author: 'Furqan Khatti',
  ogImage: 'https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/5a266280-efbb-4532-ab99-0c6a7a00ac2c/id-preview-b412386f--d864ef60-be9e-48e1-8f35-39cedeb57c0c.lovable.app-1768375750654.png',
  twitterHandle: '@IndusRoboTix',
  canonicalUrl: 'https://indusrobotix.pk'
};

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export const BusinessProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <BusinessContext.Provider value={{ businessInfo, seoConfig }}>
      {children}
    </BusinessContext.Provider>
  );
};

export const useBusiness = (): BusinessContextType => {
  const context = useContext(BusinessContext);
  if (!context) {
    throw new Error('useBusiness must be used within a BusinessProvider');
  }
  return context;
};
