
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import MainLayout from "@/components/MainLayout";
import { Link } from "react-router-dom";
import { ServiceCard } from "@/components/services/ServiceCard";
import { ServiceTabs } from "@/components/services/ServiceTabs";
import { PackagesSection } from "@/components/services/PackagesSection";
import { getServicesData } from "@/utils/servicesData";

const Services = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const services = getServicesData(language, t);
  
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);
    
  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-12 md:py-16">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {t.ourServices}
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {language === 'en' 
              ? "Discover our comprehensive range of technology services designed to transform your ideas into digital reality."
              : "আপনার ধারণাগুলিকে ডিজিটাল বাস্তবতায় রূপান্তরিত করতে ডিজাইন করা আমাদের ব্যাপক প্রযুক্তি পরিষেবাগুলি আবিষ্কার করুন।"
            }
          </p>
        </div>
        
        {/* Services Tab Navigation */}
        <ServiceTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredServices.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
        
        {/* Packages Section */}
        <PackagesSection activeTab={activeTab} />
        
        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {language === 'en' ? "Need a Custom Solution?" : "একটি কাস্টম সমাধান প্রয়োজন?"}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              {language === 'en' 
                ? "Contact our team for a personalized consultation tailored to your specific requirements."
                : "আপনার নির্দিষ্ট প্রয়োজনীয়তার জন্য একটি ব্যক্তিগতকৃত পরামর্শের জন্য আমাদের টিমের সাথে যোগাযোগ করুন।"
              }
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                {language === 'en' ? "Get in Touch" : "যোগাযোগ করুন"}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Services;
