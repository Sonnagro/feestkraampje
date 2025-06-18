
import Layout from "@/components/Layout";
import ContactForm from "@/components/ContactForm";
import { Facebook, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="pt-16 pb-8 bg-gradient-to-r from-party-pink/20 via-party-blue/20 to-party-yellow/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Neem <span className="text-party-pink">Contact</span> Op</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Heb je vragen of wil je een feestpakket bestellen? Neem dan contact met ons op!
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            <div>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h2 className="text-2xl font-display mb-4">Contactgegevens</h2>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-1">E-mail</h3>
                    <a href="mailto:pascalle.d.j@icloud.com" className="text-party-pink hover:underline">
                      pascalle.d.j@icloud.com
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-1">Telefoon</h3>
                    <a href="tel:+31625542055" className="text-party-pink hover:underline">
                      +31 06 25 54 20 55
                    </a>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-1">Volg ons</h3>
                    <div className="flex space-x-4 mt-2">
                      <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="bg-party-pink/20 p-3 rounded-full hover:bg-party-pink/30 transition-colors">
                        <Facebook className="h-5 w-5 text-party-pink" />
                        <span className="sr-only">Facebook</span>
                      </a>
                      <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="bg-party-pink/20 p-3 rounded-full hover:bg-party-pink/30 transition-colors">
                        <Instagram className="h-5 w-5 text-party-pink" />
                        <span className="sr-only">Instagram</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-party-yellow/20 p-6 rounded-lg">
                <h3 className="text-lg font-display mb-3">Bestelproces</h3>
                <p className="text-gray-600 mb-4">
                  Zo werkt het bestellen van een feestpakket:
                </p>
                <ol className="list-decimal ml-6 space-y-2 text-gray-600">
                  <li>Neem contact op via telefoon of het contactformulier</li>
                  <li>We bespreken je wensen en het gewenste pakket</li>
                  <li>Je ontvangt een bevestiging van je bestelling</li>
                  <li>We leveren je feestpakket op tijd voor het feest</li>
                  <li>Geniet van een zorgeloos en geslaagd kinderfeest!</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
