
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3 sm:mb-4">GET IN TOUCH</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Ready to start your fitness journey? Contact us today for a free consultation
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Contact Information</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start sm:items-center">
                <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Address</p>
                  <p className="text-gray-400 text-sm sm:text-base">123 Fitness Street, Gym City, GC 12345</p>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center">
                <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Phone</p>
                  <p className="text-gray-400 text-sm sm:text-base">(555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center">
                <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Email</p>
                  <p className="text-gray-400 text-sm sm:text-base">info@powerfit.com</p>
                </div>
              </div>
              
              <div className="flex items-start sm:items-center">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-orange-500 mr-3 sm:mr-4 flex-shrink-0 mt-1 sm:mt-0" />
                <div>
                  <p className="text-white font-semibold text-sm sm:text-base">Hours</p>
                  <p className="text-gray-400 text-sm sm:text-base">Mon-Fri: 5AM-11PM</p>
                  <p className="text-gray-400 text-sm sm:text-base">Sat-Sun: 6AM-10PM</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">Send us a message</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input 
                  placeholder="First Name" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
                <Input 
                  placeholder="Last Name" 
                  className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
                />
              </div>
              
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              
              <Input 
                type="tel" 
                placeholder="Phone Number" 
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              
              <Textarea 
                placeholder="Your Message" 
                rows={4}
                className="bg-gray-800 border-gray-700 text-white placeholder-gray-400"
              />
              
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-base sm:text-lg font-semibold">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-12 sm:mt-16 text-center">
          <div className="border-t border-gray-700 pt-6 sm:pt-8">
            <p className="text-gray-400 text-sm sm:text-base">
              © 2024 PowerFit Gym. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
