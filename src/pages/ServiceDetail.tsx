import { useParams } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { servicesByCategory } from '@/data/services'; // We'll create this in step 2
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = Object.values(servicesByCategory)
    .flat()
    .find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800">Service not found</h1>
            <Link to="/services" className="text-jha-blue hover:underline mt-4 inline-block">
              Back to Services
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-jha-blue to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              to="/services" 
              className="inline-flex items-center text-white hover:text-gray-200 mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Services
            </Link>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <service.icon size={32} className="text-jha-blue" />
              </div>
              <div>
                <h1 className="text-4xl font-bold">{service.title}</h1>
                <p className="text-xl mt-2 text-gray-200">{service.price}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">Overview</h2>
                  <p className="text-gray-600">{service.description}</p>
                  
                  {/* Add more content based on service type */}
                  {service.details?.map((detail, index) => (
                    <div key={index} className="mt-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-3">
                        {detail.title}
                      </h3>
                      <p className="text-gray-600">{detail.content}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div className="md:col-span-1">
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h3 className="text-xl font-bold text-gray-800 mb-4">Service Details</h3>
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <Clock className="mr-2 h-5 w-5" />
                      <span>Duration: {service.duration || 'Flexible'}</span>
                    </div>
                    {service.features?.map((feature, index) => (
                      <div key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="mr-2 h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6 bg-jha-orange hover:bg-orange-600 text-white">
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServiceDetail;