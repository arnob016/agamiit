
import { Code, PenTool, Smartphone, Globe, Database, BarChart } from "lucide-react";

export const getServicesData = (language: 'en' | 'bn', t: any) => [
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
