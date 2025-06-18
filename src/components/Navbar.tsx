
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2">
            <img src="Logo.png" id='logo'/>
            <span className="text-2xl font-display text-party-pink">Het Feestkraampje</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 items-center">
            <Link to="/" className="font-medium text-gray-700 hover:text-party-pink transition-colors">
              Home
            </Link>
            <Link to="/over-ons" className="font-medium text-gray-700 hover:text-party-pink transition-colors">
              Over ons
            </Link>
            <Link to="/pakketten" className="font-medium text-gray-700 hover:text-party-pink transition-colors">
              Onze Pakketten
            </Link>
            <Link to="/fotos" className="font-medium text-gray-700 hover:text-party-pink transition-colors">
              Foto's
            </Link>
            <Link to="/ervaringen" className="font-medium text-gray-700 hover:text-party-pink transition-colors">
              Ervaringen
            </Link>
            <Link to="/contact">
              <Button className="bg-party-pink hover:bg-party-purple text-black">
                Contact
              </Button>
            </Link>
          </div>
          
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 hover:text-party-pink"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-3 space-y-3">
            <Link 
              to="/" 
              className="block font-medium text-gray-700 hover:text-party-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/over-ons" 
              className="block font-medium text-gray-700 hover:text-party-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Over ons
            </Link>
            <Link 
              to="/pakketten" 
              className="block font-medium text-gray-700 hover:text-party-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Onze Pakketten
            </Link>
            <Link 
              to="/fotos" 
              className="block font-medium text-gray-700 hover:text-party-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Foto's
            </Link>
            <Link 
              to="/ervaringen" 
              className="block font-medium text-gray-700 hover:text-party-pink transition-colors py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ervaringen
            </Link>
            <Link 
              to="/contact" 
              className="block"
              onClick={() => setIsMenuOpen(false)}
            >
              <Button className="w-full bg-party-pink hover:bg-party-purple text-black">
                Contact
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
