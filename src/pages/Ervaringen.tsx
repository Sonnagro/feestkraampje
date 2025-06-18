
import Layout from "@/components/Layout";
import ReviewCard from "@/components/ReviewCard";
import { reviews } from "@/data/reviews";
import { MessageCircle, Star } from "lucide-react";

const Ervaringen = () => {
  const totalStars = reviews.reduce((acc, review) => acc + review.stars, 0);
  const averageRating = (totalStars / reviews.length).toFixed(1);
  
  // Count reviews by star rating
  const starCounts = [0, 0, 0, 0, 0];
  reviews.forEach(review => {
    starCounts[review.stars - 1]++;
  });
  
  const colors = ['pink', 'blue', 'yellow', 'green', 'purple', 'pink'];
  
  return (
    <Layout>
      <section className="pt-16 pb-8 bg-gradient-to-r from-party-pink/20 via-party-blue/20 to-party-yellow/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Klant <span className="text-party-pink">Ervaringen</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Lees wat anderen vinden van onze feestpakketten
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-6 md:mb-0 text-center md:text-left">
                <h2 className="text-3xl font-display mb-2">Klantbeoordelingen</h2>
                <p className="text-gray-600">Gebaseerd op {reviews.length} ervaringen</p>
              </div>
              
              <div className="flex items-center">
                <div className="flex items-center justify-center bg-party-yellow/20 w-20 h-20 rounded-full">
                  <div className="text-center">
                    <div className="text-3xl font-bold">{averageRating}</div>
                    <div className="flex justify-center">
                      <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
                    </div>
                  </div>
                </div>
                
                <div className="ml-4 space-y-2">
                  {[5, 4, 3, 2, 1].map((rating) => (
                    <div key={rating} className="flex items-center">
                      <div className="w-20 text-xs text-gray-600">{rating} sterren</div>
                      <div className="w-32 h-2 mx-2 bg-gray-200 rounded-full">
                        <div 
                          className="h-2 bg-yellow-400 rounded-full" 
                          style={{ width: `${(starCounts[rating - 1] / reviews.length) * 100}%` }} 
                        />
                      </div>
                      <div className="text-xs text-gray-600">{starCounts[rating - 1]}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <ReviewCard
                key={review.id}
                name={review.name}
                stars={review.stars}
                text={review.text}
                date={review.date}
                color={colors[index % colors.length]}
              />
            ))}
          </div>
          
          <div className="bg-party-pink/10 p-6 md:p-8 rounded-lg mt-16 text-center">
            <MessageCircle className="h-12 w-12 mx-auto text-party-pink mb-4" />
            <h3 className="text-2xl font-display mb-4">
              Heb jij ervaring met onze feestpakketten?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We horen graag wat je ervan vond! Stuur ons een berichtje via het contactformulier of via WhatsApp.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Ervaringen;
