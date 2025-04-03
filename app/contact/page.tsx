"use client";
import { useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, Loader2 } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: ""
        });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-jha-blue to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Get in Touch</h1>
              <p className="text-xl text-gray-200">
                Ready to take the next step? We're here to help you achieve your career goals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="py-16 -mt-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="relative">
                <Card className="shadow-xl">
                  <CardContent className="p-8">
                    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-jha-blue focus:border-transparent transition-all duration-200"
                            required
                          />
                        </div>
                        
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email Address
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-jha-blue focus:border-transparent transition-all duration-200"
                            required
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-jha-blue focus:border-transparent transition-all duration-200"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Service of Interest
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-jha-blue focus:border-transparent transition-all duration-200"
                          required
                        >
                          <option value="">Select a service</option>
                          <option value="resume-writing">Resume Writing</option>
                          <option value="cloud-certifications">Cloud Certifications</option>
                          <option value="career-consulting">Career Consulting</option>
                          <option value="professional-development">Professional Development</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Your Message
                        </label>
                        <textarea
                          name="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-jha-blue focus:border-transparent transition-all duration-200"
                          required
                        ></textarea>
                      </div>
                      
                      <div>
                        <Button 
                          type="submit" 
                          className="w-full bg-jha-orange hover:bg-orange-600 text-white py-6 text-lg font-medium rounded-lg transition-all duration-200 hover:shadow-lg disabled:opacity-50"
                          disabled={isLoading}
                        >
                          {isLoading ? (
                            <>
                              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-6">
                <Card className="transform hover:scale-105 transition-transform duration-200">
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-jha-blue to-blue-600 rounded-xl flex items-center justify-center text-white mr-4 shadow-lg">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-jha-blue text-lg">Office Location</h3>
                      <p className="text-gray-600 mt-2">
                        123 Business Avenue, Suite 200<br />
                        New York, NY 10001
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transform hover:scale-105 transition-transform duration-200">
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-jha-blue to-blue-600 rounded-xl flex items-center justify-center text-white mr-4 shadow-lg">
                      <Mail size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-jha-blue text-lg">Email Us</h3>
                      <p className="text-gray-600 mt-2">
                        General Inquiries: info@jhaconsultancy.com<br />
                        Support: support@jhaconsultancy.com<br />
                        Careers: careers@jhaconsultancy.com
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transform hover:scale-105 transition-transform duration-200">
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-jha-blue to-blue-600 rounded-xl flex items-center justify-center text-white mr-4 shadow-lg">
                      <Phone size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-jha-blue text-lg">Call Us</h3>
                      <p className="text-gray-600 mt-2">
                        Main: (555) 123-4567<br />
                        Toll-Free: 1-800-555-8888<br />
                        Fax: (555) 123-4568
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="transform hover:scale-105 transition-transform duration-200">
                  <CardContent className="p-6 flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-jha-blue to-blue-600 rounded-xl flex items-center justify-center text-white mr-4 shadow-lg">
                      <Clock size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-jha-blue text-lg">Business Hours</h3>
                      <p className="text-gray-600 mt-2">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=YOUR_GOOGLE_MAPS_EMBED_URL"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="shadow-xl"
            />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
