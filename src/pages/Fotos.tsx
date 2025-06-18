
import Layout from "@/components/Layout";
import Gallery from "@/components/Gallery";
import { galleryImages } from "@/data/gallery";

const Fotos = () => {
  return (
    <Layout>
      <section className="pt-16 pb-8 bg-gradient-to-r from-party-pink/20 via-party-blue/20 to-party-yellow/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display mb-4">Onze <span className="text-party-pink">Sfeerimpressie</span></h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bekijk foto's van onze feestpakketten en blije kindergezichten!
          </p>
        </div>
      </section>
      
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Gallery images={galleryImages} />
        </div>
      </section>
    </Layout>
  );
};

export default Fotos;
