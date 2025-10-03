import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Models from "@/components/Models";
import Dealers from "@/components/Dealers";
import Advantages from "@/components/Advantages";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Models />
      <Dealers />
      <Advantages />
      <Testimonials />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
