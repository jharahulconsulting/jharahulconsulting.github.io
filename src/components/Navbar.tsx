
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-jha-blue">Jha</span>
              <span className="text-2xl font-bold text-jha-orange">Consultancy</span>
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-jha-darkgray hover:text-jha-blue font-medium">
              Home
            </Link>
            <Link to="/services" className="text-jha-darkgray hover:text-jha-blue font-medium">
              Services
            </Link>
            <Link to="/about" className="text-jha-darkgray hover:text-jha-blue font-medium">
              About Us
            </Link>
            <Link to="/testimonials" className="text-jha-darkgray hover:text-jha-blue font-medium">
              Testimonials
            </Link>
            <Link to="/contact">
              <Button className="bg-jha-orange hover:bg-orange-600 text-white">
                Book a Free Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-jha-darkgray hover:text-jha-blue"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-md">
            <Link 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-jha-darkgray hover:text-jha-blue"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className="block px-3 py-2 rounded-md text-base font-medium text-jha-darkgray hover:text-jha-blue"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className="block px-3 py-2 rounded-md text-base font-medium text-jha-darkgray hover:text-jha-blue"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              to="/testimonials" 
              className="block px-3 py-2 rounded-md text-base font-medium text-jha-darkgray hover:text-jha-blue"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link 
              to="/contact" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-jha-orange text-white hover:bg-orange-600 text-center"
              onClick={toggleMenu}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
