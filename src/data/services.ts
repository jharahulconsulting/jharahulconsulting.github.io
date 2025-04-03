import { Cloud, FileText, Users, BarChart, Award, Presentation, PenTool } from "lucide-react";

export const servicesByCategory = {
  cloud: [
    {
      id: "aws-certification",
      title: "AWS Certification Program",
      description: "Comprehensive training for various AWS certification paths with mentorship",
      icon: Cloud,
      price: "From $499",
      duration: "3-6 months",
      features: [
        "One-on-one mentorship",
        "Practice exams included",
        "Hands-on labs",
        "Study materials",
        "Exam voucher included"
      ],
      details: [
        {
          title: "Program Overview",
          content: "Our AWS certification program is designed to help you achieve your cloud certification goals through structured learning and hands-on practice."
        },
        {
          title: "What You'll Learn",
          content: "Master core AWS services, architecture best practices, security, and compliance requirements."
        }
      ]
    },
    // Add similar detailed structure for other services
  ],
  // ... other categories
};