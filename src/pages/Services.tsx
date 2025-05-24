
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Globe, Code, Smartphone, Settings, Star, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import MainLayout from '@/components/MainLayout';
import { useLanguage } from '@/hooks/useLanguage';
import { useNavigate } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const ServicesPage = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("web");
  const navigate = useNavigate();
  
  const handleContactClick = () => {
    navigate('/contact');
  };
  
  const servicePackages = {
    web: [
      {
        name: language === 'en' ? "Basic Website" : "বেসিক ওয়েবসাইট",
        price: language === 'en' ? "$599" : "৳45,000",
        features: [
          language === 'en' ? "5 Pages" : "৫ পৃষ্ঠা",
          language === 'en' ? "Responsive Design" : "রেসপন্সিভ ডিজাইন",
          language === 'en' ? "Contact Form" : "যোগাযোগ ফর্ম",
          language === 'en' ? "SEO Basics" : "এসইও বেসিকস",
          language === 'en' ? "Free Domain & Hosting (1 year)" : "ফ্রি ডোমেইন ও হোস্টিং (১ বছর)",
        ]
      },
      {
        name: language === 'en' ? "Business Website" : "বিজনেস ওয়েবসাইট",
        price: language === 'en' ? "$999" : "৳75,000",
        features: [
          language === 'en' ? "10 Pages" : "১০ পৃষ্ঠা",
          language === 'en' ? "Responsive Design" : "রেসপন্সিভ ডিজাইন",
          language === 'en' ? "Contact Form & Map" : "যোগাযোগ ফর্ম ও ম্যাপ",
          language === 'en' ? "SEO Optimization" : "এসইও অপটিমাইজেশন",
          language === 'en' ? "Social Media Integration" : "সোশ্যাল মিডিয়া ইন্টিগ্রেশন",
          language === 'en' ? "Free Domain & Hosting (1 year)" : "ফ্রি ডোমেইন ও হোস্টিং (১ বছর)",
          language === 'en' ? "CMS Integration" : "সিএমএস ইন্টিগ্রেশন",
        ]
      },
      {
        name: language === 'en' ? "E-Commerce Website" : "ই-কমার্স ওয়েবসাইট",
        price: language === 'en' ? "$1,499" : "৳120,000",
        features: [
          language === 'en' ? "20 Pages" : "২০ পৃষ্ঠা",
          language === 'en' ? "Responsive Design" : "রেসপন্সিভ ডিজাইন",
          language === 'en' ? "Product Management" : "প্রোডাক্ট ম্যানেজমেন্ট",
          language === 'en' ? "Payment Gateway Integration" : "পেমেন্ট গেটওয়ে ইন্টিগ্রেশন",
          language === 'en' ? "Shopping Cart" : "শপিং কার্ট",
          language === 'en' ? "Order Tracking" : "অর্ডার ট্র্যাকিং",
          language === 'en' ? "SEO Optimization" : "এসইও অপটিমাইজেশন",
          language === 'en' ? "Free Domain & Hosting (1 year)" : "ফ্রি ডোমেইন ও হোস্টিং (১ বছর)",
        ]
      }
    ],
    mobile: [
      {
        name: language === 'en' ? "Basic App" : "বেসিক অ্যাপ",
        price: language === 'en' ? "$999" : "৳75,000",
        features: [
          language === 'en' ? "Essential Features" : "অত্যাবশ্যক ফিচার",
          language === 'en' ? "Basic UI/UX" : "বেসিক ইউআই/ইউএক্স",
          language === 'en' ? "Single Platform (Android)" : "সিঙ্গেল প্ল্যাটফর্ম (অ্যান্ড্রয়েড)",
          language === 'en' ? "Basic Analytics" : "বেসিক অ্যানালিটিক্স",
          language === 'en' ? "3 Revisions" : "৩ রিভিশন",
        ]
      },
      {
        name: language === 'en' ? "Professional App" : "প্রফেশনাল অ্যাপ",
        price: language === 'en' ? "$1,999" : "৳150,000",
        features: [
          language === 'en' ? "Advanced Features" : "অ্যাডভান্সড ফিচার",
          language === 'en' ? "Premium UI/UX" : "প্রিমিয়াম ইউআই/ইউএক্স",
          language === 'en' ? "Dual Platform (Android & iOS)" : "ডুয়াল প্ল্যাটফর্ম (অ্যান্ড্রয়েড ও আইওএস)",
          language === 'en' ? "Push Notifications" : "পুশ নোটিফিকেশন",
          language === 'en' ? "Advanced Analytics" : "অ্যাডভান্সড অ্যানালিটিক্স",
          language === 'en' ? "5 Revisions" : "৫ রিভিশন",
        ]
      },
      {
        name: language === 'en' ? "Enterprise App" : "এন্টারপ্রাইজ অ্যাপ",
        price: language === 'en' ? "$3,999" : "৳300,000",
        features: [
          language === 'en' ? "Custom Features" : "কাস্টম ফিচার",
          language === 'en' ? "Premium UI/UX" : "প্রিমিয়াম ইউআই/ইউএক্স",
          language === 'en' ? "Cross-Platform" : "ক্রস-প্ল্যাটফর্ম",
          language === 'en' ? "API Integration" : "এপিআই ইন্টিগ্রেশন",
          language === 'en' ? "Backend Development" : "ব্যাকএন্ড ডেভেলপমেন্ট",
          language === 'en' ? "Real-time Database" : "রিয়েল-টাইম ডাটাবেস",
          language === 'en' ? "Unlimited Revisions" : "আনলিমিটেড রিভিশন",
        ]
      }
    ],
    software: [
      {
        name: language === 'en' ? "Basic Software" : "বেসিক সফটওয়্যার",
        price: language === 'en' ? "$1,499" : "৳120,000",
        features: [
          language === 'en' ? "Core Functionality" : "মূল ফাংশনালিটি",
          language === 'en' ? "User Management" : "ইউজার ম্যানেজমেন্ট",
          language === 'en' ? "Basic Reporting" : "বেসিক রিপোর্টিং",
          language === 'en' ? "Desktop Application" : "ডেস্কটপ অ্যাপ্লিকেশন",
          language === 'en' ? "One-time Training" : "ওয়ান-টাইম ট্রেনিং",
        ]
      },
      {
        name: language === 'en' ? "Standard Software" : "স্ট্যান্ডার্ড সফটওয়্যার",
        price: language === 'en' ? "$2,999" : "৳225,000",
        features: [
          language === 'en' ? "Advanced Functionality" : "অ্যাডভান্সড ফাংশনালিটি",
          language === 'en' ? "User & Role Management" : "ইউজার ও রোল ম্যানেজমেন্ট",
          language === 'en' ? "Advanced Reporting" : "অ্যাডভান্সড রিপোর্টিং",
          language === 'en' ? "Cloud Deployment" : "ক্লাউড ডেপ্লয়মেন্ট",
          language === 'en' ? "3 Months Support" : "৩ মাসের সাপোর্ট",
          language === 'en' ? "Training Sessions" : "ট্রেনিং সেশন",
        ]
      },
      {
        name: language === 'en' ? "Enterprise Solution" : "এন্টারপ্রাইজ সলিউশন",
        price: language === 'en' ? "$5,999+" : "৳450,000+",
        features: [
          language === 'en' ? "Custom Development" : "কাস্টম ডেভেলপমেন্ট",
          language === 'en' ? "Integration with Existing Systems" : "এক্সিস্টিং সিস্টেমের সাথে ইন্টিগ্রেশন",
          language === 'en' ? "Advanced Security" : "অ্যাডভান্সড সিকিউরিটি",
          language === 'en' ? "Scalable Architecture" : "স্কেলেবল আর্কিটেকচার",
          language === 'en' ? "Business Intelligence" : "বিজনেস ইন্টেলিজেন্স",
          language === 'en' ? "6 Months Support" : "৬ মাসের সাপোর্ট",
          language === 'en' ? "Dedicated Account Manager" : "ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার",
        ]
      }
    ],
    marketing: [
      {
        name: language === 'en' ? "Starter Package" : "স্টার্টার প্যাকেজ",
        price: language === 'en' ? "$499/month" : "৳40,000/মাস",
        features: [
          language === 'en' ? "Social Media Management" : "সোশ্যাল মিডিয়া ম্যানেজমেন্ট",
          language === 'en' ? "Basic SEO" : "বেসিক এসইও",
          language === 'en' ? "Content Creation (5 posts)" : "কন্টেন্ট ক্রিয়েশন (৫টি পোস্ট)",
          language === 'en' ? "Monthly Report" : "মাসিক রিপোর্ট",
          language === 'en' ? "Email Marketing" : "ইমেইল মার্কেটিং",
        ]
      },
      {
        name: language === 'en' ? "Growth Package" : "গ্রোথ প্যাকেজ",
        price: language === 'en' ? "$999/month" : "৳75,000/মাস",
        features: [
          language === 'en' ? "Social Media Management" : "সোশ্যাল মিডিয়া ম্যানেজমেন্ট",
          language === 'en' ? "Advanced SEO" : "অ্যাডভান্সড এসইও",
          language === 'en' ? "Content Creation (10 posts)" : "কন্টেন্ট ক্রিয়েশন (১০টি পোস্ট)",
          language === 'en' ? "PPC Campaigns" : "পিপিসি ক্যাম্পেইন",
          language === 'en' ? "Bi-Weekly Reports" : "দ্বি-সাপ্তাহিক রিপোর্ট",
          language === 'en' ? "Lead Generation" : "লিড জেনারেশন",
        ]
      },
      {
        name: language === 'en' ? "Premium Package" : "প্রিমিয়াম প্যাকেজ",
        price: language === 'en' ? "$1,999/month" : "৳150,000/মাস",
        features: [
          language === 'en' ? "Complete Digital Marketing" : "কমপ্লিট ডিজিটাল মার্কেটিং",
          language === 'en' ? "Advanced SEO & SEM" : "অ্যাডভান্সড এসইও ও এসইএম",
          language === 'en' ? "Content Creation (20 posts)" : "কন্টেন্ট ক্রিয়েশন (২০টি পোস্ট)",
          language === 'en' ? "Advanced Analytics" : "অ্যাডভান্সড অ্যানালিটিক্স",
          language === 'en' ? "Weekly Reports" : "সাপ্তাহিক রিপোর্ট",
          language === 'en' ? "Conversion Optimization" : "কনভার্সন অপটিমাইজেশন",
          language === 'en' ? "Dedicated Marketing Manager" : "ডেডিকেটেড মার্কেটিং ম্যানেজার",
        ]
      }
    ]
  };
  
  const services = {
    web: {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: language === 'en' ? "Web Development" : "ওয়েব ডেভেলপমেন্ট",
      description: language === 'en' 
        ? "We create modern, responsive websites that help businesses establish a strong online presence." 
        : "আমরা আধুনিক, প্রতিক্রিয়াশীল ওয়েবসাইট তৈরি করি যা ব্যবসাগুলিকে একটি শক্তিশালী অনলাইন উপস্থিতি স্থাপন করতে সাহায্য করে।",
      features: [
        language === 'en' ? "Corporate Websites" : "কর্পোরেট ওয়েবসাইট",
        language === 'en' ? "eCommerce Platforms" : "ই-কমার্স প্ল্যাটফর্ম",
        language === 'en' ? "CMS Websites" : "সিএমএস ওয়েবসাইট",
        language === 'en' ? "Custom Marketplaces" : "কাস্টম মার্কেটপ্লেস",
        language === 'en' ? "Educational Portals" : "শিক্ষামূলক পোর্টাল",
        language === 'en' ? "WordPress & Joomla" : "ওয়ার্ডপ্রেস এবং জুমলা",
      ],
      image: "bg-gradient-to-r from-blue-400 to-blue-600"
    },
    mobile: {
      icon: <Smartphone className="h-8 w-8 text-green-600" />,
      title: language === 'en' ? "Mobile Applications" : "মোবাইল অ্যাপ্লিকেশন",
      description: language === 'en' 
        ? "We develop innovative mobile applications for Android and iOS platforms with modern UI/UX design." 
        : "আমরা আধুনিক UI/UX ডিজাইনের সাথে অ্যান্ড্রয়েড এবং iOS প্ল্যাটফর্মের জন্য উদ্ভাবনী মোবাইল অ্যাপ্লিকেশন তৈরি করি।",
      features: [
        language === 'en' ? "Native Android Apps" : "নেটিভ অ্যান্ড্রয়েড অ্যাপস",
        language === 'en' ? "Native iOS Apps" : "নেটিভ iOS অ্যাপস",
        language === 'en' ? "Cross-Platform Apps" : "ক্রস-প্ল্যাটফর্ম অ্যাপস",
        language === 'en' ? "React Native Development" : "রিয়েক্ট নেটিভ ডেভেলপমেন্ট",
        language === 'en' ? "Flutter Development" : "ফ্লাটার ডেভেলপমেন্ট",
        language === 'en' ? "App Maintenance & Updates" : "অ্যাপ রক্ষণাবেক্ষণ এবং আপডেট",
      ],
      image: "bg-gradient-to-r from-green-400 to-green-600"
    },
    software: {
      icon: <Settings className="h-8 w-8 text-purple-600" />,
      title: language === 'en' ? "Software Solutions" : "সফটওয়্যার সমাধান",
      description: language === 'en' 
        ? "We build custom business software that streamlines operations and increases efficiency." 
        : "আমরা কাস্টম ব্যবসায়িক সফটওয়্যার তৈরি করি যা অপারেশন সহজতর করে এবং দক্ষতা বাড়ায়।",
      features: [
        language === 'en' ? "Accounting & Inventory" : "অ্যাকাউন্টিং এবং ইনভেন্টরি",
        language === 'en' ? "HR & Payroll Systems" : "এইচআর এবং পেরোল সিস্টেম",
        language === 'en' ? "POS Systems" : "পিওএস সিস্টেম",
        language === 'en' ? "ERP Solutions" : "ইআরপি সমাধান",
        language === 'en' ? "CRM Systems" : "সিআরএম সিস্টেম",
        language === 'en' ? "Management Software" : "ব্যবস্থাপনা সফটওয়্যার",
      ],
      image: "bg-gradient-to-r from-purple-400 to-purple-600"
    },
    marketing: {
      icon: <Star className="h-8 w-8 text-orange-600" />,
      title: language === 'en' ? "Digital Marketing" : "ডিজিটাল মার্কেটিং",
      description: language === 'en' 
        ? "We provide comprehensive digital marketing services to boost your online visibility and sales." 
        : "আমরা আপনার অনলাইন দৃশ্যমানতা এবং বিক্রয় বাড়াতে ব্যাপক ডিজিটাল মার্কেটিং পরিষেবা প্রদান করি।",
      features: [
        language === 'en' ? "Search Engine Optimization" : "সার্চ ইঞ্জিন অপটিমাইজেশন",
        language === 'en' ? "Social Media Marketing" : "সোশ্যাল মিডিয়া মার্কেটিং",
        language === 'en' ? "Content Marketing" : "কনটেন্ট মার্কেটিং",
        language === 'en' ? "Email Marketing" : "ইমেইল মার্কেটিং",
        language === 'en' ? "PPC Campaigns" : "পিপিসি ক্যাম্পেইন",
        language === 'en' ? "Analytics & Reporting" : "অ্যানালিটিক্স এবং রিপোর্টিং",
      ],
      image: "bg-gradient-to-r from-orange-400 to-orange-600"
    }
  };
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? "Our Services" : "আমাদের সেবাসমূহ"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? "We offer comprehensive technology solutions to help your business thrive in the digital world."
              : "আমরা ডিজিটাল বিশ্বে আপনার ব্যবসাকে সমৃদ্ধ করতে সাহায্য করার জন্য ব্যাপক প্রযুক্তি সমাধান প্রদান করি।"
            }
          </p>
          <Button 
            onClick={handleContactClick}
            size="lg" 
            className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
          >
            {language === 'en' ? "Get Started" : "শুরু করুন"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
      
      {/* Services Tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="web" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-12">
              <TabsTrigger value="web" className="py-3 data-[state=active]:bg-blue-50">
                <Globe className="h-5 w-5 mr-2" />
                {language === 'en' ? "Web" : "ওয়েব"}
              </TabsTrigger>
              <TabsTrigger value="mobile" className="py-3 data-[state=active]:bg-green-50">
                <Smartphone className="h-5 w-5 mr-2" />
                {language === 'en' ? "Mobile" : "মোবাইল"}
              </TabsTrigger>
              <TabsTrigger value="software" className="py-3 data-[state=active]:bg-purple-50">
                <Settings className="h-5 w-5 mr-2" />
                {language === 'en' ? "Software" : "সফটওয়্যার"}
              </TabsTrigger>
              <TabsTrigger value="marketing" className="py-3 data-[state=active]:bg-orange-50">
                <Star className="h-5 w-5 mr-2" />
                {language === 'en' ? "Marketing" : "মার্কেটিং"}
              </TabsTrigger>
            </TabsList>
            
            {Object.keys(services).map(key => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid md:grid-cols-2 gap-10 items-center">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-xl flex items-center justify-center mr-4 ${services[key].image}`}>
                        {services[key].icon}
                      </div>
                      <h2 className="text-3xl font-bold text-gray-900">{services[key].title}</h2>
                    </div>
                    
                    <p className="text-lg text-gray-600 mb-8">
                      {services[key].description}
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {services[key].features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                      <Button 
                        className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                        onClick={handleContactClick}
                      >
                        {language === 'en' ? "Get a Quote" : "কোটেশন নিন"}
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                      <Button 
                        variant="outline" 
                        onClick={() => document.getElementById('packages-' + key).scrollIntoView({ behavior: 'smooth' })}
                      >
                        {language === 'en' ? "View Packages" : "প্যাকেজ দেখুন"}
                      </Button>
                    </div>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                    <div className={`h-64 ${services[key].image}`}></div>
                    
                    <div className="p-8 bg-white">
                      <h3 className="text-2xl font-bold mb-4">
                        {language === 'en' ? "Why Choose Our " + services[key].title : "আমাদের " + services[key].title + " কেন বেছে নেবেন"}
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                            {language === 'en' 
                              ? "Experienced team of professionals specialized in " + key + " development" 
                              : key + " ডেভেলপমেন্টে বিশেষজ্ঞ পেশাদারদের অভিজ্ঞ দল"
                            }
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                            {language === 'en' 
                              ? "Attention to detail and focus on quality" 
                              : "বিশদ বিষয়ে মনোযোগ এবং গুণমানে ফোকাস"
                            }
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                            {language === 'en' 
                              ? "Customized solutions tailored to your specific needs" 
                              : "আপনার নির্দিষ্ট চাহিদা অনুযায়ী কাস্টমাইজড সমাধান"
                            }
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
                          <p className="text-gray-600">
                            {language === 'en' 
                              ? "Ongoing support and maintenance" 
                              : "চলমান সমর্থন এবং রক্ষণাবেক্ষণ"
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Packages Section for each service */}
                <div id={`packages-${key}`} className="mt-20">
                  <div className="text-center mb-12">
                    <Badge variant="outline" className="mb-4 px-3 py-1">
                      {language === 'en' ? "Transparent Pricing" : "স্বচ্ছ মূল্য"}
                    </Badge>
                    <h2 className="text-3xl font-bold mb-4">
                      {language === 'en' 
                        ? services[key].title + " Packages" 
                        : services[key].title + " প্যাকেজ"
                      }
                    </h2>
                    <p className="text-gray-600 max-w-3xl mx-auto">
                      {language === 'en'
                        ? "Choose the package that best fits your business needs and budget"
                        : "আপনার ব্যবসার প্রয়োজন এবং বাজেটের সাথে সবচেয়ে উপযুক্ত প্যাকেজটি বেছে নিন"
                      }
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-8">
                    {servicePackages[key].map((pkg, index) => (
                      <Card key={index} className={`overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border-0 shadow-lg ${index === 1 ? 'md:transform md:scale-105 border-2 border-blue-500' : ''}`}>
                        {index === 1 && (
                          <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 text-sm font-medium rounded-bl-lg">
                            {language === 'en' ? 'Popular' : 'জনপ্রিয়'}
                          </div>
                        )}
                        <CardHeader className="pb-2">
                          <CardTitle className="text-xl md:text-2xl">{pkg.name}</CardTitle>
                          <div className="mt-2">
                            <div className="text-3xl font-bold text-blue-600">{pkg.price}</div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3 mb-6">
                            {pkg.features.map((feature, featureIndex) => (
                              <div key={featureIndex} className="flex items-start">
                                <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{feature}</span>
                              </div>
                            ))}
                          </div>
                          <Button 
                            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                            onClick={handleContactClick}
                          >
                            {language === 'en' ? "Get Started" : "শুরু করুন"}
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  
                  <div className="text-center mt-12">
                    <p className="text-gray-600 mb-6">
                      {language === 'en'
                        ? "Need a custom solution? Contact us for a personalized quote."
                        : "কাস্টম সমাধান প্রয়োজন? একটি ব্যক্তিগতকৃত কোটেশনের জন্য আমাদের সাথে যোগাযোগ করুন।"
                      }
                    </p>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={handleContactClick}
                    >
                      {language === 'en' ? "Request Custom Quote" : "কাস্টম কোটেশন অনুরোধ করুন"}
                    </Button>
                  </div>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'en' ? "Our Process" : "আমাদের প্রক্রিয়া"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? "We follow a streamlined process to ensure your project is completed efficiently and effectively"
                : "আমরা আপনার প্রকল্পটি দক্ষতার সাথে এবং কার্যকরভাবে সম্পন্ন হয়েছে তা নিশ্চিত করার জন্য একটি সুব্যবস্থিত প্রক্রিয়া অনুসরণ করি"
              }
            </p>
          </div>
          
          <div className="relative">
            {/* Process Step Line */}
            <div className="hidden md:block absolute left-0 top-0 w-full h-1 bg-gray-200 z-0 mt-8"></div>
            
            <div className="grid md:grid-cols-4 gap-8">
              {/* Step 1 */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 z-10 relative shadow-lg">1</div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {language === 'en' ? "Discovery" : "অনুসন্ধান"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-gray-600">
                    {language === 'en' 
                      ? "We understand your requirements and business goals through detailed consultations." 
                      : "আমরা বিস্তারিত পরামর্শের মাধ্যমে আপনার প্রয়োজনীয়তা এবং ব্যবসায়িক লক্ষ্যগুলি বুঝি।"
                    }
                  </CardContent>
                </Card>
              </div>
              
              {/* Step 2 */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 z-10 relative shadow-lg">2</div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {language === 'en' ? "Planning" : "পরিকল্পনা"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-gray-600">
                    {language === 'en' 
                      ? "We create a detailed project plan with timelines, milestones, and resource allocation." 
                      : "আমরা টাইমলাইন, মাইলফলক এবং রিসোর্স বরাদ্দ সহ একটি বিস্তারিত প্রকল্প পরিকল্পনা তৈরি করি।"
                    }
                  </CardContent>
                </Card>
              </div>
              
              {/* Step 3 */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 z-10 relative shadow-lg">3</div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {language === 'en' ? "Development" : "ডেভেলপমেন্ট"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-gray-600">
                    {language === 'en' 
                      ? "Our expert team designs and develops your solution with regular progress updates." 
                      : "আমাদের বিশেষজ্ঞ দল নিয়মিত অগ্রগতি আপডেট সহ আপনার সমাধান ডিজাইন এবং বিকাশ করে।"
                    }
                  </CardContent>
                </Card>
              </div>
              
              {/* Step 4 */}
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto mb-6 z-10 relative shadow-lg">4</div>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-center">
                      {language === 'en' ? "Delivery" : "ডেলিভারি"}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center text-gray-600">
                    {language === 'en' 
                      ? "We launch your solution and provide training, documentation, and ongoing support." 
                      : "আমরা আপনার সমাধান চালু করি এবং প্রশিক্ষণ, ডকুমেন্টেশন এবং চলমান সমর্থন প্রদান করি।"
                    }
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en' ? "Ready to Transform Your Business?" : "আপনার ব্যবসা পরিবর্তন করতে প্রস্তুত?"}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? "Contact us today to discuss your project and discover how our services can help you achieve your goals."
              : "আপনার প্রকল্প নিয়ে আলোচনা করতে এবং আমাদের পরিষেবাগুলি কীভাবে আপনাকে আপনার লক্ষ্য অর্জনে সাহায্য করতে পারে তা আবিষ্কার করতে আজই আমাদের সাথে যোগাযোগ করুন।"
            }
          </p>
          <Button 
            size="lg" 
            variant="secondary" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 text-lg font-semibold"
            onClick={handleContactClick}
          >
            {language === 'en' ? "Get Started" : "শুরু করুন"}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </MainLayout>
  );
};

export default ServicesPage;
