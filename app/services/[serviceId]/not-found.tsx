import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-jha-blue mb-4">Service Not Found</h1>
        <p className="text-gray-600 mb-8">The service you're looking for doesn't exist.</p>
        <Link href="/services">
          <Button>Return to Services</Button>
        </Link>
      </div>
    </div>
  );
}