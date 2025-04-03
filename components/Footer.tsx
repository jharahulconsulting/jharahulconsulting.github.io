
import Link from "next/link"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <span className="text-2xl font-bold text-white">Jha</span>
              <span className="text-2xl font-bold text-jha-orange">Consultancy</span>
            </div>
            <p className="mb-4">
              Empowering professionals to reach their career goals through expert guidance and personalized solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-white">Home</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">Services</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white">About Us</Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-white">Testimonials</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">Contact</Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/resume-writing" className="hover:text-white">Resume Writing</Link>
              </li>
              <li>
                <Link href="/services/cloud-certifications" className="hover:text-white">Cloud Certifications</Link>
              </li>
              <li>
                <Link href="/services/career-consulting" className="hover:text-white">Career Consulting</Link>
              </li>
              <li>
                <Link href="/services/professional-development" className="hover:text-white">Professional Development</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 mt-1 text-jha-orange" />
                <span>Place<br />India</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="mr-2 text-jha-orange" />
                <span>(+91)xxxxxxxx</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-jha-orange" />
                <span>info@jhaconsultancy.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>&copy; {currentYear} JhaConsultancy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
