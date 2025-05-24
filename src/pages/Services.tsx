import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useLanguage } from "@/hooks/useLanguage";
import MainLayout from "@/components/MainLayout";
import { CheckCircle, Code, PenTool, Smartphone, Globe, Database, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { scrollToSection } from "@/utils/scrollToSection";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300">
    <CardContent className="p-6 flex flex-col h-full">
      <div className="bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </CardContent>
  </Card>
);

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

const PackageCard = ({ title, price, features, isPopular = false, ctaText }: PackageCardProps) => (
  <Card className={`h-full transition-all duration-300 ${isPopular ? 'border-blue-500 shadow-md relative' : ''}`}>
    {isPopular && (
      <div className="absolute top-0 right-0 bg-blue-500 text-white px-4 py-1 text-sm font-medium rounded-bl-lg rounded-tr-lg">
        Popular
      </div>
    )}
    
    <CardContent className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="mb-4">
        <span className="text-3xl font-bold">{price}</span>
      </div>
      
      <Separator className="my-4" />
      
      <ul className="space-y-3 mb-6 flex-grow">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>
      
      <div className="mt-auto">
        <Link to="/contact">
          <Button 
            className={`w-full ${isPopular ? 'bg-blue-500 hover:bg-blue-600' : ''}`}
          >
            {ctaText}
          </Button>
        </Link>
      </div>
    </CardContent>
  </Card>
);

const Services = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<string>("all");
  
  const services = [
    {
      icon: <Globe className="h-6 w-6 text-blue-600" />,
      title: t.webDevelopment,
      description: language === 'en' 
        ? "Create beautiful, responsive websites tailored to your brand with cutting-edge technology and SEO optimization."
        : "আপনার ব্র্যান্ডের জন্য অত্যাধুনিক প্রযুক্তি এবং এসইও অপটিমাইজেশন সহ সুন্দর, প্রতিক্রিয়াশীল ওয়েবসাইট তৈরি করুন।",
      category: "web"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-blue-600" />,
      title: t.mobileApps,
      description: language === 'en'
        ? "Native and cross-platform mobile applications that provide seamless user experiences across all devices."
        : "নেটিভ এবং ক্রস-প্ল্যাটফর্ম মোবাইল অ্যাপ্লিকেশন যা সমস্ত ডিভাইসে নিরবিচ্ছিন্ন ব্যবহারকারী অভিজ্ঞতা প্রদান করে।",
      category: "mobile"
    },
    {
      icon: <Code className="h-6 w-6 text-blue-600" />,
      title: t.softwareSolutions,
      description: language === 'en'
        ? "Custom enterprise software solutions designed to streamline your business processes and increase productivity."
        : "কাস্টম এন্টারপ্রাইজ সফটওয়্যার সমাধান যা আপনার ব্যবসার প্রক্রিয়াগুলিকে সহজ করতে এবং উৎপাদনশীলতা বাড়াতে ডিজাইন করা হয়েছে।",
      category: "software"
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: t.cloudServices,
      description: language === 'en'
        ? "Secure and scalable cloud infrastructure solutions with expert deployment and ongoing maintenance services."
        : "বিশেষজ্ঞ পরিচালনা এবং চলমান রক্ষণাবেক্ষণ পরিষেবা সহ নিরাপদ এবং স্কেলযোগ্য ক্লাউড অবকাঠামো সমাধান।",
      category: "cloud"
    },
    {
      icon: <BarChart className="h-6 w-6 text-blue-600" />,
      title: t.digitalMarketing,
      description: language === 'en'
        ? "Comprehensive digital marketing strategies to increase your online presence and drive customer engagement."
        : "আপনার অনলাইন উপস্থিতি বাড়াতে এবং গ্রাহক সম্পৃক্ততা চালানোর জন্য ব্যাপক ডিজিটাল মার্কেটিং কৌশল।",
      category: "marketing"
    },
    {
      icon: <PenTool className="h-6 w-6 text-blue-600" />,
      title: t.uiUxDesign,
      description: language === 'en'
        ? "Captivating user interface and experience design that engages your audience and drives conversion."
        : "মনোমুগ্ধকর ইউজার ইন্টারফেস এবং অভিজ্ঞতা ডিজাইন যা আপনার দর্শকদের আকর্ষণ করে এবং রূপান্তর চালায়।",
      category: "design"
    }
  ];
  
  const servicePackages = {
    "web": [
      {
        title: language === 'en' ? "Basic Website" : "বেসিক ওয়েবসাইট",
        price: language === 'en' ? "$499" : "৳40,000",
        features: language === 'en' 
          ? [
              "5 pages responsive website",
              "Mobile-friendly design",
              "Basic SEO optimization",
              "Contact form",
              "Social media integration",
              "3 rounds of revisions"
            ]
          : [
              "৫ পৃষ্ঠার রেসপন্সিভ ওয়েবসাইট",
              "মোবাইল-বান্ধব ডিজাইন",
              "বেসিক এসইও অপ্টিমাইজেশন",
              "যোগাযোগ ফর্ম",
              "সোশ্যাল মিডিয়া ইন্টিগ্রেশন",
              "৩ রাউন্ড সংশোধন"
            ],
        ctaText: language === 'en' ? "Get Started" : "শুরু করুন"
      },
      {
        title: language === 'en' ? "Business Website" : "বিজনেস ওয়েবসাইট",
        price: language === 'en' ? "$999" : "৳80,000",
        features: language === 'en'
          ? [
              "Up to 10 pages custom design",
              "Responsive & interactive elements",
              "Advanced SEO setup",
              "Content Management System",
              "Google Analytics integration",
              "Blog section setup",
              "60 days support"
            ]
          : [
              "১০ পৃষ্ঠা পর্যন্ত কাস্টম ডিজাইন",
              "রেসপন্সিভ ও ইন্টারেক্টিভ উপাদান",
              "অ্যাডভান্সড এসইও সেটআপ",
              "কনটেন্ট ম্যানেজমেন্ট সিস্টেম",
              "গুগল অ্যানালিটিক্স ইন্টিগ্রেশন",
              "ব্লগ সেকশন সেটআপ",
              "৬০ দিন সাপোর্ট"
            ],
        isPopular: true,
        ctaText: language === 'en' ? "Most Popular" : "সবচেয়ে জনপ্রিয়"
      },
      {
        title: language === 'en' ? "E-Commerce Solution" : "ই-কমার্স সলিউশন",
        price: language === 'en' ? "$2,499" : "৳200,000",
        features: language === 'en'
          ? [
              "Full e-commerce functionality",
              "Product catalog & management",
              "Secure payment gateway integration",
              "Inventory management system",
              "Customer account portal",
              "Order tracking & management",
              "Premium hosting & security",
              "90 days support"
            ]
          : [
              "সম্পূর্ণ ই-কমার্স কার্যকারিতা",
              "পণ্য ক্যাটালগ ও ব্যবস্থাপনা",
              "নিরাপদ পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
              "ইনভেনটরি ম্যানেজমেন্ট সিস্টেম",
              "গ্রাহক অ্যাকাউন্ট পোর্টাল",
              "অর্ডার ট্র্যাকিং ও ব্যবস্থাপনা",
              "প্রিমিয়াম হোস্টিং ও সিকিউরিটি",
              "৯০ দিন সাপোর্ট"
            ],
        ctaText: language === 'en' ? "Contact Sales" : "সেলস এর সাথে যোগাযোগ করুন"
      }
    ],
    "mobile": [
      {
        title: language === 'en' ? "Basic Mobile App" : "বেসিক মোবাইল অ্যাপ",
        price: language === 'en' ? "$1,499" : "৳120,000",
        features: language === 'en'
          ? [
              "Single platform (iOS or Android)",
              "Up to 5 core screens",
              "Basic user authentication",
              "Simple data storage",
              "Offline functionality",
              "App store submission"
            ]
          : [
              "একটি প্ল্যাটফর্ম (iOS বা Android)",
              "৫টি পর্যন্ত কোর স্ক্রিন",
              "বেসিক ইউজার অথেনটিকেশন",
              "সিম্পল ডাটা স্টোরেজ",
              "অফলাইন ফাংশনালিটি",
              "অ্যাপ স্টোর সাবমিশন"
            ],
        ctaText: language === 'en' ? "Get Started" : "শুরু করুন"
      },
      {
        title: language === 'en' ? "Professional App" : "প্রফেশনাল অ্যাপ",
        price: language === 'en' ? "$3,499" : "৳280,000",
        features: language === 'en'
          ? [
              "Cross-platform development",
              "Up to 10 custom screens",
              "User authentication & profiles",
              "Cloud data synchronization",
              "Push notifications",
              "In-app purchases",
              "API integrations",
              "90 days support"
            ]
          : [
              "ক্রস-প্ল্যাটফর্ম ডেভেলপমেন্ট",
              "১০টি পর্যন্ত কাস্টম স্ক্রিন",
              "ইউজার অথেনটিকেশন ও প্রোফাইল",
              "ক্লাউড ডাটা সিঙ্ক্রোনাইজেশন",
              "পুশ নোটিফিকেশন",
              "ইন-অ্যাপ পারচেস",
              "এপিআই ইন্টিগ্রেশন",
              "৯০ দিন সাপোর্ট"
            ],
        isPopular: true,
        ctaText: language === 'en' ? "Most Popular" : "সবচেয়ে জনপ্রিয়"
      },
      {
        title: language === 'en' ? "Enterprise Solution" : "এন্টারপ্রাইজ সলিউশন",
        price: language === 'en' ? "Custom" : "কাস্টম",
        features: language === 'en'
          ? [
              "Cross-platform with native features",
              "Unlimited custom screens",
              "Advanced security protocols",
              "Real-time synchronization",
              "Complex backend integration",
              "Analytics & reporting dashboard",
              "Dedicated project manager",
              "6 months maintenance & support"
            ]
          : [
              "নেটিভ ফিচার সহ ক্রস-প্ল্যাটফর্ম",
              "আনলিমিটেড কাস্টম স্ক্রিন",
              "অ্যাডভান্সড সিকিউরিটি প্রোটোকল",
              "রিয়েল-টাইম সিঙ্ক্রোনাইজেশন",
              "কমপ্লেক্স ব্যাকএন্ড ইন্টিগ্রেশন",
              "অ্যানালিটিকস ও রিপোর্টিং ড্যাশবোর্ড",
              "ডেডিকেটেড প্রজেক্ট ম্যানেজার",
              "৬ মাস রক্ষণাবেক্ষণ ও সাপোর্ট"
            ],
        ctaText: language === 'en' ? "Request Quote" : "কোটেশন অনুরোধ করুন"
      }
    ],
    "software": [
      {
        title: language === 'en' ? "Basic Software" : "বেসিক সফটওয়্যার",
        price: language === 'en' ? "$2,999" : "৳240,000",
        features: language === 'en'
          ? [
              "Single department solution",
              "Up to 5 core modules",
              "User permission management",
              "Basic reporting tools",
              "Local deployment",
              "90 days support"
            ]
          : [
              "একটি বিভাগের সমাধান",
              "৫টি পর্যন্ত কোর মডিউল",
              "ব্যবহারকারী অনুমতি ব্যবস্থাপনা",
              "বেসিক রিপোর্টিং টুল",
              "লোকাল ডেপ্লয়মেন্ট",
              "৯০ দিন সাপোর্ট"
            ],
        ctaText: language === 'en' ? "Get Started" : "শুরু করুন"
      },
      {
        title: language === 'en' ? "Business Suite" : "বিজনেস সুইট",
        price: language === 'en' ? "$5,999" : "৳480,000",
        features: language === 'en'
          ? [
              "Cross-department integration",
              "Up to 10 custom modules",
              "Advanced user roles & workflows",
              "Comprehensive reporting system",
              "Cloud or on-premise deployment",
              "Data migration assistance",
              "API integrations",
              "6 months support"
            ]
          : [
              "ক্রস-ডিপার্টমেন্ট ইন্টিগ্রেশন",
              "১০টি পর্যন্ত কাস্টম মডিউল",
              "অ্যাডভান্সড ইউজার রোল ও ওয়ার্কফ্লো",
              "ব্যাপক রিপোর্টিং সিস্টেম",
              "ক্লাউড বা অন-প্রিমাইস ডেপ্লয়মেন্ট",
              "ডাটা মাইগ্রেশন সহায়তা",
              "এপিআই ইন্টিগ্রেশন",
              "৬ মাস সাপোর্ট"
            ],
        isPopular: true,
        ctaText: language === 'en' ? "Most Popular" : "সবচেয়ে জনপ্রিয়"
      },
      {
        title: language === 'en' ? "Enterprise ERP" : "এন্টারপ্রাইজ ইআরপি",
        price: language === 'en' ? "Custom" : "কাস্টম",
        features: language === 'en'
          ? [
              "Full enterprise resource planning",
              "Unlimited custom modules",
              "Advanced security & compliance",
              "Business intelligence dashboard",
              "Third-party system integrations",
              "Custom API development",
              "Dedicated support team",
              "12 months maintenance & updates"
            ]
          : [
              "পূর্ণ এন্টারপ্রাইজ রিসোর্স প্ল্যানিং",
              "আনলিমিটেড কাস্টম মডিউল",
              "অ্যাডভান্সড সিকিউরিটি ও কমপ্লায়েন্স",
              "বিজনেস ইন্টেলিজেন্স ড্যাশবোর্ড",
              "থার্ড-পার্টি সিস্টেম ইন্টিগ্রেশন",
              "কাস্টম এপিআই ডেভেলপমেন্ট",
              "ডেডিকেটেড সাপোর্ট টিম",
              "১২ মাস রক্ষণাবেক্ষণ ও আপডেট"
            ],
        ctaText: language === 'en' ? "Request Quote" : "কোটেশন অনুরোধ করুন"
      }
    ],
    "cloud": [
      {
        title: language === 'en' ? "Startup Cloud" : "স্টার্টআপ ক্লাউড",
        price: language === 'en' ? "$199/mo" : "৳16,000/মাস",
        features: language === 'en'
          ? [
              "Basic cloud infrastructure setup",
              "Up to 3 virtual servers",
              "Standard security configuration",
              "Daily backups",
              "Email & ticketing support",
              "99.9% uptime guarantee"
            ]
          : [
              "বেসিক ক্লাউড ইনফ্রাস্ট্রাকচার সেটআপ",
              "৩টি পর্যন্ত ভার্চুয়াল সার্ভার",
              "স্ট্যান্ডার্ড সিকিউরিটি কনফিগারেশন",
              "দৈনিক ব্যাকআপ",
              "ইমেইল ও টিকেটিং সাপোর্ট",
              "৯৯.৯% আপটাইম গ্যারান্টি"
            ],
        ctaText: language === 'en' ? "Get Started" : "শুরু করুন"
      },
      {
        title: language === 'en' ? "Business Cloud" : "বিজনেস ক্লাউড",
        price: language === 'en' ? "$499/mo" : "৳40,000/মাস",
        features: language === 'en'
          ? [
              "Advanced cloud architecture",
              "Up to 8 virtual servers",
              "Load balancing & auto-scaling",
              "Enhanced security protocols",
              "Hourly backups",
              "24/7 email & phone support",
              "99.95% uptime SLA"
            ]
          : [
              "অ্যাডভান্সড ক্লাউড আর্কিটেকচার",
              "৮টি পর্যন্ত ভার্চুয়াল সার্ভার",
              "লোড ব্যালেন্সিং ও অটো-স্কেলিং",
              "এনহ্যান্সড সিকিউরিটি প্রোটোকল",
              "ঘন্টায় ব্যাকআপ",
              "২৪/৭ ইমেইল ও ফোন সাপোর্ট",
              "৯৯.৯৫% আপটাইম এসএলএ"
            ],
        isPopular: true,
        ctaText: language === 'en' ? "Most Popular" : "সবচেয়ে জনপ্রিয়"
      },
      {
        title: language === 'en' ? "Enterprise Cloud" : "এন্টারপ্রাইজ ক্লাউড",
        price: language === 'en' ? "Custom" : "কাস্টম",
        features: language === 'en'
          ? [
              "Custom cloud architecture",
              "Unlimited resources",
              "Multi-region deployment",
              "Military-grade security",
              "Real-time data replication",
              "Disaster recovery planning",
              "Dedicated cloud engineer",
              "99.99% uptime SLA"
            ]
          : [
              "কাস্টম ক্লাউড আর্কিটেকচার",
              "আনলিমিটেড রিসোর্স",
              "মাল্টি-রিজিয়ন ডেপ্লয়মেন্ট",
              "মিলিটারি-গ্রেড সিকিউরিটি",
              "রিয়েল-টাইম ডাটা রেপ্লিকেশন",
              "ডিজাস্টার রিকভারি প্ল্যানিং",
              "ডেডিকেটেড ক্লাউড ইঞ্জিনিয়ার",
              "৯৯.৯৯% আপটাইম এসএলএ"
            ],
        ctaText: language === 'en' ? "Request Quote" : "কোটেশন অনুরোধ করুন"
      }
    ],
    "marketing": [
      {
        title: language === 'en' ? "Basic Marketing" : "বেসিক মার্কেটিং",
        price: language === 'en' ? "$399/mo" : "৳32,000/মাস",
        features: language === 'en'
          ? [
              "Social media management",
              "Basic SEO optimization",
              "Monthly content calendar",
              "Weekly performance reports"
            ]
          : [
              "সোশ্যাল মিডিয়া ম্যানেজমেন্ট",
              "বেসিক এসইও অপ্টিমাইজেশন",
              "মাসিক কনটেন্ট ক্যালেন্ডার",
              "সাপ্তাহিক পারফরম্যান্স রিপোর্ট"
            ],
        ctaText: language === 'en' ? "Get Started" : "শুরু করুন"
      },
      {
        title: language === 'en' ? "Growth Marketing" : "গ্রোথ মার্কেটিং",
        price: language === 'en' ? "$799/mo" : "৳64,000/মাস",
        features: language === 'en'
          ? [
              "Comprehensive marketing strategy",
              "Content creation & publishing",
              "Search engine optimization",
              "Email marketing campaigns",
              "PPC advertising management"
            ]
          : [
              "ব্যাপক মার্কেটিং কৌশল",
              "কনটেন্ট তৈরি ও প্রকাশ",
              "সার্চ ইঞ্জিন অপ্টিমাইজেশন",
              "ইমেইল মার্কেটিং ক্যাম্পেইন",
              "পিপিসি বিজ্ঞাপন ব্যবস্থাপনা"
            ],
        isPopular: true,
        ctaText: language === 'en' ? "Most Popular" : "সবচেয়ে জনপ্রিয়"
      },
      {
        title: language === 'en' ? "Full Digital Suite" : "ফুল ডিজিটাল সুইট",
        price: language === 'en' ? "Custom" : "কাস্টম",
        features: language === 'en'
          ? [
              "Multi-channel marketing strategy",
              "Premium content production",
              "Conversion optimization",
              "Advanced analytics & reporting",
              "Dedicated marketing team"
            ]
          : [
              "মাল্টি-চ্যানেল মার্কেটিং কৌশল",
              "প্রিমিয়াম কনটেন্ট প্রোডাকশন",
              "কনভার্সন অপ্টিমাইজেশন",
              "অ্যাডভান্সড অ্যানালিটিক্স ও রিপোর্টিং",
              "ডেডিকেটেড মার্কেটিং টিম"
            ],
        ctaText: language === 'en' ? "Request Quote" : "কোটেশন অনুরোধ করুন"
      }
    ],
    "design": [
      {
        title: language === 'en' ? "UI/UX Essentials" : "UI/UX এসেনশিয়ালস",
        price: language === 'en' ? "$999" : "৳80,000",
        features: language === 'en'
          ? [
              "User research & personas",
              "Wireframing & prototyping",
              "Interface design for up to 5 screens",
              "Usability testing"
            ]
          : [
              "ব্যবহারকারী গবেষণা ও পারসোনা",
              "ওয়্যারফ্রেমিং ও প্রোটোটাইপিং",
              "৫টি পর্যন্ত স্ক্রিনের জন্য ইন্টারফেস ডিজাইন",
              "ব্যবহারযোগ্যতা পরীক্ষা"
            ],
        ctaText: language === 'en' ? "Get Started" : "শুরু করুন"
      },
      {
        title: language === 'en' ? "Premium Design" : "প্রিমিয়াম ডিজাইন",
        price: language === 'en' ? "$2,499" : "৳200,000",
        features: language === 'en'
          ? [
              "Comprehensive UX research",
              "Complete user journey mapping",
              "High-fidelity design system",
              "Interactive prototyping",
              "Usability testing & optimization"
            ]
          : [
              "ব্যাপক UX গবেষণা",
              "সম্পূর্ণ ব্যবহারকারী যাত্রা মানচিত্রায়ন",
              "উচ্চ বিশ্বস্ততার ডিজাইন সিস্টেম",
              "ইন্টারঅ্যাক্টিভ প্রোটোটাইপিং",
              "ব্যবহারযোগ্যতা পরীক্ষা ও অপ্টিমাইজেশন"
            ],
        isPopular: true,
        ctaText: language === 'en' ? "Most Popular" : "সবচেয়ে জনপ্রিয়"
      },
      {
        title: language === 'en' ? "Enterprise UX" : "এন্টারপ্রাইজ UX",
        price: language === 'en' ? "Custom" : "কাস্টম",
        features: language === 'en'
          ? [
              "Full product UX strategy",
              "Comprehensive UX research",
              "Complete design system",
              "Cross-platform design guidelines",
              "Ongoing UX improvement"
            ]
          : [
              "সম্পূর্ণ পণ্য UX কৌশল",
              "ব্যাপক UX গবেষণা",
              "সম্পূর্ণ ডিজাইন সিস্টেম",
              "ক্রস-প্ল্যাটফর্ম ডিজাইন নির্দেশিকা",
              "চলমান UX উন্নতি"
            ],
        ctaText: language === 'en' ? "Request Quote" : "কোটেশন অনুরোধ করুন"
      }
    ],
    "all": []
  };
  
  // Dynamically set "all" packages based on the first package of each category
  servicePackages.all = [
    servicePackages.web[1], 
    servicePackages.mobile[1],
    servicePackages.software[1]
  ];
  
  const filteredServices = activeTab === "all" 
    ? services 
    : services.filter(service => service.category === activeTab);

  // Function to handle scrolling to the packages section - fixed to avoid type issues
  const handlePackagesScroll = () => {
    // Explicitly use a string ID to match the scrollToSection parameter type
    const sectionId = "packages";
    scrollToSection(sectionId);
  };
    
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
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          <Button 
            variant={activeTab === "all" ? "default" : "outline"}
            onClick={() => setActiveTab("all")}
            className="mb-2"
          >
            {language === 'en' ? "All Services" : "সকল সেবা"}
          </Button>
          <Button 
            variant={activeTab === "web" ? "default" : "outline"}
            onClick={() => setActiveTab("web")}
            className="mb-2"
          >
            {t.webDevelopment}
          </Button>
          <Button 
            variant={activeTab === "mobile" ? "default" : "outline"}
            onClick={() => setActiveTab("mobile")}
            className="mb-2"
          >
            {t.mobileApps}
          </Button>
          <Button 
            variant={activeTab === "software" ? "default" : "outline"}
            onClick={() => setActiveTab("software")}
            className="mb-2"
          >
            {t.softwareSolutions}
          </Button>
          <Button 
            variant={activeTab === "cloud" ? "default" : "outline"}
            onClick={() => setActiveTab("cloud")}
            className="mb-2"
          >
            {t.cloudServices}
          </Button>
          <Button 
            variant={activeTab === "marketing" ? "default" : "outline"}
            onClick={() => setActiveTab("marketing")}
            className="mb-2"
          >
            {t.digitalMarketing}
          </Button>
          <Button 
            variant={activeTab === "design" ? "default" : "outline"}
            onClick={() => setActiveTab("design")}
            className="mb-2"
          >
            {t.uiUxDesign}
          </Button>
        </div>
        
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
