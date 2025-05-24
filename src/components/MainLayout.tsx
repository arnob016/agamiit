
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';
import { Separator } from '@/components/ui/separator';
import { Code, Languages, Mail, Phone, MapPin, Star, Check, ArrowRight, Globe, Smartphone, Settings } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import { useLanguage } from '@/hooks/useLanguage';
import MobileMenu from '@/components/MobileMenu';

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const { t, language, toggleLanguage } = useLanguage();
  const location = useLocation();
  
  const handleContactClick = () => {
    toast({
      title: t.contactUs as string,
      description: language === 'en' ? "Get in touch with our team!" : "আমাদের টিমের সাথে যোগাযোগ করুন!",
    });
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">{t.companyName}</h1>
                <p className="text-xs text-gray-600">Since 2015</p>
              </div>
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/" 
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive('/') ? 'text-blue-600' : ''}`}
            >
              {language === 'en' ? "Home" : "হোম"}
            </Link>
            <Link 
              to="/about" 
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive('/about') ? 'text-blue-600' : ''}`}
            >
              {t.about}
            </Link>
            <Link 
              to="/services" 
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive('/services') ? 'text-blue-600' : ''}`}
            >
              {t.services}
            </Link>
            <Link 
              to="/contact" 
              className={`text-gray-700 hover:text-blue-600 font-medium transition-colors ${isActive('/contact') ? 'text-blue-600' : ''}`}
            >
              {t.contact}
            </Link>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button
              id="language-toggle"
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="hidden md:flex items-center space-x-2 text-gray-700 hover:text-blue-600"
            >
              <Languages className="h-4 w-4" />
              <span className="text-sm">{language === 'en' ? t.bengali : t.english}</span>
            </Button>
            
            <Button onClick={handleContactClick} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hidden md:flex">
              {t.getStarted}
            </Button>
            
            <MobileMenu />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="overflow-x-hidden">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 overflow-hidden">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
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
                <li><Link to="/services" className="hover:text-white transition-colors">{t.webDevelopment}</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">{t.mobileApps}</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">{t.softwareSolutions}</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">{t.digitalMarketing}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.packages}</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/#packages" className="hover:text-white transition-colors">{t.beginnerPackage}</Link></li>
                <li><Link to="/#packages" className="hover:text-white transition-colors">{t.corporatePackage}</Link></li>
                <li><Link to="/#packages" className="hover:text-white transition-colors">{t.businessPackage}</Link></li>
                <li><Link to="/#packages" className="hover:text-white transition-colors">{t.customMarketPlace}</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">{t.contact}</h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <a href="mailto:info@agamiit.com" className="hover:text-white transition-colors">info@agamiit.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>{t.location}</span>
                </div>
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

export default MainLayout;
