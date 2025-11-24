
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

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
    }
  ];

  return (
    <section id="membership" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">MEMBERSHIP PLANS</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan to start your fitness journey today
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div key={index} className={`relative rounded-lg p-8 ${plan.popular ? 'bg-gradient-to-b from-orange-500 to-orange-600 transform scale-105' : 'bg-gray-800'} hover:scale-105 transition-all duration-300`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className={`text-2xl font-bold ${plan.popular ? 'text-white' : 'text-white'} mb-2`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center">
                  <span className={`text-5xl font-bold ${plan.popular ? 'text-white' : 'text-orange-500'}`}>
                    {plan.price}
                  </span>
                  <span className={`text-xl ${plan.popular ? 'text-white' : 'text-gray-400'} ml-1`}>
                    {plan.period}
                  </span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`h-5 w-5 ${plan.popular ? 'text-white' : 'text-orange-500'} mr-3`} />
                    <span className={`${plan.popular ? 'text-white' : 'text-gray-300'}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              <Button 
                className={`w-full py-3 text-lg font-semibold transition-all duration-200 ${
                  plan.popular 
                    ? 'bg-white text-orange-500 hover:bg-gray-100' 
                    : 'bg-orange-500 hover:bg-orange-600 text-white'
                }`}
              >
                GET STARTED
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Membership;
