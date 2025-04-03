
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

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
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-jha-blue mb-4">Success Stories</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            See how JhaConsultancy has helped professionals transform their careers and achieve their goals.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
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
        
        <div className="text-center mt-12">
          <a href="/testimonials" className="text-jha-orange hover:text-orange-700 font-medium">
            View More Success Stories →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
