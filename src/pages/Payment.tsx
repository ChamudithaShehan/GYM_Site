import { useState, useEffect } from "react";
import { Link, useSearchParams, useNavigate } from "react-router-dom";
import { Dumbbell, CreditCard, Lock, ArrowLeft, CheckCircle, User, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";

const Payment = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, isAuthenticated, updateUser } = useAuth();
  const planId = searchParams.get("plan");
  const [isProcessing, setIsProcessing] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [billingAddress, setBillingAddress] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");

  const plans: Record<string, { name: string; price: string; period: string }> = {
    starter: { name: "Starter", price: "$19", period: "/month" },
    basic: { name: "Basic", price: "$29", period: "/month" },
    premium: { name: "Premium", price: "$59", period: "/month" },
    pro: { name: "Pro", price: "$79", period: "/month" },
    elite: { name: "Elite", price: "$99", period: "/month" },
    ultimate: { name: "Ultimate", price: "$149", period: "/month" },
  };

  const selectedPlan = planId ? plans[planId] : null;

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/auth");
      return;
    }
    if (!planId || !selectedPlan) {
      navigate("/#membership");
      return;
    }
    // Pre-fill user details
    if (user) {
      setCardName(user.name);
      setBillingAddress(user.address);
      setCity(user.city);
      setZipCode(user.zipCode);
    }
  }, [planId, selectedPlan, navigate, isAuthenticated, user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setIsSuccess(true);
      // Update user membership
      if (planId && selectedPlan) {
        const expiryDate = new Date();
        expiryDate.setMonth(expiryDate.getMonth() + 1); // 1 month from now
        updateUser({
          membershipPlan: selectedPlan.name,
          membershipExpiry: expiryDate.toISOString(),
        });
      }
    }, 2000);
  };

  if (isSuccess) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
        
        <Card className="relative z-10 w-full max-w-md bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl">
          <CardContent className="pt-6 pb-6 px-6 text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-green-500/20 p-4 rounded-full">
                <CheckCircle className="h-12 w-12 text-green-500" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
            <p className="text-gray-400 mb-6">
              Your {selectedPlan?.name} membership has been activated. Welcome to POWERFIT!
            </p>
            <div className="space-y-3">
              <Button
                onClick={() => navigate("/profile")}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Go to Profile
              </Button>
              <Button
                onClick={() => navigate("/")}
                variant="outline"
                className="w-full border-gray-700 text-gray-300 hover:bg-gray-700"
              >
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  if (!selectedPlan) {
    return null;
  }

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
              to="/#membership" 
              className="text-gray-300 hover:text-orange-500 transition-colors duration-200 text-sm sm:text-base flex items-center"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              <span className="hidden sm:inline">Back to Plans</span>
              <span className="sm:hidden">Back</span>
            </Link>
          </div>
        </div>
      </nav>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* User Information Card */}
        {user && (
          <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl mb-6">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-white flex items-center">
                <User className="h-5 w-5 mr-2 text-orange-500" />
                Your Information
              </CardTitle>
              <CardDescription className="text-gray-400">
                Please verify your details before proceeding
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <User className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Full Name</p>
                    <p className="text-white font-semibold">{user.name}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <Mail className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-semibold">{user.email}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-orange-500/20 p-2 rounded-lg">
                    <Phone className="h-5 w-5 text-orange-500" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-semibold">{user.phone}</p>
                  </div>
                </div>
                {user.membershipPlan && (
                  <div className="flex items-center space-x-3">
                    <div className="bg-orange-500/20 p-2 rounded-lg">
                      <CreditCard className="h-5 w-5 text-orange-500" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Current Plan</p>
                      <p className="text-white font-semibold">{user.membershipPlan}</p>
                      {user.membershipExpiry && (
                        <p className="text-gray-400 text-xs mt-1">
                          Expires: {new Date(user.membershipExpiry).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-white">Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center pb-4 border-b border-gray-700">
                  <div>
                    <p className="text-white font-semibold">{selectedPlan.name} Plan</p>
                    <p className="text-gray-400 text-sm">Monthly subscription</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold text-lg">{selectedPlan.price}</p>
                    <p className="text-gray-400 text-sm">{selectedPlan.period}</p>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Subtotal</span>
                    <span className="text-white">{selectedPlan.price}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Tax</span>
                    <span className="text-white">$0.00</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-gray-700">
                    <span className="text-white font-semibold">Total</span>
                    <span className="text-orange-500 font-bold text-xl">{selectedPlan.price}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-white flex items-center">
                  <CreditCard className="h-6 w-6 mr-2 text-orange-500" />
                  Payment Information
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Complete your membership purchase securely
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="cardName" className="text-gray-300">
                      Cardholder Name
                    </Label>
                    <Input
                      id="cardName"
                      type="text"
                      placeholder="John Doe"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber" className="text-gray-300">
                      Card Number
                    </Label>
                    <div className="relative">
                      <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="cardNumber"
                        type="text"
                        placeholder="1234 5678 9012 3456"
                        maxLength={19}
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry" className="text-gray-300">
                        Expiry Date
                      </Label>
                      <Input
                        id="expiry"
                        type="text"
                        placeholder="MM/YY"
                        maxLength={5}
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv" className="text-gray-300">
                        CVV
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                        <Input
                          id="cvv"
                          type="text"
                          placeholder="123"
                          maxLength={4}
                          value={cvv}
                          onChange={(e) => setCvv(e.target.value)}
                          className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="billingAddress" className="text-gray-300">
                      Billing Address
                    </Label>
                    <Input
                      id="billingAddress"
                      type="text"
                      placeholder="123 Main Street"
                      value={billingAddress}
                      onChange={(e) => setBillingAddress(e.target.value)}
                      className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-gray-300">
                        City
                      </Label>
                      <Input
                        id="city"
                        type="text"
                        placeholder="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode" className="text-gray-300">
                        ZIP Code
                      </Label>
                      <Input
                        id="zipCode"
                        type="text"
                        placeholder="12345"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        className="bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-2">
                    <input
                      type="checkbox"
                      id="terms"
                      className="w-4 h-4 rounded border-gray-700 bg-gray-900/50 text-orange-500 focus:ring-orange-500"
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-400 cursor-pointer">
                      I agree to the{" "}
                      <Link to="#" className="text-orange-500 hover:text-orange-400">
                        Terms & Conditions
                      </Link>
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isProcessing}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isProcessing ? "Processing..." : `Pay ${selectedPlan.price}`}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

