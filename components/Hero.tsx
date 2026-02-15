import { Button } from "@/components/ui/button";
import Link from "next/link"

const Hero = () => {
  return (
    <div 
      className="relative min-h-[600px] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: 'url("/cover.jpg")' }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-jha-blue/90 to-blue-800/90"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Accelerate Your Career Growths
            </h1>
            <p className="mt-6 text-xl md:text-2xl">
              Expert guidance for resume building, cloud certifications, and career advancement.
              Join the thousands of professionals who have transformed their careers with JhaConsultancy.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <Button className="bg-jha-orange hover:bg-orange-600 text-white px-8 py-6 text-lg transform hover:translate-y-[-4px] transition-all duration-200 hover:shadow-lg w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button variant="outline" className="border-white text-jha-blue hover:bg-white hover:text-jha-blue px-8 py-6 text-lg transform hover:translate-y-[-4px] transition-all duration-200 hover:shadow-lg w-full sm:w-auto">
                  Get a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
