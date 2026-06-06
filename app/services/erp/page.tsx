import Link from 'next/link';

export default function ErpServicePage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/services" className="inline-flex items-center text-primary font-semibold hover:underline mb-8">
          <span className="material-symbols-outlined mr-2">arrow_back</span> Back to Services
        </Link>
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded">
            ERP Systems
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Enterprise Resource Planning (ERP) Development
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            We architect and deploy end-to-end resource planning systems that centralize enterprise data, streamline cross-department operations, and automate complex workflows with intelligent insights.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-slate-900 mb-3">System Analytics Dashboard</h3>
            <div className="aspect-[16/10] bg-slate-100 rounded-lg overflow-hidden">
              <img src="/erp1.png" alt="ERP Dashboard Screen 1" className="w-full h-full object-cover" />
            </div>
            <p className="text-slate-500 text-sm mt-3">Comprehensive system dashboard displaying performance metrics, resource utilization, and key statistics.</p>
          </div>

          <div className="bg-white p-4 rounded-2xl shadow-md border border-slate-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-lg font-bold text-slate-900 mb-3">Resource Management Screen</h3>
            <div className="aspect-[16/10] bg-slate-100 rounded-lg overflow-hidden">
              <img src="/erp2.png" alt="ERP Dashboard Screen 2" className="w-full h-full object-cover" />
            </div>
            <p className="text-slate-500 text-sm mt-3">Real-time scheduling and resource allocation controls optimized for global-scale administration.</p>
          </div>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="material-symbols-outlined text-3xl text-primary">analytics</span>
              <h3 className="text-lg font-bold">Unified Database</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Eliminate data silos. Our ERP ecosystems bring financial records, operations, inventory, and human resources onto a single dashboard.</p>
            </div>
            <div className="space-y-2">
              <span className="material-symbols-outlined text-3xl text-primary">sync</span>
              <h3 className="text-lg font-bold">Automation Workflows</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Reduce manual friction and human error. Automatically trigger procurement alerts, invoices, and compliance logging.</p>
            </div>
            <div className="space-y-2">
              <span className="material-symbols-outlined text-3xl text-primary">security</span>
              <h3 className="text-lg font-bold">Enterprise-Grade Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Configured with industry-leading access controls, end-to-end encryption protocols, and regular penetration testing standards.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
