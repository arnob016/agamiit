
import { Card, CardContent } from "@/components/ui/card";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export const ServiceCard = ({ icon, title, description }: ServiceCardProps) => (
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
