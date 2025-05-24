
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Check, Globe, Code, Smartphone, Settings, Star, ArrowRight } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import MainLayout from '@/components/MainLayout';
import { useLanguage } from '@/hooks/useLanguage';

const ServicesPage = () => {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState("web");
  
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
        </div>
      </section>
      
      {/* Services Tabs */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="web" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-4 mb-12">
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
                    
                    <div className="grid grid-cols-2 gap-4">
                      {services[key].features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                          <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                    
                    <Button 
                      className="mt-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                    >
                      {language === 'en' ? "Get a Quote" : "কোটেশন নিন"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </div>
                  
                  <div className="rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow border border-gray-100">
                    <div className={`h-64 ${services[key].image}`}></div>
                    
                    <div className="p-8 bg-white">
                      <h3 className="text-2xl font-bold mb-4">
                        {language === 'en' ? "Why Choose Our " + services[key].title : "আমাদের " + services[key].title + " কেন বেছে নেবেন"}
                      </h3>
                      
                      <div className="space-y-3">
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                          <p className="text-gray-600">
                            {language === 'en' 
                              ? "Experienced team of professionals specialized in " + key + " development" 
                              : key + " ডেভেলপমেন্টে বিশেষজ্ঞ পেশাদারদের অভিজ্ঞ দল"
                            }
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                          <p className="text-gray-600">
                            {language === 'en' 
                              ? "Attention to detail and focus on quality" 
                              : "বিশদ বিষয়ে মনোযোগ এবং গুণমানে ফোকাস"
                            }
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                          <p className="text-gray-600">
                            {language === 'en' 
                              ? "Customized solutions tailored to your specific needs" 
                              : "আপনার নির্দিষ্ট চাহিদা অনুযায়ী কাস্টমাইজড সমাধান"
                            }
                          </p>
                        </div>
                        
                        <div className="flex items-start">
                          <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
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
