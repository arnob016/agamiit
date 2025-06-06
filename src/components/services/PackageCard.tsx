
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

interface PackageCardProps {
  title: string;
  price: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const PackageCard = ({ title, price, features, isPopular = false, ctaText }: PackageCardProps) => (
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
