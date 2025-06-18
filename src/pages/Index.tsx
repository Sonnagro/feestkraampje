
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ProductCard from "@/components/ProductCard";
import ReviewCard from "@/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, PartyPopper, Star, ThumbsUp, Trophy } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { reviews } from "@/data/reviews";

const Index = () => {
  const featuredProducts = products.slice(0, 3);
  const featuredReviews = reviews.slice(0, 3);

  return (
    <Layout showConfetti={true}>
      <HeroSection />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-display text-center mb-12">Waarom kiezen voor <span className="text-party-pink">Het Feestkraampje</span>?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-party-blue/10 hover:shadow-md transition-shadow">
              <div className="bg-party-blue/20 p-4 rounded-full mb-4">
                <Gift className="h-8 w-8 text-party-blue" />
              </div>
              <h3 className="text-xl font-display mb-2">Volledig verzorgd</h3>
              <p className="text-gray-600">
                Onze pakketten zijn compleet en bevatten alles wat je nodig hebt voor een geslaagd feest.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-party-pink/10 hover:shadow-md transition-shadow">
              <div className="bg-party-pink/20 p-4 rounded-full mb-4">
                <PartyPopper className="h-8 w-8 text-party-pink" />
              </div>
              <h3 className="text-xl font-display mb-2">Uniek en creatief</h3>
              <p className="text-gray-600">
                Onze feestpakketten zijn zorgvuldig samengesteld met unieke activiteiten die kinderen écht leuk vinden.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-party-yellow/10 hover:shadow-md transition-shadow">
              <div className="bg-party-yellow/20 p-4 rounded-full mb-4">
                <ThumbsUp className="h-8 w-8 text-party-yellow" />
              </div>
              <h3 className="text-xl font-display mb-2">Gemak voor ouders</h3>
              <p className="text-gray-600">
                Geen stress of gedoe: wij zorgen voor alles zodat jij kan genieten van een zorgeloos feest.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display">Onze populairste <span className="text-party-pink">feestpakketten</span></h2>
            <Link to="/pakketten" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-party-blue text-gray-700 hover:bg-party-blue/10">
                Bekijk alle pakketten
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
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
      
      {/* Reviews */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-display">Wat onze <span className="text-party-pink">klanten</span> zeggen</h2>
              <div className="flex items-center mt-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">Gemiddelde beoordeling van 4.8/5</span>
              </div>
            </div>
            <Link to="/ervaringen" className="mt-4 md:mt-0">
              <Button variant="outline" className="border-party-blue text-gray-700 hover:bg-party-blue/10">
                Alle ervaringen
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredReviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                stars={review.stars}
                text={review.text}
                date={review.date}
                color={['pink', 'blue', 'yellow'][index % 3]}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-party-pink/20 via-party-blue/20 to-party-yellow/20">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display mb-4">
              Klaar om een <span className="text-party-pink">onvergetelijk</span> kinderfeest te organiseren?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              Neem contact op voor meer informatie of om een bestelling te plaatsen!
            </p>
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Link to="/contact">
                <Button size="lg" className="bg-party-pink hover:bg-party-purple text-black">
                  Neem contact op
                </Button>
              </Link>
              <Link to="/pakketten">
                <Button size="lg" variant="outline" className="border-party-blue text-gray-700 hover:bg-party-blue/10">
                  Bekijk onze pakketten
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Achievement */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-party-yellow/10 p-6 md:p-8 rounded-xl flex flex-col md:flex-row items-center">
            <div className="mb-6 md:mb-0 md:mr-8 flex-shrink-0">
              <div className="bg-party-yellow/30 p-4 rounded-full">
                <Trophy className="h-16 w-16 text-yellow-600" />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-display mb-2">Meer dan 100+ geslaagde kinderfeestjes!</h3>
              <p className="text-gray-600">
                We zijn trots dat we al zoveel kinderen blij hebben gemaakt met onze feestpakketten. 
                Ons doel is om elk kinderfeestje onvergetelijk te maken en blijde gezichten te zien.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
