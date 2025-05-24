
import { useState } from "react";
import { X, Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Link } from "react-router-dom";
import { useLanguage } from "@/hooks/useLanguage";

const MobileMenu = () => {
  const { t, language } = useLanguage();
  const [openSection, setOpenSection] = useState<string | null>(null);
  
  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };
  
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[350px]">
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Code className="h-5 w-5 text-white" />
              </div>
              <span className="font-bold text-lg">{t.companyName}</span>
            </div>
            <SheetClose asChild>
              <Button variant="ghost" size="icon">
                <X className="h-5 w-5" />
              </Button>
            </SheetClose>
          </div>
          
          <div className="flex-1 mt-4 overflow-auto">
            <nav className="space-y-1">
              <SheetClose asChild>
                <Link to="/" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-100">
                  {language === 'en' ? "Home" : "হোম"}
                </Link>
              </SheetClose>
              
              <SheetClose asChild>
                <Link to="/about" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-100">
                  {t.about}
                </Link>
              </SheetClose>
              
              <SheetClose asChild>
                <Link to="/services" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-100">
                  {t.services}
                </Link>
              </SheetClose>
              
              {/* Packages */}
              <Collapsible
                open={openSection === 'packages'}
                onOpenChange={() => toggleSection('packages')}
                className="w-full"
              >
                <CollapsibleTrigger className="flex items-center justify-between w-full py-3 px-4 rounded-lg hover:bg-gray-100">
                  <span>{t.packages}</span>
                  {openSection === 'packages' ? 
                    <ChevronDown className="h-4 w-4" /> : 
                    <ChevronRight className="h-4 w-4" />
                  }
                </CollapsibleTrigger>
                <CollapsibleContent className="pl-4 space-y-1 mt-1">
                  <SheetClose asChild>
                    <Link to="/#packages" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 text-sm">
                      {t.beginnerPackage}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/#packages" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 text-sm">
                      {t.corporatePackage}
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link to="/#packages" className="flex items-center py-2 px-4 rounded-lg hover:bg-gray-100 text-sm">
                      {t.corporatePlusPackage}
                    </Link>
                  </SheetClose>
                </CollapsibleContent>
              </Collapsible>
              
              <SheetClose asChild>
                <Link to="/contact" className="flex items-center py-3 px-4 rounded-lg hover:bg-gray-100">
                  {t.contact}
                </Link>
              </SheetClose>
            </nav>
          </div>
          
          <div className="mt-auto pt-4 border-t border-gray-200">
            <Button 
              onClick={() => document.getElementById('language-toggle')?.click()}
              variant="outline"
              className="w-full justify-start"
            >
              <Languages className="h-4 w-4 mr-2" />
              <span>
                {language === 'en' ? t.bengali : t.english}
              </span>
            </Button>
            <SheetClose asChild>
              <Button 
                className="w-full mt-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
              >
                {t.getStarted}
              </Button>
            </SheetClose>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

// Add missing Code and Languages component imports
import { Code, Languages } from 'lucide-react';

export default MobileMenu;
