
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import CallToAction from "@/components/CallToAction";

const testimonials = [
  {
    id: 1,
    name: "Michael Roberts",
    position: "Cloud Solutions Architect at Amazon",
    content: "Working with JhaConsultancy transformed my career path. Their AWS certification program was comprehensive and the personalized coaching helped me land a role at Amazon. Highly recommended!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    position: "Senior Project Manager",
    content: "The resume writing service from JhaConsultancy helped me showcase my skills in a way I couldn't do myself. Within three weeks of using my new resume, I received multiple interview offers.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "David Chen",
    position: "Azure Cloud Engineer",
    content: "After struggling with self-study for months, JhaConsultancy's structured Azure certification program was exactly what I needed. The mentorship and practice exams were invaluable.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 4,
    name: "Jennifer Williams",
    position: "DevOps Engineer",
    content: "I was hesitant about investing in career coaching, but it was worth every penny. The personalized guidance and industry insights helped me navigate a complex career transition with confidence.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 5,
    name: "Robert Taylor",
    position: "Data Scientist",
    content: "The career strategy session helped me identify the skills I needed to develop to advance in my field. Six months later, I've secured a promotion and a significant salary increase.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    id: 6,
    name: "Priya Sharma",
    position: "Technical Program Manager",
    content: "JhaConsultancy's interview coaching completely transformed how I present myself. The mock interviews and feedback were incredibly helpful, and I'm now confident in tackling even the toughest interview questions.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

const TestimonialsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-jha-blue text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Success Stories</h1>
              <p className="text-xl">
                See how JhaConsultancy has helped professionals transform their careers.
              </p>
            </div>
          </div>
        </section>
        
        {/* Testimonials Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="border border-gray-200 hover:shadow-md transition-shadow duration-300">
                  <CardContent className="pt-6">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} fill="#f97316" color="#f97316" size={18} />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic">{testimonial.content}</p>
                    <div className="flex items-center">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-12 h-12 rounded-full mr-4 object-cover"
                      />
                      <div>
                        <h4 className="font-semibold text-jha-blue">{testimonial.name}</h4>
                        <p className="text-sm text-gray-500">{testimonial.position}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Video Testimonials Section (Placeholder) */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-jha-blue">Video Testimonials</h2>
              <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                Hear directly from our clients about their experiences and successes.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Video Testimonial 1</p>
              </div>
              <div className="bg-gray-300 aspect-video rounded-lg flex items-center justify-center">
                <p className="text-gray-600">Video Testimonial 2</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <CallToAction />
      </main>
      
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
