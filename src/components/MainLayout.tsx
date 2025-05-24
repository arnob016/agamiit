
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 overflow-x-hidden">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm border-b sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
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
            
            <Button 
              onClick={handleContactClick} 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hidden md:flex"
            >
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
              <div className="flex space-x-4 mt-6">
                <a href="#" className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/40 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="w-4 h-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0014.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/40 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"></path>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/40 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.1 10.1 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"></path>
                  </svg>
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-600/20 flex items-center justify-center hover:bg-blue-600/40 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="w-4 h-4 text-blue-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
              </div>
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
                  <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                  <a href="mailto:info@agamiit.com" className="hover:text-white transition-colors">info@agamiit.com</a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span>+880 1XXX-XXXXXX</span>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-4 w-4 mr-2 flex-shrink-0 mt-1" />
                  <span>{language === 'en' ? "Agami IT Solutions, Level 5, House 27, Road 4, Sector 7, Uttara, Dhaka-1230" : "আগামী আইটি সলিউশনস, লেভেল ৫, বাড়ি ২৭, রোড ৪, সেক্টর ৭, উত্তরা, ঢাকা-১২৩০"}</span>
                </div>
              </div>
            </div>
          </div>
          
          <Separator className="my-8 bg-gray-700" />
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-center md:text-left">
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
