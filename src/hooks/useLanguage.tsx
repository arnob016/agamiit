
import { createContext, useState, useContext, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

interface Translation {
  [key: string]: string | string[];
}

interface LanguageContextType {
  language: 'en' | 'bn';
  toggleLanguage: () => void;
  t: Translation;
}

const translations: { [key: string]: Translation } = {
  en: {
    companyName: "Agami IT",
    tagline: "Your Digital Transformation Partner",
    description: "End-to-end web development, software, mobile app, and digital marketing solutions for businesses of all sizes in Bangladesh and beyond.",
    heroSubtitle: "Professional Technology Solutions Since 2015",
    services: "Our Services",
    packages: "Website Packages",
    about: "About Us",
    contact: "Contact",
    getStarted: "Get Started",
    learnMore: "Learn More",
    contactUs: "Contact Us",
    
    // Services
    webDevelopment: "Website Development",
    webDevDesc: "Corporate, business, and eCommerce websites using modern frameworks",
    mobileApps: "Mobile Applications",
    mobileDesc: "Native Android and iOS app development with modern UI/UX",
    softwareSolutions: "Software Solutions",
    softwareDesc: "Custom business software including ERP, CRM, and management systems",
    digitalMarketing: "SEO & Digital Marketing",
    marketingDesc: "Search engine optimization and comprehensive digital marketing",
    
    // Website Types
    websiteTypes: [
      "Company Website",
      "eCommerce Website", 
      "CMS Website",
      "Custom Marketplace",
      "Educational Website",
      "WordPress & Joomla",
      "SEO-Optimized",
      "Mobile-Friendly"
    ],
    
    // Software Products
    softwareProducts: [
      "Accounting & Inventory",
      "HR & Payroll",
      "Point of Sale (POS)",
      "Hospital Management",
      "School Management",
      "Restaurant Management",
      "Travel Agency Software",
      "Bulk SMS & WhatsApp Marketing"
    ],
    
    // Package names
    beginnerPackage: "Beginner Package",
    corporatePackage: "Corporate Package", 
    corporatePlusPackage: "Corporate Plus Package",
    businessPackage: "Business Package",
    cmsMarketPlace: "CMS Market Place",
    customMarketPlace: "Custom Market Place",
    
    // Features
    freeDomain: "Free .com/.net/.org domain",
    freeHosting: "Free hosting included",
    emailAddresses: "Professional email addresses",
    responsiveDesign: "Responsive design",
    adminPanel: "Admin dashboard",
    smsAlerts: "SMS alerts",
    mobileApp: "Mobile app support",
    
    // About section
    aboutTitle: "Leading Technology Partner in Bangladesh",
    aboutDescription: "Agami IT is a Bangladesh-based technology company providing comprehensive digital solutions to businesses across various industries including B2B, B2C, NGOs, startups, and corporate clients.",
    
    // Contact
    location: "Dhaka, Bangladesh",
    emailLabel: "Email",
    phoneLabel: "Phone",
    
    // CTA
    readyToStart: "Ready to Start Your Digital Journey?",
    ctaDescription: "Let's discuss your project and bring your digital vision to life with our expert team.",
    
    // Language
    language: "Language",
    english: "English",
    bengali: "বাংলা"
  },
  bn: {
    companyName: "আগামী আইটি",
    tagline: "আপনার ডিজিটাল রূপান্তরের অংশীদার",
    description: "বাংলাদেশ এবং বিশ্বব্যাপী সকল আকারের ব্যবসার জন্য সম্পূর্ণ ওয়েব ডেভেলপমেন্ট, সফটওয়্যার, মোবাইল অ্যাপ এবং ডিজিটাল মার্কেটিং সমাধান।",
    heroSubtitle: "২০১৫ সাল থেকে পেশাদার প্রযুক্তি সমাধান",
    services: "আমাদের সেবাসমূহ",
    packages: "ওয়েবসাইট প্যাকেজ",
    about: "আমাদের সম্পর্কে",
    contact: "যোগাযোগ",
    getStarted: "শুরু করুন",
    learnMore: "আরও জানুন",
    contactUs: "যোগাযোগ করুন",
    
    // Services
    webDevelopment: "ওয়েবসাইট ডেভেলপমেন্ট",
    webDevDesc: "আধুনিক ফ্রেমওয়ার্ক ব্যবহার করে কর্পোরেট, ব্যবসায়িক এবং ই-কমার্স ওয়েবসাইট",
    mobileApps: "মোবাইল অ্যাপ্লিকেশন",
    mobileDesc: "আধুনিক UI/UX সহ নেটিভ অ্যান্ড্রয়েড এবং iOS অ্যাপ ডেভেলপমেন্ট",
    softwareSolutions: "সফটওয়্যার সমাধান",
    softwareDesc: "ERP, CRM এবং ম্যানেজমেন্ট সিস্টেম সহ কাস্টম ব্যবসায়িক সফটওয়্যার",
    digitalMarketing: "SEO ও ডিজিটাল মার্কেটিং",
    marketingDesc: "সার্চ ইঞ্জিন অপটিমাইজেশন এবং ব্যাপক ডিজিটাল মার্কেটিং",
    
    // Website Types
    websiteTypes: [
      "কোম্পানী ওয়েবসাইট",
      "ই-কমার্স ওয়েবসাইট",
      "CMS ওয়েবসাইট", 
      "কাস্টম মার্কেটপ্লেস",
      "শিক্ষামূলক ওয়েবসাইট",
      "ওয়ার্ডপ্রেস ও জুমলা",
      "SEO অপটিমাইজড",
      "মোবাইল বান্ধব"
    ],
    
    // Software Products  
    softwareProducts: [
      "অ্যাকাউন্টিং ও ইনভেন্টরি",
      "HR ও পে-রোল",
      "পয়েন্ট অফ সেল (POS)",
      "হাসপাতাল ব্যবস্থাপনা",
      "স্কুল ব্যবস্থাপনা", 
      "রেস্তোরাঁ ব্যবস্থাপনা",
      "ট্রাভেল এজেন্সি সফটওয়্যার",
      "বাল্ক SMS ও হোয়াটসঅ্যাপ মার্কেটিং"
    ],
    
    // Package names
    beginnerPackage: "শিক্ষানবিস প্যাকেজ",
    corporatePackage: "কর্পোরেট প্যাকেজ",
    corporatePlusPackage: "কর্পোরেট প্লাস প্যাকেজ", 
    businessPackage: "ব্যবসায়িক প্যাকেজ",
    cmsMarketPlace: "CMS মার্কেট প্লেস",
    customMarketPlace: "কাস্টম মার্কেট প্লেস",
    
    // Features
    freeDomain: "বিনামূল্যে .com/.net/.org ডোমেইন",
    freeHosting: "বিনামূল্যে হোস্টিং অন্তর্ভুক্ত",
    emailAddresses: "পেশাদার ইমেইল ঠিকানা",
    responsiveDesign: "রেসপনসিভ ডিজাইন",
    adminPanel: "অ্যাডমিন ড্যাশবোর্ড",
    smsAlerts: "SMS সতর্কতা",
    mobileApp: "মোবাইল অ্যাপ সাপোর্ট",
    
    // About section
    aboutTitle: "বাংলাদেশের নেতৃস্থানীয় প্রযুক্তি অংশীদার",
    aboutDescription: "আগামী আইটি একটি বাংলাদেশ-ভিত্তিক প্রযুক্তি কোম্পানি যা B2B, B2C, NGO, স্টার্টআপ এবং কর্পোরেট ক্লায়েন্ট সহ বিভিন্ন শিল্পের ব্যবসায়িকদের জন্য ব্যাপক ডিজিটাল সমাধান প্রদান করে।",
    
    // Contact
    location: "ঢাকা, বাংলাদেশ",
    emailLabel: "ইমেইল",
    phoneLabel: "ফোন",
    
    // CTA
    readyToStart: "আপনার ডিজিটাল যাত্রা শুরু করতে প্রস্তুত?",
    ctaDescription: "আসুন আপনার প্রকল্প নিয়ে আলোচনা করি এবং আমাদের বিশেষজ্ঞ দলের সাথে আপনার ডিজিটাল দৃষ্টিভঙ্গি বাস্তবায়ন করি।",
    
    // Language
    language: "ভাষা",
    english: "English", 
    bengali: "বাংলা"
  }
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'en',
  toggleLanguage: () => {},
  t: translations['en'],
});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  
  const toggleLanguage = () => {
    const newLanguage = language === 'en' ? 'bn' : 'en';
    setLanguage(newLanguage);
    toast({
      title: language === 'en' ? "ভাষা পরিবর্তিত হয়েছে" : "Language Changed",
      description: language === 'en' ? "বাংলায় পরিবর্তিত হয়েছে" : "Changed to English",
    });
  };
  
  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
