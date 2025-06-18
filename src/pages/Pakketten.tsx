
import Layout from "@/components/Layout";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

const Pakketten = () => {
  return (
    <Layout>
      <section className="pt-16 pb-8 bg-gradient-to-r from-party-pink/20 via-party-blue/20 to-party-yellow/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Onze <span className="text-party-pink">Feestpakketten</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ontdek onze verschillende feestpakketten en kies het thema dat past bij jouw kind!
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                description={product.description}
                imageUrl={product.imageUrl}
                color={product.color}
              />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-display mb-6 text-center">Veelgestelde vragen</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">Voor welke leeftijden zijn de pakketten geschikt?</h3>
                <p className="text-gray-600">
                  Onze pakketten zijn geschikt voor verschillende leeftijdsgroepen, meestal tussen 4 en 12 jaar. Bij elk pakket staat aangegeven voor welke leeftijdsgroep het meest geschikt is.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">Hoeveel kinderen kunnen meedoen met een pakket?</h3>
                <p className="text-gray-600">
                  Onze standaardpakketten zijn geschikt voor 8 kinderen. Wil je een pakket voor meer of minder kinderen? Neem dan contact met ons op voor een pakket op maat.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">Kan ik een pakket op maat laten maken?</h3>
                <p className="text-gray-600">
                  Jazeker! Heb je specifieke wensen of een ander thema in gedachten? Neem contact met ons op en we denken graag met je mee over een feestpakket op maat.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">Hoe ver van tevoren moet ik een pakket bestellen?</h3>
                <p className="text-gray-600">
                  We raden aan om minimaal 1 week van tevoren je pakket te bestellen. Bij drukte kan de levertijd iets langer zijn, dus bestel op tijd om teleurstelling te voorkomen.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-bold mb-2 tracking-wide">Wat als het regent tijdens een buitenactiviteit?</h3>
                <p className="text-gray-600">
                  Veel van onze pakketten bevatten activiteiten die zowel binnen als buiten gedaan kunnen worden. Bij bestelling geven we tips hoe je het programma kunt aanpassen aan de weersomstandigheden.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pakketten;
