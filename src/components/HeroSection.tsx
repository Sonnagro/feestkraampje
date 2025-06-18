
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-r from-party-pink/20 via-party-blue/20 to-party-yellow/20 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-display mb-4 text-gray-800">
              <span className="text-party-pink">Maak</span> elk <span className="text-party-blue">kinderfeestje</span> <span className="text-party-yellow">onvergetelijk</span>!
            </h1>
            <p className="text-xl mb-8 text-gray-600">
              Wij verkopen en verhuren complete pakketten voor kinderfeesten die voor eindeloos speelplezier zorgen.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Link to="/pakketten">
                <Button size="lg" className="bg-party-pink hover:bg-party-purple text-black">
                  Bekijk onze pakketten
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="border-party-blue text-gray-700 hover:bg-party-blue/10">
                  Neem contact op
                </Button>
              </Link>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative">
              <div className="bg-white p-4 rounded-xl shadow-lg transform rotate-3 animate-float">
                <div className="aspect-w-4 aspect-h-3 bg-party-yellow/30 rounded-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1602631985686-1bb0e6a8696e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                    alt="Kinderen spelen op een feestje" 
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white p-3 rounded-xl shadow-lg transform -rotate-6 animate-float" style={{ animationDelay: '0.5s' }}>
                <div className="aspect-w-1 aspect-h-1 bg-party-pink/30 w-24 h-24 rounded-lg overflow-hidden">
                  <img
                    src="Balloons.png" 
                    alt="Ballonnen" 
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
              <div className="absolute -top-6 -right-6 bg-white p-3 rounded-xl shadow-lg transform rotate-12 animate-float" style={{ animationDelay: '1s' }}>
                <div className="aspect-w-1 aspect-h-1 bg-party-blue/30 w-20 h-20 rounded-lg overflow-hidden">
                  <img 
                    src="Balloons.png" 
                    alt="Feesthoed" 
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
