import { Cloud, Users, BarChart, FileText, PenTool, Award, Presentation } from "lucide-react";

export const services = {
  "aws-certification": {
    id: "aws-certification",
    title: "AWS Certification Program",
    description: "Comprehensive training for various AWS certification paths with mentorship",
    icon: Cloud,
    price: "From $499",
    longDescription: `Our AWS Certification Program provides comprehensive training and support to help you achieve your cloud certification goals. The program includes:
    
    • Structured learning paths for all AWS certification levels
    • One-on-one mentoring sessions
    • Practice exams and mock scenarios
    • Hands-on labs and practical exercises
    • Study materials and documentation
    • Exam preparation strategies`,
    benefits: [
      "Expert-led training sessions",
      "Real-world project experience",
      "Flexible learning schedule",
      "Practice exam simulations",
      "Career guidance and support"
    ],
    duration: "12 weeks",
    category: "cloud"
  },
  "azure-certification": {
    id: "azure-certification",
    title: "Microsoft Azure Certification",
    description: "Structured learning path for Azure certifications with practice exams",
    icon: Cloud,
    price: "From $499",
    longDescription: `Our Microsoft Azure Certification program is designed to help you master cloud computing with Azure. The program includes:
    
    • Comprehensive Azure fundamentals and advanced concepts
    • Hands-on labs in Azure portal
    • Practice tests for all certification levels
    • Expert-led training sessions
    • Real-world project implementations
    • Certification exam vouchers`,
    benefits: [
      "Industry-recognized certification",
      "Hands-on Azure portal experience",
      "Practice test environment",
      "Personal mentoring sessions",
      "Job placement assistance"
    ],
    duration: "10 weeks",
    category: "cloud"
  },
  "interview-coaching": {
    id: "interview-coaching",
    title: "Interview Coaching",
    description: "Personalized coaching to improve your interview skills with mock interviews",
    icon: Users,
    price: "From $149",
    longDescription: `Our Interview Coaching service prepares you for success in technical and behavioral interviews. The program includes:
    
    • One-on-one coaching sessions
    • Mock interview practice
    • Behavioral question preparation
    • Technical interview strategies
    • Feedback and improvement plans
    • Interview anxiety management techniques`,
    benefits: [
      "Personalized interview strategies",
      "Real-time feedback",
      "Industry-specific preparation",
      "Confidence building",
      "Post-interview analysis"
    ],
    duration: "4 weeks",
    category: "career"
  },
  "career-strategy": {
    id: "career-strategy",
    title: "Career Strategy Session",
    description: "Strategic planning to map out your career path and advancement opportunities",
    icon: BarChart,
    price: "From $199",
    longDescription: `Our Career Strategy Session helps you develop a clear path for your professional growth. The program includes:
    
    • Career goals assessment
    • Skills gap analysis
    • Industry trends review
    • Professional development planning
    • Networking strategies
    • Action plan development`,
    benefits: [
      "Customized career roadmap",
      "Market opportunity analysis",
      "Skill development plan",
      "Networking strategies",
      "Long-term career vision"
    ],
    duration: "2 weeks",
    category: "career"
  },
  "resume-writing": {
    id: "resume-writing",
    title: "Professional Resume Writing",
    description: "Custom, ATS-optimized resumes tailored to your industry and career goals",
    icon: FileText,
    price: "From $199",
    longDescription: `Our Professional Resume Writing service creates compelling, ATS-friendly resumes that get results. The service includes:
    
    • Personal consultation session
    • Industry-specific keyword optimization
    • Achievement-focused content writing
    • ATS compatibility testing
    • Multiple format versions
    • Two rounds of revisions`,
    benefits: [
      "ATS-optimized format",
      "Industry-specific keywords",
      "Achievement-focused content",
      "Multiple format versions",
      "Professional formatting"
    ],
    duration: "1 week",
    category: "documents"
  },
  "cover-letter": {
    id: "cover-letter",
    title: "Cover Letter Creation",
    description: "Compelling cover letters that complement your resume and highlight your value",
    icon: PenTool,
    price: "From $99",
    longDescription: `Our Cover Letter Creation service crafts personalized letters that make a strong first impression. The service includes:
    
    • Customized content writing
    • Personal brand messaging
    • Value proposition development
    • Multiple versions for different roles
    • Professional formatting
    • One round of revisions`,
    benefits: [
      "Personalized content",
      "Compelling storytelling",
      "Professional formatting",
      "Multiple versions",
      "Quick turnaround"
    ],
    duration: "3 days",
    category: "documents"
  },
  "leadership-training": {
    id: "leadership-training",
    title: "Leadership Development",
    description: "Targeted training to develop effective leadership and management skills",
    icon: Award,
    price: "From $299",
    longDescription: `Our Leadership Development program transforms professionals into effective leaders. The program includes:
    
    • Leadership style assessment
    • Communication skills training
    • Team management techniques
    • Conflict resolution strategies
    • Decision-making frameworks
    • Change management principles`,
    benefits: [
      "Enhanced leadership skills",
      "Improved team management",
      "Better communication",
      "Conflict resolution mastery",
      "Strategic thinking development"
    ],
    duration: "8 weeks",
    category: "skills"
  },
  "presentation-skills": {
    id: "presentation-skills",
    title: "Presentation Skills Workshop",
    description: "Learn to create and deliver impactful presentations for any audience",
    icon: Presentation,
    price: "From $199",
    longDescription: `Our Presentation Skills Workshop helps you become a confident and effective presenter. The workshop covers:
    
    • Presentation structure and flow
    • Visual aid design principles
    • Body language and voice modulation
    • Audience engagement techniques
    • Q&A session management
    • Practice sessions with feedback`,
    benefits: [
      "Enhanced presentation confidence",
      "Professional slide design skills",
      "Improved public speaking",
      "Audience engagement techniques",
      "Effective Q&A handling"
    ],
    duration: "4 weeks",
    category: "skills"
  }
};

export type ServiceId = keyof typeof services;