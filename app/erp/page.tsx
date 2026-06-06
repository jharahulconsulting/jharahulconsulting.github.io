import React from 'react';

export default function ErpPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-12 text-center mb-16">
        <div className="inline-flex items-center px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded mb-6">
          Enterprise Solutions
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 leading-tight">Advanced <span className="text-primary-fixed-variant">ERP</span> Ecosystems</h1>
        <p className="mt-6 text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">We architect fully-integrated Enterprise Resource Planning software tailored to scale with modern global operations.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24">
        {/* Banner Section */}
        <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl mb-16 group">
          <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/30 transition-all"></div>
          <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="/erp1.png" alt="ERP Dashboard Dashboard" />
          <div className="absolute bottom-10 left-10 z-20 text-white">
            <h3 className="text-3xl font-bold">Unify Your Data</h3>
            <p className="text-slate-200 mt-2">Break down silos across finance, tracking, operations, and HR.</p>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <span className="material-symbols-outlined text-4xl text-primary mb-4">dashboard_customize</span>
            <h4 className="text-xl font-bold mb-2">Custom Dashboards</h4>
            <p className="text-slate-600 text-sm">Real-time analytical suites crafted uniquely for each department's distinct needs.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <span className="material-symbols-outlined text-4xl text-secondary mb-4">cloud_sync</span>
            <h4 className="text-xl font-bold mb-2">Cloud Integration</h4>
            <p className="text-slate-600 text-sm">Seamless connection across existing cloud tools and on-premise infrastructure setup.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <span className="material-symbols-outlined text-4xl text-teal-600 mb-4">bolt</span>
            <h4 className="text-xl font-bold mb-2">Process Automation</h4>
            <p className="text-slate-600 text-sm">Automate repetitive processes from billing to inventory restocks, reducing human error.</p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <span className="material-symbols-outlined text-4xl text-purple-600 mb-4">security_update_good</span>
            <h4 className="text-xl font-bold mb-2">Enterprise Security</h4>
            <p className="text-slate-600 text-sm">Industry-standard encryptions and regular audits ensure regulatory global compliance.</p>
          </div>
        </div>

      </div>
    </div>
  );
}
