
import { Star } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/card";

interface ReviewCardProps {
  name: string;
  stars: number;
  text: string;
  date: string;
  color?: string;
}

const ReviewCard = ({ name, stars, text, date, color = 'pink' }: ReviewCardProps) => {
  const getBgColor = () => {
    switch (color) {
      case 'pink': return 'bg-party-pink/10';
      case 'blue': return 'bg-party-blue/10';
      case 'yellow': return 'bg-party-yellow/10';
      case 'green': return 'bg-party-green/10';
      case 'purple': return 'bg-party-purple/10';
      default: return 'bg-gray-100';
    }
  };
  
  return (
    <Card className={`${getBgColor()} border-none shadow-sm hover:shadow-md transition-shadow`}>
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <h3 className="font-bold">{name}</h3>
          <CardDescription>{date}</CardDescription>
        </div>
        <div className="flex">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i} 
              className={`h-4 w-4 ${i < stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
            />
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700">{text}</p>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
