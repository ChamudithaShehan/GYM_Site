
import { Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <Dumbbell className="h-8 w-8 text-orange-500" />
            <span className="text-xl font-bold text-white">POWERFIT</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Home</a>
              <a href="#services" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Services</a>
              <a href="#membership" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Membership</a>
              <a href="#trainers" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Trainers</a>
              <a href="#contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">Contact</a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/95">
              <a href="#home" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Home</a>
              <a href="#services" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Services</a>
              <a href="#membership" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Membership</a>
              <a href="#trainers" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Trainers</a>
              <a href="#contact" className="block px-3 py-2 text-gray-300 hover:text-orange-500">Contact</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
