import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Membership = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "/month",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access"
      ]
    },
    {
      name: "Premium",
      price: "$59",
      period: "/month",
      popular: true,
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal trainer consultation",
        "Nutrition guidance",
        "Guest passes (2/month)"
      ]
    },
    {
      name: "Elite",
      price: "$99",
      period: "/month",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom workout plans",
        "Recovery services",
        "VIP locker room access"
      ]
    },
    {
      name: "Starter",
      price: "$19",
      period: "/month",
      features: [
        "Limited gym access",
        "Basic equipment only",
        "No classes included",
        "Mobile app access"
      ]
    },
    {
      name: "Pro",
      price: "$79",
      period: "/month",
      features: [
        "Everything in Premium",
        "Advanced training programs",
        "Priority class booking",
        "Nutrition meal plans",
        "Monthly body composition analysis"
      ]
    },
    {
      name: "Ultimate",
      price: "$149",
      period: "/month",
      features: [
        "Everything in Elite",
        "24/7 gym access",
        "Dedicated personal trainer",
        "Spa & recovery access",
        "Complimentary supplements",
        "Exclusive events access"
      ]
    }
  ];

  return (
    <section id="membership" className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">MEMBERSHIP PLANS</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Choose the perfect plan to start your fitness journey today
          </p>
        </div>
        
        <div className="relative px-2 sm:px-4 md:px-12">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {plans.map((plan, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                  <div className={`relative rounded-lg p-5 sm:p-6 md:p-8 h-full ${plan.popular ? 'bg-gradient-to-b from-orange-500 to-orange-600 md:transform md:scale-105' : 'bg-gray-800'} hover:scale-105 transition-all duration-300`}>
                    {plan.popular && (
                      <div className="absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 z-10">
                        <span className="bg-yellow-400 text-black px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-bold">
                          MOST POPULAR
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className={`text-xl sm:text-2xl font-bold ${plan.popular ? 'text-white' : 'text-white'} mb-2`}>
                        {plan.name}
                      </h3>
                      <div className="flex items-baseline justify-center">
                        <span className={`text-4xl sm:text-5xl font-bold ${plan.popular ? 'text-white' : 'text-orange-500'}`}>
                          {plan.price}
                        </span>
                        <span className={`text-lg sm:text-xl ${plan.popular ? 'text-white' : 'text-gray-400'} ml-1`}>
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start sm:items-center">
                          <Check className={`h-4 w-4 sm:h-5 sm:w-5 ${plan.popular ? 'text-white' : 'text-orange-500'} mr-2 sm:mr-3 flex-shrink-0 mt-0.5 sm:mt-0`} />
                          <span className={`text-sm sm:text-base ${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className={`w-full py-2.5 sm:py-3 text-base sm:text-lg font-semibold transition-all duration-200 ${
                        plan.popular 
                          ? 'bg-white text-orange-500 hover:bg-gray-100' 
                          : 'bg-orange-500 hover:bg-orange-600 text-white'
                      }`}
                    >
                      GET STARTED
                    </Button>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 md:-left-12 top-1/2 -translate-y-1/2 bg-transparent md:bg-gray-800 border-gray-700 text-white hover:bg-gray-700/50 md:hover:bg-gray-700 hover:text-orange-500 h-8 w-8 md:h-10 md:w-10 z-10" />
            <CarouselNext className="absolute right-2 md:-right-12 top-1/2 -translate-y-1/2 bg-transparent md:bg-gray-800 border-gray-700 text-white hover:bg-gray-700/50 md:hover:bg-gray-700 hover:text-orange-500 h-8 w-8 md:h-10 md:w-10 z-10" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Membership;
