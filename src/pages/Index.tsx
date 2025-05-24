
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Globe, Code, Smartphone, Settings, Mail, Phone, MapPin, Star, Check, ArrowRight, Languages } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

interface Translation {
  [key: string]: string | string[];
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

const packages = [
  {
    name: "beginnerPackage",
    price: "৳30,000 / $400",
    renewalPrice: "৳7,500 / $100",
    features: [
      "freeDomain",
      "Free 500 MB Hosting", 
      "20 Email addresses",
      "5 Pages",
      "responsiveDesign",
      "Cash On Delivery",
      "10 days development"
    ]
  },
  {
    name: "corporatePackage", 
    price: "৳50,000 / $650",
    renewalPrice: "৳11,500 / $150",
    features: [
      "freeDomain",
      "Free 1000 MB Hosting",
      "50 Email addresses", 
      "10 Pages",
      "responsiveDesign",
      "Cash on delivery, bKash",
      "Multiple Image Option",
      "12 days development"
    ]
  },
  {
    name: "corporatePlusPackage",
    price: "৳75,000 / $1000", 
    renewalPrice: "৳11,500 / $150",
    features: [
      "freeDomain",
      "Free 1000 MB Hosting",
      "50 Email addresses",
      "15 Pages", 
      "responsiveDesign",
      "COD, bKash, Credit Card",
      "Multiple Image Option",
      "15 days development"
    ]
  }
];

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'bn'>('en');
  const t = translations[language];

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'bn' : 'en');
    toast({
      title: language === 'en' ? "ভাষা পরিবর্তিত হয়েছে" : "Language Changed",
      description: language === 'en' ? "বাংলায় পরিবর্তিত হয়েছে" : "Changed to English",
    });
  };

  const handleContactClick = () => {
    toast({
      title: t.contactUs as string,
      description: language === 'en' ? "Get in touch with our team!" : "আমাদের টিমের সাথে যোগাযোগ করুন!",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">{t.companyName}</h1>
              <p className="text-xs text-gray-600">Since 2015</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.services}
            </a>
            <a href="#packages" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.packages}
            </a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.about}
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              {t.contact}
            </a>
          </nav>
          
          <div className="flex items-center space-x-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm">{language === 'en' ? t.bengali : t.english}</span>
            </Button>
            <Button onClick={handleContactClick} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              {t.getStarted}
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6 px-4 py-2 text-sm">
            {t.heroSubtitle}
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent leading-tight">
            {t.tagline}
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            {t.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-8 py-6 text-lg"
              onClick={handleContactClick}
            >
              {t.getStarted}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
              {t.learnMore}
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.services}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{t.webDevelopment}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  {t.webDevDesc}
                </CardDescription>
                <div className="space-y-2">
                  {(t.websiteTypes as string[]).slice(0, 4).map((type, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {type}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{t.mobileApps}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  {t.mobileDesc}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Android Development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    iOS Development
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Cross-Platform Apps
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    UI/UX Design
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Settings className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{t.softwareSolutions}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  {t.softwareDesc}
                </CardDescription>
                <div className="space-y-2">
                  {(t.softwareProducts as string[]).slice(0, 4).map((product, index) => (
                    <div key={index} className="flex items-center text-sm text-gray-600">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      {product}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl">{t.digitalMarketing}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center mb-4">
                  {t.marketingDesc}
                </CardDescription>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    SEO Optimization
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Social Media Marketing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Content Marketing
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Speed Optimization
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {t.packages}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Choose from our carefully crafted website packages designed to meet different business needs" 
                : "বিভিন্ন ব্যবসায়িক চাহিদা মেটাতে ডিজাইন করা আমাদের সুন্দরভাবে তৈরি ওয়েবসাইট প্যাকেজগুলি থেকে বেছে নিন"
              }
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {packages.map((pkg, index) => (
              <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 shadow-lg ${index === 1 ? 'transform scale-105 border-2 border-blue-500' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-medium">
                    {language === 'en' ? 'Popular' : 'জনপ্রিয়'}
                  </div>
                )}
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {t[pkg.name] as string}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      {language === 'en' ? 'Renewal: ' : 'নবায়ন: '}{pkg.renewalPrice}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">
                          {t[feature] ? t[feature] as string : feature}
                        </span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full mt-6 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    onClick={handleContactClick}
                  >
                    {t.getStarted}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                {t.aboutTitle}
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {t.aboutDescription}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Star className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Projects Completed' : 'সম্পন্ন প্রকল্প'}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <User className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">200+</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Happy Clients' : 'সন্তুষ্ট ক্লায়েন্ট'}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Settings className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">9+</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Years Experience' : 'বছরের অভিজ্ঞতা'}
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">24/7</div>
                    <div className="text-sm text-gray-600">
                      {language === 'en' ? 'Support Available' : 'সাপোর্ট উপলব্ধ'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4 bg-blue-50 rounded-xl">
                    <Globe className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Web Dev</div>
                  </div>
                  <div className="text-center p-4 bg-green-50 rounded-xl">
                    <Smartphone className="h-8 w-8 text-green-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Mobile Apps</div>
                  </div>
                  <div className="text-center p-4 bg-purple-50 rounded-xl">
                    <Settings className="h-8 w-8 text-purple-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Software</div>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-xl">
                    <Star className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="font-semibold text-gray-900">Marketing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {t.readyToStart}
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t.ctaDescription}
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto mt-6"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{t.emailLabel}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100">info@agamiit.com</p>
                <p className="text-blue-100">support@agamiit.com</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{t.phoneLabel}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100">+880 1XXX-XXXXXX</p>
                <p className="text-blue-100">+880 1XXX-XXXXXX</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle>{t.location}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-blue-100">
                  {language === 'en' 
                    ? "Professional IT Services" 
                    : "পেশাদার আইটি সেবা"
                  }
                </p>
                <p className="text-blue-100">
                  {language === 'en' 
                    ? "Dhaka, Bangladesh" 
                    : "ঢাকা, বাংলাদেশ"
                  }
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-white text-blue-900 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
              onClick={handleContactClick}
            >
              {t.contactUs}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                  <Code className="h-5 w-5 text-white" />
                </div>
                <span className="text-xl font-bold">{t.companyName}</span>
              </div>
              <p className="text-gray-400 mb-4">
                {language === 'en' 
                  ? "Your trusted technology partner since 2015" 
                  : "২০১৫ সাল থেকে আপনার বিশ্বস্ত প্রযুক্তি অংশীদার"
                }
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.services}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.webDevelopment}</li>
                <li>{t.mobileApps}</li>
                <li>{t.softwareSolutions}</li>
                <li>{t.digitalMarketing}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.packages}</h3>
              <ul className="space-y-2 text-gray-400">
                <li>{t.beginnerPackage}</li>
                <li>{t.corporatePackage}</li>
                <li>{t.businessPackage}</li>
                <li>{t.customMarketPlace}</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
              <div className="space-y-2 text-gray-400">
                <p>info@agamiit.com</p>
                <p>+880 1XXX-XXXXXX</p>
                <p>{t.location}</p>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 {t.companyName}. {language === 'en' ? 'All rights reserved.' : 'সকল অধিকার সংরক্ষিত।'}
            </p>
            <div className="flex items-center space-x-4 mt-4 md:mt-0">
              <Button
                variant="ghost"
                size="sm"
                onClick={toggleLanguage}
                className="text-gray-400 hover:text-white"
              >
                <Languages className="h-4 w-4 mr-2" />
                {language === 'en' ? t.bengali : t.english}
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
