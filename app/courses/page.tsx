import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { FileText, Cloud, Award, BarChart, Users, Briefcase, Presentation, PenTool, Search } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const categories = {
  all: "All Services",
  cloud: "Cloud Certifications",
  career: "Career Development",
  documents: "Professional Documents",
  skills: "Professional Skills"
};

const servicesByCategory = {
  cloud: [
    {
      id: "aws-certification",
      title: "AWS Certification Program",
      description: "Comprehensive training for various AWS certification paths with mentorship",
      icon: Cloud,
      price: "From $499"
    },
    {
      id: "azure-certification",
      title: "Microsoft Azure Certification",
      description: "Structured learning path for Azure certifications with practice exams",
      icon: Cloud,
      price: "From $499"
    }
  ],
  career: [
    {
      id: "interview-coaching",
      title: "Interview Coaching",
      description: "Personalized coaching to improve your interview skills with mock interviews",
      icon: Users,
      price: "From $149"
    },
    {
      id: "career-strategy",
      title: "Career Strategy Session",
      description: "Strategic planning to map out your career path and advancement opportunities",
      icon: BarChart,
      price: "From $199"
    }
  ],
  documents: [
    {
      id: "resume-writing",
      title: "Professional Resume Writing",
      description: "Custom, ATS-optimized resumes tailored to your industry and career goals",
      icon: FileText,
      price: "From $199"
    },
    {
      id: "cover-letter",
      title: "Cover Letter Creation",
      description: "Compelling cover letters that complement your resume and highlight your value",
      icon: PenTool,
      price: "From $99"
    }
  ],
  skills: [
    {
      id: "leadership-training",
      title: "Leadership Development",
      description: "Targeted training to develop effective leadership and management skills",
      icon: Award,
      price: "From $299"
    },
    {
      id: "presentation-skills",
      title: "Presentation Skills Workshop",
      description: "Learn to create and deliver impactful presentations for any audience",
      icon: Presentation,
      price: "From $199"
    }
  ]
};

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const getFilteredServices = () => {
    let services = selectedCategory === "all" 
      ? Object.values(servicesByCategory).flat()
      : servicesByCategory[selectedCategory as keyof typeof servicesByCategory] || [];

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      return services.filter(service => 
        service.title.toLowerCase().includes(query) ||
        service.description.toLowerCase().includes(query)
      );
    }

    return services;
  };

  const searchBar = (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 mb-8 relative z-10">
      <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3">
        <Search className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search services..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="flex-1 border-none focus:ring-0 focus:outline-none text-lg placeholder:text-gray-400"
        />
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-jha-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Our Services</h1>
              <p className="text-xl">
                Comprehensive career advancement solutions tailored to your professional goals.
              </p>
            </div>
          </div>
        </section>

        {searchBar}
        
        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <aside className="md:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-jha-blue mb-4">Categories</h2>
                <nav className="space-y-2">
                  {Object.entries(categories).map(([key, label]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedCategory(key)}
                      className={`w-full text-left px-4 py-2 rounded-md transition-colors duration-200 ${
                        selectedCategory === key
                          ? "bg-jha-blue text-white"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Services Grid */}
            <div className="flex-grow">
              <div className="grid md:grid-cols-2 gap-8">
                {getFilteredServices().length > 0 ? (
                  getFilteredServices().map((service) => (
                    <Link key={service.id} href={`/services/${service.id}`} className="group">
                      <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-t-4 border-jha-blue group-hover:border-jha-orange">
                        <CardHeader className="pb-2">
                          <div className="w-12 h-12 bg-jha-blue rounded-full flex items-center justify-center text-white mb-4 group-hover:bg-jha-orange transition-colors duration-300">
                            <service.icon size={24} />
                          </div>
                          <CardTitle className="text-xl text-jha-blue group-hover:text-jha-orange transition-colors duration-300">
                            {service.title}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-gray-600 text-base mb-4">
                            {service.description}
                          </CardDescription>
                          <div className="font-medium text-jha-orange">{service.price}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))
                ) : (
                  <div className="col-span-2 text-center py-12">
                    <h3 className="text-xl text-gray-600 mb-2">No services found</h3>
                    <p className="text-gray-500">
                      Try adjusting your search or selecting a different category
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
