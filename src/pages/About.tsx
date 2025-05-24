
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Check, Users, Trophy, Calendar, Sparkles } from 'lucide-react';
import MainLayout from '@/components/MainLayout';
import { useLanguage } from '@/hooks/useLanguage';

const AboutPage = () => {
  const { t, language } = useLanguage();

  const milestones = [
    {
      year: "2015",
      title: language === 'en' ? "Company Founded" : "কোম্পানি প্রতিষ্ঠিত",
      description: language === 'en' 
        ? "Started as a small web development studio in Dhaka" 
        : "ঢাকায় একটি ছোট ওয়েব ডেভেলপমেন্ট স্টুডিও হিসেবে শুরু"
    },
    {
      year: "2017",
      title: language === 'en' ? "Product Expansion" : "পণ্য সম্প্রসারণ",
      description: language === 'en' 
        ? "Launched software solutions for businesses" 
        : "ব্যবসার জন্য সফটওয়্যার সমাধান চালু"
    },
    {
      year: "2019",
      title: language === 'en' ? "Mobile Development" : "মোবাইল ডেভেলপমেন্ট",
      description: language === 'en' 
        ? "Added mobile app development to our services" 
        : "আমাদের পরিষেবায় মোবাইল অ্যাপ ডেভেলপমেন্ট যোগ করা হয়েছে"
    },
    {
      year: "2022",
      title: language === 'en' ? "International Clients" : "আন্তর্জাতিক ক্লায়েন্ট",
      description: language === 'en' 
        ? "Expanded services to international markets" 
        : "আন্তর্জাতিক বাজারে পরিষেবা সম্প্রসারিত"
    },
    {
      year: "2023",
      title: language === 'en' ? "50+ Team Members" : "৫০+ টিম সদস্য",
      description: language === 'en' 
        ? "Grew our talented team to over 50 professionals" 
        : "আমাদের প্রতিভাবান টিম ৫০ জনেরও বেশি পেশাদারে বৃদ্ধি পেয়েছে"
    }
  ];
  
  const values = [
    {
      icon: <Users className="h-8 w-8 text-blue-600" />,
      title: language === 'en' ? "Client-Centric" : "ক্লায়েন্ট-কেন্দ্রিক",
      description: language === 'en' 
        ? "We prioritize our clients' needs and goals above all else" 
        : "আমরা আমাদের ক্লায়েন্টদের চাহিদা এবং লক্ষ্যগুলিকে সর্বোপরি অগ্রাধিকার দিই"
    },
    {
      icon: <Trophy className="h-8 w-8 text-green-600" />,
      title: language === 'en' ? "Quality Excellence" : "গুণমান শ্রেষ্ঠত্ব",
      description: language === 'en' 
        ? "We deliver high-quality solutions that exceed expectations" 
        : "আমরা উচ্চ-মানের সমাধান সরবরাহ করি যা প্রত্যাশা ছাড়িয়ে যায়"
    },
    {
      icon: <Sparkles className="h-8 w-8 text-purple-600" />,
      title: language === 'en' ? "Innovation" : "উদ্ভাবন",
      description: language === 'en' 
        ? "We embrace new technologies and innovative approaches" 
        : "আমরা নতুন প্রযুক্তি এবং উদ্ভাবনী পদ্ধতি গ্রহণ করি"
    }
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? "Our Story" : "আমাদের গল্প"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            {language === 'en' 
              ? "Agami IT has been empowering businesses with cutting-edge technology solutions since 2015."
              : "২০১৫ সাল থেকে আগামী আইটি অত্যাধুনিক প্রযুক্তি সমাধানের মাধ্যমে ব্যবসাগুলিকে শক্তিশালী করে আসছে।"
            }
          </p>
        </div>
      </section>
      
      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {language === 'en' ? "Our Mission" : "আমাদের লক্ষ্য"}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {language === 'en' 
                  ? "To provide innovative and high-quality technology solutions that help businesses thrive in the digital era. We aim to be a trusted partner in our clients' digital transformation journey."
                  : "ব্যবসাগুলিকে ডিজিটাল যুগে সমৃদ্ধি করতে সাহায্য করার জন্য উদ্ভাবনী এবং উচ্চ-মানের প্রযুক্তি সমাধান প্রদান করা। আমরা আমাদের ক্লায়েন্টদের ডিজিটাল রূপান্তরের যাত্রায় একটি বিশ্বস্ত অংশীদার হতে চাই।"
                }
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">
                {language === 'en' ? "Our Vision" : "আমাদের দৃষ্টিভঙ্গি"}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {language === 'en' 
                  ? "To become the leading technology partner in Bangladesh and beyond, recognized for our excellence in web development, software solutions, and digital innovation."
                  : "বাংলাদেশ এবং তার বাইরে শীর্ষস্থানীয় প্রযুক্তি অংশীদার হওয়া, যা ওয়েব ডেভেলপমেন্ট, সফটওয়্যার সমাধান, এবং ডিজিটাল উদ্ভাবনের ক্ষেত্রে আমাদের শ্রেষ্ঠত্বের জন্য স্বীকৃত।"
                }
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Company Values */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'en' ? "Our Core Values" : "আমাদের মূল মূল্যবোধ"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? "The principles that guide our work and define our culture"
                : "আমাদের কাজকে নির্দেশনা দেয় এবং আমাদের সংস্কৃতি নির্ধারণ করে এমন নীতি"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Timeline/Milestones */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'en' ? "Our Journey" : "আমাদের যাত্রা"}
            </h2>
          </div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 to-indigo-600"></div>
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'md:pr-12 text-right' : 'md:pl-12'}`}>
                    <div className={`p-6 bg-white shadow-lg rounded-lg border-l-4 ${index % 2 === 0 ? 'border-blue-500' : 'border-indigo-500'} hover:shadow-xl transition-shadow`}>
                      <h3 className="text-xl font-bold mb-1">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="flex-shrink-0 z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold shadow-lg">
                      {milestone.year.substring(2)}
                    </div>
                  </div>
                  
                  <div className="w-1/2">
                    {/* Spacer for layout */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              {language === 'en' ? "Our Leadership" : "আমাদের নেতৃত্ব"}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {language === 'en' 
                ? "Meet the talented team leading our company forward"
                : "আমাদের কোম্পানিকে এগিয়ে নিয়ে যাওয়া প্রতিভাবান টিমের সাথে দেখা করুন"
              }
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-blue-600"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-24 h-24 rounded-full bg-white p-1 absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-bold">{language === 'en' ? "Founder & CEO" : "প্রতিষ্ঠাতা এবং সিইও"}</h3>
                  <p className="text-gray-600 mt-1">{language === 'en' ? "Leadership & Vision" : "নেতৃত্ব এবং দৃষ্টি"}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-green-400 to-green-600"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-24 h-24 rounded-full bg-white p-1 absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-bold">{language === 'en' ? "CTO" : "সিটিও"}</h3>
                  <p className="text-gray-600 mt-1">{language === 'en' ? "Technology & Innovation" : "প্রযুক্তি এবং উদ্ভাবন"}</p>
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="h-64 bg-gradient-to-br from-purple-400 to-purple-600"></div>
              <CardContent className="p-6 text-center relative">
                <div className="w-24 h-24 rounded-full bg-white p-1 absolute -top-12 left-1/2 transform -translate-x-1/2 shadow-lg">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center">
                    <Users className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
                <div className="mt-12">
                  <h3 className="text-xl font-bold">{language === 'en' ? "Creative Director" : "ক্রিয়েটিভ ডিরেক্টর"}</h3>
                  <p className="text-gray-600 mt-1">{language === 'en' ? "Design & User Experience" : "ডিজাইন এবং ব্যবহারকারী অভিজ্ঞতা"}</p>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              {language === 'en' ? "Join Our Team" : "আমাদের টিমে যোগ দিন"}
            </Button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default AboutPage;
