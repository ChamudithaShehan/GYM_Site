import { Link, useNavigate } from "react-router-dom";
import { Dumbbell, ArrowLeft, RefreshCw, CreditCard, Check, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { useEffect } from "react";

const Renewal = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated || !user) {
      navigate("/auth");
      return;
    }
    if (!user.membershipPlan) {
      navigate("/#membership");
      return;
    }
  }, [isAuthenticated, user, navigate]);

  if (!user || !user.membershipPlan) {
    return null;
  }

  // Map plan names to plan IDs
  const planNameToId: Record<string, string> = {
    "Starter": "starter",
    "Basic": "basic",
    "Premium": "premium",
    "Pro": "pro",
    "Elite": "elite",
    "Ultimate": "ultimate",
  };

  const planId = planNameToId[user.membershipPlan] || "premium";

  // Plan details mapping
  const planDetails: Record<string, { price: string; features: string[] }> = {
    starter: {
      price: "$19",
      features: [
        "Limited gym access",
        "Basic equipment only",
        "No classes included",
        "Mobile app access"
      ]
    },
    basic: {
      price: "$29",
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Basic fitness assessment",
        "Mobile app access"
      ]
    },
    premium: {
      price: "$59",
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "Personal trainer consultation",
        "Nutrition guidance",
        "Guest passes (2/month)"
      ]
    },
    pro: {
      price: "$79",
      features: [
        "Everything in Premium",
        "Advanced training programs",
        "Priority class booking",
        "Nutrition meal plans",
        "Monthly body composition analysis"
      ]
    },
    elite: {
      price: "$99",
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom workout plans",
        "Recovery services",
        "VIP locker room access"
      ]
    },
    ultimate: {
      price: "$149",
      features: [
        "Everything in Elite",
        "24/7 gym access",
        "Dedicated personal trainer",
        "Spa & recovery access",
        "Complimentary supplements",
        "Exclusive events access"
      ]
    }
  };

  const currentPlan = planDetails[planId] || planDetails.premium;
  const isExpired = user.membershipExpiry 
    ? new Date(user.membershipExpiry) < new Date()
    : true;

  const formatDate = (dateString?: string) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleRenewSame = () => {
    navigate(`/payment?plan=${planId}`);
  };

  const handleChangePackage = () => {
    navigate("/#membership");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black py-20 px-4">
      {/* Background Image */}
      <div className="fixed inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-5"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14 sm:h-16">
            <Link to="/" className="flex items-center space-x-2">
              <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
              <span className="text-lg sm:text-xl font-bold text-white">POWERFIT</span>
            </Link>
            <Link 
              to="/profile" 
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Back to Profile</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {isExpired ? "Renew Your Membership" : "Renew or Change Package"}
          </h1>
          <p className="text-base sm:text-lg text-gray-400 max-w-2xl mx-auto px-4">
            {isExpired 
              ? "Your membership has expired. Would you like to renew your current plan or choose a different one?"
              : "Would you like to renew your current plan or change to a different package?"
            }
          </p>
        </div>

        {/* Current Package Card */}
        <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl mb-6">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-orange-500" />
                  Your Current Package
                </CardTitle>
                <CardDescription className="text-gray-400 mt-2">
                  {isExpired ? "Expired membership details" : "Active membership details"}
                </CardDescription>
              </div>
              {isExpired && (
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">
                  Expired
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex justify-between items-start pb-4 border-b border-gray-700">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{user.membershipPlan} Plan</h3>
                  <p className="text-gray-400 text-sm">Monthly subscription</p>
                  {user.membershipExpiry && (
                    <p className="text-gray-500 text-sm mt-1">
                      {isExpired ? "Expired on" : "Expires on"}: {formatDate(user.membershipExpiry)}
                    </p>
                  )}
                </div>
                <div className="text-right">
                  <p className="text-orange-500 font-bold text-3xl">{currentPlan.price}</p>
                  <p className="text-gray-400 text-sm">/month</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-3">Plan Features:</h4>
                <ul className="space-y-2">
                  {currentPlan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <Check className="h-5 w-5 text-orange-500 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="bg-orange-500/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <RefreshCw className="h-8 w-8 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Yes, Renew This Package</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Continue with your current {user.membershipPlan} plan at {currentPlan.price}/month. 
                    You'll be redirected to the payment page.
                  </p>
                </div>
                <Button
                  onClick={handleRenewSame}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold"
                >
                  Renew {user.membershipPlan} Plan
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl">
            <CardContent className="pt-6">
              <div className="text-center space-y-4">
                <div className="bg-blue-500/20 p-4 rounded-full w-16 h-16 mx-auto flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-blue-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">No, Change Package</h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Browse all available membership plans and select a different package. 
                    You'll be redirected to the membership plans page.
                  </p>
                </div>
                <Button
                  onClick={handleChangePackage}
                  variant="outline"
                  className="w-full border-gray-700 text-gray-300 hover:bg-gray-700 hover:text-white py-6 text-lg font-semibold"
                >
                  View All Plans
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Info Alert */}
        {isExpired && (
          <Card className="bg-orange-500/10 border-orange-500/30 shadow-2xl mt-6">
            <CardContent className="pt-6">
              <div className="flex items-start">
                <AlertCircle className="h-5 w-5 text-orange-500 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-orange-400 font-semibold mb-1">Membership Expired</p>
                  <p className="text-gray-400 text-sm">
                    Your {user.membershipPlan} membership expired on {formatDate(user.membershipExpiry)}. 
                    Renew now to continue enjoying all the benefits, or upgrade to unlock even more features.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default Renewal;

