import { useState } from "react";
import { Link } from "react-router-dom";
import { Dumbbell, Mail, Lock, User, Phone, Eye, EyeOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Auth = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center opacity-10"></div>
      
      {/* Logo/Home Link */}
      <Link 
        to="/" 
        className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center space-x-2 text-white hover:text-orange-500 transition-colors duration-200 z-10"
      >
        <Dumbbell className="h-6 w-6 sm:h-8 sm:w-8 text-orange-500" />
        <span className="text-lg sm:text-xl font-bold">POWERFIT</span>
      </Link>

      <div className="relative z-10 w-full max-w-md mx-auto px-2 sm:px-4">
        <Card className="bg-gray-800/95 backdrop-blur-sm border-gray-700 shadow-2xl">
          <CardHeader className="text-center space-y-2 pb-4 sm:pb-6 px-4 sm:px-6">
            <div className="flex justify-center mb-3 sm:mb-4">
              <div className="bg-orange-500/20 p-3 sm:p-4 rounded-full">
                <Dumbbell className="h-8 w-8 sm:h-12 sm:w-12 text-orange-500" />
              </div>
            </div>
            <CardTitle className="text-2xl sm:text-3xl font-bold text-white">Welcome to POWERFIT</CardTitle>
            <CardDescription className="text-gray-400 text-sm sm:text-base">
              Your fitness journey starts here
            </CardDescription>
          </CardHeader>

          <CardContent className="px-4 sm:px-6">
            <Tabs defaultValue="signin" className="w-full">
              <TabsList className="grid w-full grid-cols-2 bg-gray-900/50 mb-4 sm:mb-6">
                <TabsTrigger 
                  value="signin" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Sign In
                </TabsTrigger>
                <TabsTrigger 
                  value="signup" 
                  className="data-[state=active]:bg-orange-500 data-[state=active]:text-white text-gray-400"
                >
                  Sign Up
                </TabsTrigger>
              </TabsList>

              {/* Sign In Tab */}
              <TabsContent value="signin" className="space-y-4">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="signin-email" className="text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="signin-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signin-password" className="text-gray-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="signin-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="remember"
                        className="w-4 h-4 rounded border-gray-700 bg-gray-900/50 text-orange-500 focus:ring-orange-500"
                      />
                      <Label htmlFor="remember" className="text-sm text-gray-400 cursor-pointer">
                        Remember me
                      </Label>
                    </div>
                    <Link
                      to="#"
                      className="text-sm text-orange-500 hover:text-orange-400 transition-colors"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              {/* Sign Up Tab */}
              <TabsContent value="signup" className="space-y-4">
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="signup-name" className="text-gray-300">
                      Full Name
                    </Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="signup-name"
                        type="text"
                        placeholder="Enter your full name"
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-email" className="text-gray-300">
                      Email
                    </Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="signup-email"
                        type="email"
                        placeholder="Enter your email"
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-phone" className="text-gray-300">
                      Phone Number
                    </Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="signup-phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        className="pl-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-password" className="text-gray-300">
                      Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="signup-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Create a password"
                        className="pl-10 pr-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="signup-confirm-password" className="text-gray-300">
                      Confirm Password
                    </Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <Input
                        id="signup-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Confirm your password"
                        className="pl-10 pr-10 bg-gray-900/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-orange-500"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
                      >
                        {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
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
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg font-semibold transition-all duration-200 hover:scale-105"
                  >
                    Create Account
                  </Button>
                </form>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Auth;

