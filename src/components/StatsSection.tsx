
import { Check, Users, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    id: 1,
    figure: "500+",
    label: "Certifications Achieved",
    icon: Award
  },
  {
    id: 2,
    figure: "90%",
    label: "Job Placement Rate",
    icon: TrendingUp
  },
  {
    id: 3,
    figure: "2000+",
    label: "Satisfied Clients",
    icon: Users
  },
  {
    id: 4,
    figure: "100%",
    label: "Success Guarantee",
    icon: Check
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-jha-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg max-w-3xl mx-auto opacity-90">
            At JhaConsultancy, we measure our success by the achievements of our clients.
            Here's what we've accomplished together.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.id} className="text-center">
              <div className="mx-auto w-14 h-14 bg-white/10 rounded-full flex items-center justify-center mb-4">
                <stat.icon size={24} className="text-jha-orange" />
              </div>
              <div className="text-4xl font-bold mb-2 text-jha-orange">{stat.figure}</div>
              <div className="text-sm md:text-base">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
