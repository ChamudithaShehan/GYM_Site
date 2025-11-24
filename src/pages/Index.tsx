
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Membership from "@/components/Membership";
import Trainers from "@/components/Trainers";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navigation />
      <Hero />
      <Services />
      <Membership />
      <Trainers />
      <Contact />
    </div>
  );
};

export default Index;
