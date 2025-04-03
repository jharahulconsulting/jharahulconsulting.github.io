
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Cloud, Award, BarChart } from "lucide-react";
import Link from "next/link"

const services = [
  {
    title: "Resume Writing",
    description: "Stand out with professionally crafted resumes tailored to your industry and career goals.",
    icon: FileText,
    href: "/services/resume-writing"
  },
  {
    title: "Cloud Certifications",
    description: "Expert guidance for AWS, Azure, and GCP certifications with personalized study plans.",
    icon: Cloud,
    href: "/services/cloud-certifications"
  },
  {
    title: "Career Consulting",
    description: "Strategic career planning and guidance from industry professionals to help you advance.",
    icon: BarChart,
    href: "/services/career-consulting"
  },
  {
    title: "Professional Development",
    description: "Comprehensive skill enhancement programs to keep you competitive in today's job market.",
    icon: Award,
    href: "/services/professional-development"
  }
];

const ServiceHighlights = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-jha-blue mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer specialized services designed to accelerate your career growth and help you achieve your professional goals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Link key={index} href={service.href} className="group">
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
                  <CardDescription className="text-gray-600 text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link href="/services">
            <button className="px-8 py-3 bg-jha-orange text-white rounded-md hover:bg-orange-600 transition-colors duration-300 font-medium">
              View All Services
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServiceHighlights;
