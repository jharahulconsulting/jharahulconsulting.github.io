
import { Button } from "@/components/ui/button";
import Link from "next/link"

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-jha-orange to-orange-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Join thousands of professionals who have transformed their careers with our expert guidance.
          Schedule a free consultation today and take the first step toward your professional goals.
        </p>
        <Link href="/contact">
          <Button className="bg-white text-jha-orange hover:bg-gray-100 px-8 py-6 text-lg font-medium">
            Book a Free Consultation
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
