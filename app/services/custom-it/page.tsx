import Link from 'next/link';

export default function CustomItServicePage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/services" className="inline-flex items-center text-tertiary font-semibold hover:underline mb-8">
          <span className="material-symbols-outlined mr-2">arrow_back</span> Back to Services
        </Link>
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-tertiary text-white text-xs font-bold uppercase tracking-widest rounded">
            Custom IT Solutions
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Custom IT Solutions & Architecture
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            Tailored software architecture, consulting, database design, legacy system modernization, and custom automation tools built to scale.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Definition & Focus Areas</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">architecture</span>
                Software Architecture Design
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Defining high-availability structures, cloud deployment paradigms, microservices, and secure communication channels engineered to meet the unique needs of your business model.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">database</span>
                Database Optimization & Migration
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Migrating from outdated storage environments to modern, index-optimized relational or distributed databases. We focus on low latency, fail-safes, and clean schema design.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">integration_instructions</span>
                API & System Integrations
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Developing robust middleware to securely bridge external APIs, banking/payment gates, internal reporting instruments, and external CRM/ERP platforms.
              </p>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <span className="material-symbols-outlined text-tertiary">update</span>
                Legacy Modernization
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Systematically refactoring monolithic codebase systems into maintainable web applications, eliminating technical debt without disrupting production environments.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-900 text-white rounded-3xl p-8 md:p-12 space-y-6">
          <h2 className="text-2xl font-bold">Why Custom Solutions?</h2>
          <p className="text-slate-300 text-sm leading-relaxed max-w-4xl">
            Off-the-shelf software often forces companies to adapt their workflows to match the vendor's limitations. Our custom IT consultancy evaluates your processes directly, formulating high-performance software environments designed specifically for your growth targets, security standards, and daily execution needs.
          </p>
        </div>
      </div>
    </div>
  );
}
