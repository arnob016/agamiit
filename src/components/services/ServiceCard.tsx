
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
  <Card className="h-full group relative overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/80 backdrop-blur-sm">
    {/* Gradient overlay that appears on hover */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/0 via-indigo-600/0 to-purple-600/0 group-hover:from-blue-600/5 group-hover:via-indigo-600/5 group-hover:to-purple-600/5 transition-all duration-500 rounded-lg"></div>
    
    {/* Animated border gradient */}
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
    <div className="absolute inset-[1px] rounded-lg bg-white/90 backdrop-blur-sm"></div>
    
    <CardContent className="relative p-8 flex flex-col h-full">
      {/* Enhanced icon container */}
      <div className="relative mb-6">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl blur-sm opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>
        <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-indigo-700 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 flex-grow leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      
      {/* Hover indicator */}
      <div className="mt-6 flex items-center text-indigo-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
        <span className="text-sm font-semibold">Learn more</span>
        <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </CardContent>
  </Card>
);
