
import { Dumbbell } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Personal Training",
      description: "One-on-one coaching tailored to your specific goals and fitness level.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Group Classes",
      description: "High-energy group workouts including CrossFit, HIIT, and strength training.",
      image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    },
    {
      title: "Premium Equipment",
      description: "State-of-the-art fitness equipment and free weights for all experience levels.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">OUR SERVICES</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to achieve your fitness goals under one roof
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg bg-gray-900 hover:scale-105 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-12">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center mb-2">
                  <Dumbbell className="h-6 w-6 text-orange-500 mr-2" />
                  <h3 className="text-xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
