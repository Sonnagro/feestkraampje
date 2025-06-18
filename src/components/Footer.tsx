
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white border-t mt-12 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-display mb-4 text-party-pink">Het Feestkraampje</h3>
            <p className="text-gray-600 mb-4">
              Wij verzorgen complete pakketten voor onvergetelijke kinderfeestjes!
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-party-pink transition-colors">
                <Facebook />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-party-pink transition-colors">
                <Instagram />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-display mb-4 text-party-blue">Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-party-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/over-ons" className="text-gray-600 hover:text-party-pink transition-colors">
                  Over ons
                </Link>
              </li>
              <li>
                <Link to="/pakketten" className="text-gray-600 hover:text-party-pink transition-colors">
                  Onze Pakketten
                </Link>
              </li>
              <li>
                <Link to="/fotos" className="text-gray-600 hover:text-party-pink transition-colors">
                  Foto's
                </Link>
              </li>
              <li>
                <Link to="/ervaringen" className="text-gray-600 hover:text-party-pink transition-colors">
                  Ervaringen
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-party-pink transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-display mb-4 text-party-yellow">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="text-party-pink" size={18} />
                <a href="tel:+31625542055" className="text-gray-600 hover:text-party-pink transition-colors">
                  +31 06 25 54 20 55
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-party-pink" size={18} />
                <a href="mailto:pascalle.d.j@icloud.com" className="text-gray-600 hover:text-party-pink transition-colors">
                  pascalle.d.j@icloud.com
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Het Feestkraampje. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
