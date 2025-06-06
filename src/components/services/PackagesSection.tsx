
import { PackageCard } from "./PackageCard";
import { useLanguage } from "@/hooks/useLanguage";
import { getServicePackages } from "@/utils/servicePackages";

interface PackagesSectionProps {
  activeTab: string;
}

export const PackagesSection = ({ activeTab }: PackagesSectionProps) => {
  const { language } = useLanguage();
  const servicePackages = getServicePackages(language);
  
  return (
    <div className="mt-16">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4" id="packages">
          {language === 'en' ? `${activeTab === "all" ? "Featured" : ""} Service Packages` : `${activeTab === "all" ? "বৈশিষ্ট্যযুক্ত" : ""} সেবা প্যাকেজ`}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          {language === 'en' 
            ? "Choose the perfect package that suits your business needs and budget."
            : "আপনার ব্যবসার প্রয়োজন এবং বাজেটের সাথে মানানসই নিখুঁত প্যাকেজ বেছে নিন।"
          }
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {servicePackages[activeTab as keyof typeof servicePackages].map((pkg, index) => (
          <PackageCard 
            key={index}
            title={pkg.title}
            price={pkg.price}
            features={pkg.features}
            isPopular={pkg.isPopular}
            ctaText={pkg.ctaText}
          />
        ))}
      </div>
    </div>
  );
};
