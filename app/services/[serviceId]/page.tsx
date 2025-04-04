"use client";

import { useParams } from "next/navigation";
import { services } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return Object.keys(services).map((serviceId) => ({
    serviceId,
  }));
}

export default function ServicePage() {
  const { serviceId } = useParams();
  const service = services[serviceId as keyof typeof services];

  if (!service) {
    notFound();
  }

  const ServiceIcon = service.icon;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-jha-blue to-blue-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link 
              href="/services" 
              className="inline-flex items-center text-white hover:text-gray-200 mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Services
            </Link>
            
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center">
                <ServiceIcon className="w-8 h-8" />
              </div>
              <div>
                <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
                <p className="text-xl text-gray-200">{service.description}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="md:col-span-2 space-y-8">
                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-jha-blue mb-6">Overview</h2>
                    <div className="prose max-w-none">
                      {service.longDescription.split('\n').map((paragraph, index) => (
                        <p key={index} className="mb-4">{paragraph}</p>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold text-jha-blue mb-6">Key Benefits</h2>
                    <ul className="space-y-4">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-3 mt-1" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div>
                <Card className="sticky top-8">
                  <CardContent className="p-8">
                    <div className="text-3xl font-bold text-jha-orange mb-4">
                      {service.price}
                    </div>
                    <div className="mb-6">
                      <div className="text-sm text-gray-600">Duration</div>
                      <div className="font-medium">{service.duration}</div>
                    </div>
                    <Button className="w-full bg-jha-orange hover:bg-orange-600">
                      Enroll Now
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}