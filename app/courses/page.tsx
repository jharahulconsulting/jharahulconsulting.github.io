import React from 'react';

export default function CoursesPage() {
  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 pt-12 text-center mb-16">
        <h1 className="text-5xl font-extrabold text-slate-900">Professional Courses</h1>
        <p className="mt-4 text-xl text-slate-600">Elevate your career with our industry-leading certifications and training.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* ISACA */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-blue-100 text-blue-700 rounded-xl flex items-center justify-center mb-6 border border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">admin_panel_settings</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">ISACA Courses</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-blue-600">check_circle</span> All ISACA Courses</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-blue-600">check_circle</span> CISA, CISM</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-blue-600">check_circle</span> CRISC, CGEIT</li>
          </ul>
        </div>

        {/* Cisco */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-teal-100 text-teal-700 rounded-xl flex items-center justify-center mb-6 border border-teal-200 group-hover:bg-teal-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">router</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Cisco Certifications</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-teal-600">check_circle</span> CCNA</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-teal-600">check_circle</span> CCNP</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-teal-600">check_circle</span> Specialty Certifications</li>
          </ul>
        </div>

        {/* Google & AWS */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-orange-100 text-orange-700 rounded-xl flex items-center justify-center mb-6 border border-orange-200 group-hover:bg-orange-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">cloud</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Cloud Computing</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-orange-600">check_circle</span> Google Cloud Associate</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-orange-600">check_circle</span> Google Cloud Professional</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-orange-600">check_circle</span> AWS: Associate, Professional, Specialty</li>
          </ul>
        </div>

        {/* Microsoft & Oracle */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-indigo-100 text-indigo-700 rounded-xl flex items-center justify-center mb-6 border border-indigo-200 group-hover:bg-indigo-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">dns</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Microsoft & Oracle</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-indigo-600">check_circle</span> Microsoft: All Available</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-indigo-600">check_circle</span> Oracle: All Available</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-indigo-600">check_circle</span> Database & Enterprise Admin</li>
          </ul>
        </div>

        {/* CompTIA */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-purple-100 text-purple-700 rounded-xl flex items-center justify-center mb-6 border border-purple-200 group-hover:bg-purple-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">security</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">CompTIA</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-purple-600">check_circle</span> All Courses Available</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-purple-600">check_circle</span> A+, Network+, Security+</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-purple-600">check_circle</span> Advanced Specializations</li>
          </ul>
        </div>

        {/* PMI */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-red-100 text-red-700 rounded-xl flex items-center justify-center mb-6 border border-red-200 group-hover:bg-red-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">add_task</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">PMI Certifications</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-red-600">check_circle</span> PMP, PMI-ACP</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-red-600">check_circle</span> PMI-PBA, PMI-CAPM</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-red-600">check_circle</span> PMI-RMP & More</li>
          </ul>
        </div>

        {/* Agile & Management */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-green-100 text-green-700 rounded-xl flex items-center justify-center mb-6 border border-green-200 group-hover:bg-green-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">group_work</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Agile & Management</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-green-600">check_circle</span> SAFe: All Available</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-green-600">check_circle</span> Scrum: All Available</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-green-600">check_circle</span> PeopleCert: ITILv4</li>
          </ul>
        </div>

        {/* Industry Specific */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
          <div className="w-16 h-16 bg-pink-100 text-pink-700 rounded-xl flex items-center justify-center mb-6 border border-pink-200 group-hover:bg-pink-600 group-hover:text-white transition-all">
            <span className="material-symbols-outlined text-3xl">domain</span>
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Industry Specific</h3>
          <ul className="space-y-3 text-slate-600">
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-pink-600">check_circle</span> Real Estate</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-pink-600">check_circle</span> Pharmacy & Nursing</li>
            <li className="flex items-center gap-2"><span className="material-symbols-outlined text-sm text-pink-600">check_circle</span> Life Insurance</li>
          </ul>
        </div>

        {/* And Many More */}
        <div className="bg-slate-900 p-8 rounded-2xl shadow-xl flex flex-col justify-center items-center text-center group hover:scale-105 transition-all">
          <span className="material-symbols-outlined text-5xl text-white mb-4">more_horiz</span>
          <h3 className="text-2xl font-bold text-white mb-2">And Many More...</h3>
          <p className="text-slate-400">Contact us to find the perfect certification track for your exact career goals.</p>
        </div>

      </div>
    </div>
  );
}
