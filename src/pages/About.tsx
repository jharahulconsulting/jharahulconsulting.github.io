
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-jha-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">About JhaConsultancy</h1>
              <p className="text-xl">
                We're a team of career and certification experts dedicated to helping professionals achieve their career goals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Our Story Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-jha-blue mb-6">Our Story</h2>
                <p className="text-gray-700 mb-4">
                  Founded in 2015, JhaConsultancy began with a simple mission: to bridge the gap between education and employment in the technology sector. Our founder, with over 15 years of experience in tech recruitment and training, identified a critical need for specialized guidance in resume writing, interview preparation, and technical certification.
                </p>
                <p className="text-gray-700 mb-4">
                  What started as a small consultancy has grown into a comprehensive career advancement platform that has helped thousands of professionals transform their careers, secure certifications, and land their dream jobs.
                </p>
                <p className="text-gray-700">
                  Today, we continue to evolve our methodologies and expand our services to meet the ever-changing demands of the global job market, while staying true to our core mission of empowering professionals to achieve their full potential.
                </p>
              </div>
              <div className="bg-gray-200 h-96 rounded-lg"></div>
            </div>
          </div>
        </section>
        
        {/* Our Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-jha-blue">Our Values</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                At JhaConsultancy, our core values guide every interaction, program, and service we offer.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="border-t-4 border-jha-blue">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-jha-blue rounded-full flex items-center justify-center text-white mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-jha-blue mb-2">Client-Centered</h3>
                  <p className="text-gray-600">
                    We put our clients' success at the center of everything we do, providing personalized solutions tailored to individual career goals.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-jha-blue">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-jha-blue rounded-full flex items-center justify-center text-white mb-4">
                    <Award size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-jha-blue mb-2">Excellence</h3>
                  <p className="text-gray-600">
                    We strive for excellence in all our services, constantly improving our methodologies to deliver outstanding results.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-jha-blue">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-jha-blue rounded-full flex items-center justify-center text-white mb-4">
                    <BookOpen size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-jha-blue mb-2">Continuous Learning</h3>
                  <p className="text-gray-600">
                    We embrace a culture of continuous learning, staying updated with industry trends to provide relevant guidance.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="border-t-4 border-jha-blue">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-jha-blue rounded-full flex items-center justify-center text-white mb-4">
                    <Target size={24} />
                  </div>
                  <h3 className="text-xl font-semibold text-jha-blue mb-2">Result-Driven</h3>
                  <p className="text-gray-600">
                    We focus on tangible outcomes, measuring our success by the achievements and career advancements of our clients.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
