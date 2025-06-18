
import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { products } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ArrowLeft, CheckCircle2, Package } from "lucide-react";

const PakketDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === Number(id));
  
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-3xl font-display mb-4">Pakket niet gevonden</h1>
          <p className="mb-8">Het pakket dat je zoekt bestaat niet of is verwijderd.</p>
          <Link to="/pakketten">
            <Button>Terug naar alle pakketten</Button>
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <Link to="/pakketten" className="inline-flex items-center text-gray-600 hover:text-party-pink mb-6">
          <ArrowLeft className="h-4 w-4 mr-1" />
          Terug naar alle pakketten
        </Link>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="rounded-lg overflow-hidden shadow-md bg-white">
              <img 
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
          
          <div>
            <div className="inline-block px-3 py-1 bg-party-pink/20 text-party-pink rounded-full mb-4">
              Kinderfeest pakket
            </div>
            <h1 className="text-3xl md:text-4xl font-display mb-4">{product.title}</h1>
            <p className="text-lg text-gray-600 mb-6">
              {product.longDescription}
            </p>
            
            <h3 className="text-xl font-display mb-3">Wat zit er in dit pakket?</h3>
            <ul className="space-y-2 mb-8">
              {product.includes.map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2 text-party-pink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="border-t border-gray-200 pt-6">
              <Link to="/contact">
                <Button size="lg" className="bg-party-pink hover:bg-party-purple text-black w-full sm:w-auto">
                  <Package className="mr-2 h-5 w-5" />
                  Informeer naar dit pakket
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
          <h2 className="text-2xl font-display mb-6">Veel gestelde vragen over dit pakket</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold mb-2">Voor welke leeftijd is dit pakket geschikt?</h3>
              <p className="text-gray-600">
                Dit pakket is ideaal voor kinderen van {Math.floor(Math.random() * 3) + 5}-{Math.floor(Math.random() * 3) + 9} jaar.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Hoeveel kinderen kunnen meedoen?</h3>
              <p className="text-gray-600">
                Het standaardpakket is gemaakt voor 8 kinderen. Voor meer kinderen kun je extra materialen bijbestellen.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Kan ik dit pakket aanpassen?</h3>
              <p className="text-gray-600">
                Ja, we kunnen het pakket aanpassen aan jouw wensen. Neem contact met ons op voor de mogelijkheden.
              </p>
            </div>
            
            <div>
              <h3 className="text-lg font-bold mb-2">Hoe lang duurt dit feestje?</h3>
              <p className="text-gray-600">
                De activiteiten in dit pakket duren ongeveer 1,5 tot 2 uur, afhankelijk van het tempo van de kinderen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PakketDetail;
