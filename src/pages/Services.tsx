
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import MainLayout from "@/components/MainLayout";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { PackagesSection } from "@/components/services/PackagesSection";
import { getServicesData } from "@/utils/servicesData";
import { Code, PenTool, Smartphone, Globe, Database, BarChart, Sparkles, Zap } from "lucide-react";

const Services = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const services = getServicesData(language, t);
  
  const getIcon = (iconName: string) => {
    const iconProps = { className: "h-8 w-8 text-white drop-shadow-sm" };
    switch (iconName) {
      case "Globe":
        return <Globe {...iconProps} />;
      case "Smartphone":
        return <Smartphone {...iconProps} />;
      case "Code":
        return <Code {...iconProps} />;
      case "Database":
        return <Database {...iconProps} />;
      case "BarChart":
        return <BarChart {...iconProps} />;
      case "PenTool":
        return <PenTool {...iconProps} />;
      default:
        return <Globe {...iconProps} />;
    }
  };
  
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);
    
  return (
    <MainLayout>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-400/20 to-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-cyan-400/10 to-blue-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="container mx-auto px-4 py-12 md:py-20 relative z-10">
          {/* Enhanced Hero Section */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <Sparkles className="h-8 w-8 text-blue-600 mr-3 animate-pulse" />
              <div className="h-px w-12 bg-gradient-to-r from-transparent to-blue-600"></div>
              <Zap className="h-6 w-6 text-indigo-600 mx-3" />
              <div className="h-px w-12 bg-gradient-to-l from-transparent to-indigo-600"></div>
              <Sparkles className="h-8 w-8 text-purple-600 ml-3 animate-pulse delay-300" />
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              {t.ourServices}
            </h1>
            
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              {language === 'en' 
                ? "Transform your vision into digital reality with our cutting-edge technology services and innovative solutions."
                : "আমাদের অত্যাধুনিক প্রযুক্তি পরিষেবা এবং উদ্ভাবনী সমাধানের সাথে আপনার দৃষ্টিভঙ্গিকে ডিজিটাল বাস্তবতায় রূপান্তরিত করুন।"
              }
            </p>
            
            <div className="mt-8">
              <div className="inline-flex items-center px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                <span className="text-gray-700 font-medium">
                  {language === 'en' ? "Available for new projects" : "নতুন প্রকল্পের জন্য উপলব্ধ"}
                </span>
              </div>
            </div>
          </div>
          
          {/* Enhanced Services Tab Navigation */}
          <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
          
          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {filteredServices.map((service, index) => (
              <div
                key={index}
                className="group transform transition-all duration-500 hover:scale-105 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ServiceCard 
                  icon={getIcon(service.iconName)}
                  title={service.title}
                  description={service.description}
                />
              </div>
            ))}
          </div>
          
          {/* Enhanced Packages Section */}
          <PackagesSection activeTab={activeTab} />
          
          {/* Enhanced Call to Action */}
          <div className="mt-24">
            <div className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl"></div>
              <div className="absolute inset-0 bg-black/20 rounded-2xl"></div>
              <div className="relative bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-sm rounded-2xl p-8 md:p-16 text-white">
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 border-2 border-white/30 rounded-full flex items-center justify-center">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
                  {language === 'en' ? "Ready to Start Your Project?" : "আপনার প্রকল্প শুরু করতে প্রস্তুত?"}
                </h2>
                
                <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8 text-center leading-relaxed">
                  {language === 'en' 
                    ? "Let's bring your ideas to life with our expert team and cutting-edge technology solutions."
                    : "আমাদের বিশেষজ্ঞ দল এবং অত্যাধুনিক প্রযুক্তি সমাধানের সাথে আপনার ধারণাগুলিকে জীবন্ত করে তুলি।"
                  }
                </p>
                
                <div className="text-center">
                  <Link to="/contact">
                    <Button className="bg-white text-indigo-600 hover:bg-gray-100 font-bold px-8 py-4 text-lg rounded-xl shadow-xl hover:shadow-2xl transform transition-all duration-300 hover:scale-105">
                      {language === 'en' ? "Start Your Journey" : "আপনার যাত্রা শুরু করুন"}
                      <Sparkles className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;
