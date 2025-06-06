
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

interface ServiceTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const ServiceTabs = ({ activeTab, onTabChange }: ServiceTabsProps) => {
  const { t, language } = useLanguage();
  
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-10">
      <Button 
        variant={activeTab === "all" ? "default" : "outline"}
        onClick={() => onTabChange("all")}
        className="mb-2"
      >
        {language === 'en' ? "All Services" : "সকল সেবা"}
      </Button>
      <Button 
        variant={activeTab === "web" ? "default" : "outline"}
        onClick={() => onTabChange("web")}
        className="mb-2"
      >
        {t.webDevelopment}
      </Button>
      <Button 
        variant={activeTab === "mobile" ? "default" : "outline"}
        onClick={() => onTabChange("mobile")}
        className="mb-2"
      >
        {t.mobileApps}
      </Button>
      <Button 
        variant={activeTab === "software" ? "default" : "outline"}
        onClick={() => onTabChange("software")}
        className="mb-2"
      >
        {t.softwareSolutions}
      </Button>
      <Button 
        variant={activeTab === "cloud" ? "default" : "outline"}
        onClick={() => onTabChange("cloud")}
        className="mb-2"
      >
        {t.cloudServices}
      </Button>
      <Button 
        variant={activeTab === "marketing" ? "default" : "outline"}
        onClick={() => onTabChange("marketing")}
        className="mb-2"
      >
        {t.digitalMarketing}
      </Button>
      <Button 
        variant={activeTab === "design" ? "default" : "outline"}
        onClick={() => onTabChange("design")}
        className="mb-2"
      >
        {t.uiUxDesign}
      </Button>
    </div>
  );
};
