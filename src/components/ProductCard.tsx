
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  color: string;
}

const ProductCard = ({ id, title, description, imageUrl, color }: ProductCardProps) => {
  // Map color string to Tailwind class
  const getBgColor = () => {
    switch (color) {
      case 'pink': return 'bg-party-pink/20';
      case 'blue': return 'bg-party-blue/20';
      case 'yellow': return 'bg-party-yellow/20';
      case 'green': return 'bg-party-green/20';
      case 'purple': return 'bg-party-purple/20';
      default: return 'bg-party-blue/20';
    }
  };
  
  const getButtonColor = () => {
    switch (color) {
      case 'pink': return 'bg-party-pink hover:bg-pink-400';
      case 'blue': return 'bg-party-blue hover:bg-blue-400';
      case 'yellow': return 'bg-party-yellow hover:bg-yellow-400';
      case 'green': return 'bg-party-green hover:bg-green-400';
      case 'purple': return 'bg-party-purple hover:bg-purple-400';
      default: return 'bg-party-pink hover:bg-pink-400';
    }
  };

  return (
    <Card className={`product-card ${getBgColor()} overflow-hidden border-none shadow-md`}>
      <div className="aspect-w-16 aspect-h-10 overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title} 
          className="object-cover w-full h-48 transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="font-display text-xl tracking-wide">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <p className="text-sm text-gray-600 line-clamp-3">
          Een geweldig feestpakket voor iedere gelegenheid!
        </p>
      </CardContent>
      <CardFooter>
        <Link to={`/pakketten/${id}`} className="w-full">
          <Button className={`w-full text-black ${getButtonColor()}`}>
            Meer info
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
