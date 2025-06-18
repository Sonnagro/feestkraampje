
import Layout from "@/components/Layout";
import { Heart, Calendar, Package, Phone } from "lucide-react";

const OverOns = () => {
  return (
    <Layout>
      <section className="pt-16 pb-8 bg-gradient-to-r from-party-pink/20 via-party-blue/20 to-party-yellow/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Over <span className="text-party-pink">Het Feestkraampje</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Leer ons kennen en ontdek hoe wij elk kinderfeestje onvergetelijk maken!
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <div className="relative">
                <div className="bg-white p-4 rounded-xl shadow-lg transform -rotate-2">
                  <div className="aspect-w-4 aspect-h-3 bg-party-blue/10 rounded-lg">
                    <img 
                      src="https://picsum.photos/id/237/600/300" 
                      alt="Pascalle van Het Feestkraampje" 
                      className="object-cover rounded-lg shadow-md"
                    />
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 bg-white p-3 rounded-full shadow-lg transform rotate-12">
                  <div className="bg-party-pink/20 p-3 rounded-full">
                    <Heart className="h-8 w-8 text-party-pink" />
                  </div>
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display mb-6">Welkom bij <span className="text-party-pink">Het Feestkraampje</span></h2>
              <p className="text-gray-700 mb-4">
                Mijn naam is Pascalle de Jonge, en ik ben de oprichter van Het Feestkraampje. Als moeder weet ik hoe belangrijk en tegelijkertijd uitdagend het is om een onvergetelijk kinderfeestje te organiseren.
              </p>
              <p className="text-gray-700 mb-4">
                Het idee voor Het Feestkraampje ontstond toen ik zelf op zoek was naar leuke activiteiten voor het feestje van mijn eigen kind. Ik merkte dat er behoefte was aan complete, goed uitgedachte feestpakketten die zowel de kinderen zouden boeien als de ouders zouden ontlasten.
              </p>
              <p className="text-gray-700">
                Bij Het Feestkraampje staat plezier voorop! We creëren unieke en complete pakketten voor kinderfeestjes die zorgen voor een magische ervaring. Of het nu een prinsessenfeest, piratenspeurtocht of een superheldenmissie is - wij leveren alles wat je nodig hebt voor een geslaagd feest.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-display mb-12 text-center">Hoe het <span className="text-party-pink">werkt</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-party-pink/20 p-4 rounded-full mb-4">
                <Package className="h-8 w-8 text-party-pink" />
              </div>
              <h3 className="text-xl font-display mb-2">1. Kies je pakket</h3>
              <p className="text-gray-600">
                Bekijk onze verschillende thema's en kies het pakket dat het beste past bij de wensen van jouw kind.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-party-blue/20 p-4 rounded-full mb-4">
                <Phone className="h-8 w-8 text-party-blue" />
              </div>
              <h3 className="text-xl font-display mb-2">2. Neem contact op</h3>
              <p className="text-gray-600">
                Via telefoon, e-mail of het contactformulier kun je je bestelling plaatsen en eventuele vragen stellen.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
              <div className="bg-party-yellow/20 p-4 rounded-full mb-4">
                <Calendar className="h-8 w-8 text-party-yellow" />
              </div>
              <h3 className="text-xl font-display mb-2">3. Geniet van het feest</h3>
              <p className="text-gray-600">
                Je ontvangt je feestpakket en hebt alles in huis voor een onvergetelijk kinderfeest!
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-display mb-6">Onze <span className="text-party-pink">belofte</span> aan jou</h2>
            <p className="text-lg text-gray-700 mb-8">
              Bij Het Feestkraampje beloven we:
            </p>
            
            <ul className="space-y-4 text-left max-w-xl mx-auto">
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-party-pink/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-party-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Altijd volledige en complete pakketten met alles wat je nodig hebt
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-party-pink/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-party-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Creatieve, leuke en uitdagende activiteiten die kinderen écht leuk vinden
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-party-pink/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-party-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Materialen van goede kwaliteit die lang meegaan
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-party-pink/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-party-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Persoonlijk contact en advies op maat voor jouw specifieke wensen
                </span>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-party-pink/20 flex items-center justify-center mr-3 mt-0.5">
                  <svg className="h-4 w-4 text-party-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">
                  Een stressvrije ervaring zodat jij ook kunt genieten van het feest
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OverOns;
