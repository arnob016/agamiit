
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from '@/hooks/use-toast';
import MainLayout from '@/components/MainLayout';
import { useLanguage } from '@/hooks/useLanguage';

const ContactPage = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: language === 'en' ? "Message Sent!" : "বার্তা পাঠানো হয়েছে!",
        description: language === 'en' 
          ? "We'll get back to you as soon as possible." 
          : "আমরা যত তাড়াতাড়ি সম্ভব আপনার সাথে যোগাযোগ করব।",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: language === 'en' ? "Phone" : "ফোন",
      content: "+880 1XXX-XXXXXX"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: language === 'en' ? "Email" : "ইমেইল",
      content: "info@agamiit.com"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: language === 'en' ? "Address" : "ঠিকানা",
      content: language === 'en' ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: language === 'en' ? "Business Hours" : "ব্যবসায়িক সময়",
      content: language === 'en' ? "Mon-Fri: 9AM - 6PM" : "সোম-শুক্র: সকাল ৯টা - সন্ধ্যা ৬টা"
    }
  ];
  
  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {language === 'en' ? "Contact Us" : "যোগাযোগ করুন"}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {language === 'en' 
              ? "Get in touch with our team to discuss your project or ask any questions."
              : "আপনার প্রকল্প নিয়ে আলোচনা করতে বা যেকোন প্রশ্ন জিজ্ঞাসা করতে আমাদের দলের সাথে যোগাযোগ করুন।"
            }
          </p>
        </div>
      </section>
      
      {/* Contact Info & Form Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold mb-6 text-gray-900">
                {language === 'en' ? "Get in Touch" : "যোগাযোগ করুন"}
              </h2>
              <p className="text-gray-600 mb-8">
                {language === 'en' 
                  ? "Have a question or want to discuss a project? Contact us using the form or through any of the channels below."
                  : "কোন প্রশ্ন আছে বা একটি প্রকল্প নিয়ে আলোচনা করতে চান? ফর্ম ব্যবহার করে বা নিচের যেকোনো চ্যানেলের মাধ্যমে আমাদের সাথে যোগাযোগ করুন।"
                }
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-12">
                <h3 className="text-lg font-bold mb-4 text-gray-900">
                  {language === 'en' ? "Follow Us" : "অনুসরণ করুন"}
                </h3>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white hover:bg-blue-700 transition-colors"
                  >
                    <span className="sr-only">Facebook</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-sky-500 flex items-center justify-center text-white hover:bg-sky-600 transition-colors"
                  >
                    <span className="sr-only">Twitter</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center text-white hover:bg-pink-700 transition-colors"
                  >
                    <span className="sr-only">Instagram</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  </a>
                  <a 
                    href="#" 
                    className="w-10 h-10 rounded-full bg-blue-800 flex items-center justify-center text-white hover:bg-blue-900 transition-colors"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>
                    {language === 'en' ? "Send Us a Message" : "আমাদের একটি বার্তা পাঠান"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">
                          {language === 'en' ? "Your Name" : "আপনার নাম"}
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder={language === 'en' ? "Enter your name" : "আপনার নাম লিখুন"}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">
                          {language === 'en' ? "Email Address" : "ইমেইল ঠিকানা"}
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder={language === 'en' ? "Enter your email" : "আপনার ইমেইল লিখুন"}
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="phone">
                          {language === 'en' ? "Phone Number" : "ফোন নম্বর"}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={language === 'en' ? "Enter your phone number" : "আপনার ফোন নম্বর লিখুন"}
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">
                          {language === 'en' ? "Subject" : "বিষয়"}
                        </Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder={language === 'en' ? "What is this regarding?" : "এটি কী সম্পর্কে?"}
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">
                        {language === 'en' ? "Message" : "বার্তা"}
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        placeholder={language === 'en' ? "How can we help you?" : "আমরা কিভাবে আপনাকে সাহায্য করতে পারি?"}
                        className="resize-none"
                      />
                    </div>
                    
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin mr-2 h-4 w-4 border-2 border-current border-t-transparent rounded-full"></div>
                          {language === 'en' ? "Sending..." : "পাঠাচ্ছে..."}
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          {language === 'en' ? "Send Message" : "বার্তা পাঠান"}
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="bg-gray-100">
        <div className="h-80 bg-gradient-to-r from-blue-200 to-indigo-200 w-full flex items-center justify-center">
          <div className="text-center">
            <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold">
              {language === 'en' ? "Visit Our Office" : "আমাদের অফিসে আসুন"}
            </h3>
            <p className="text-gray-700">
              {language === 'en' ? "Dhaka, Bangladesh" : "ঢাকা, বাংলাদেশ"}
            </p>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              {language === 'en' ? "Frequently Asked Questions" : "প্রায়শই জিজ্ঞাসিত প্রশ্নাবলী"}
            </h2>
            <p className="text-gray-600">
              {language === 'en' 
                ? "Find quick answers to common questions about our services."
                : "আমাদের সেবা সম্পর্কে সাধারণ প্রশ্নগুলির দ্রুত উত্তর খুঁজুন।"
              }
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: language === 'en' ? "How long does it take to develop a website?" : "একটি ওয়েবসাইট তৈরি করতে কত সময় লাগে?",
                a: language === 'en' 
                  ? "The timeframe depends on the complexity of your project. Simple websites can be completed in 1-2 weeks, while more complex projects may take 4-8 weeks or more."
                  : "সময়সীমা আপনার প্রকল্পের জটিলতার উপর নির্ভর করে। সাধারণ ওয়েবসাইটগুলি 1-2 সপ্তাহের মধ্যে সম্পন্ন করা যেতে পারে, যখন আরও জটিল প্রকল্পগুলির জন্য 4-8 সপ্তাহ বা তার বেশি সময় লাগতে পারে।"
              },
              {
                q: language === 'en' ? "What does your website package include?" : "আপনার ওয়েবসাইট প্যাকেজে কী অন্তর্ভুক্ত আছে?",
                a: language === 'en'
                  ? "Our website packages typically include domain registration, hosting, professional design, responsive layouts, basic SEO setup, and customer support. The specific features vary based on the package you choose."
                  : "আমাদের ওয়েবসাইট প্যাকেজগুলিতে সাধারণত ডোমেন রেজিস্ট্রেশন, হোস্টিং, পেশাদার ডিজাইন, রেসপনসিভ লেআউট, বেসিক এসইও সেটআপ এবং কাস্টমার সাপোর্ট অন্তর্ভুক্ত থাকে। নির্দিষ্ট বৈশিষ্ট্যগুলি আপনার বেছে নেওয়া প্যাকেজের উপর ভিত্তি করে পরিবর্তিত হয়।"
              },
              {
                q: language === 'en' ? "Do you provide ongoing support after project completion?" : "প্রকল্প সম্পূর্ণ হওয়ার পরে আপনি কি চলমান সমর্থন প্রদান করেন?",
                a: language === 'en'
                  ? "Yes, we offer ongoing support and maintenance services for all our completed projects. We have various support packages available to ensure your website or application continues to run smoothly."
                  : "হ্যাঁ, আমরা আমাদের সমস্ত সম্পূর্ণ প্রকল্পের জন্য চলমান সমর্থন এবং রক্ষণাবেক্ষণ পরিষেবা প্রদান করি। আপনার ওয়েবসাইট বা অ্যাপ্লিকেশন সুচারুভাবে চলতে থাকে তা নিশ্চিত করতে আমাদের বিভিন্ন সাপোর্ট প্যাকেজ রয়েছে।"
              }
            ].map((faq, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default ContactPage;
