import Link from 'next/link';

export default function MobileServicePage() {
  const screenshots = [
    { src: '/mobile-dashboard.jpeg', title: 'Dashboard', desc: 'Sleek, intuitive dashboard view with performance insights.' },
    { src: '/mobile-groups.jpeg', title: 'Groups', desc: 'Collaborative workspaces and team management modules.' },
    { src: '/mobile-members.jpeg', title: 'Members Directory', desc: 'Quick-access active directories and access-control profiles.' },
    { src: '/mobile-profile.jpeg', title: 'Profile Customization', desc: 'Tailored preference dashboards for customized experiences.' }
  ];

  return (
    <div className="pt-20 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <Link href="/services" className="inline-flex items-center text-secondary font-semibold hover:underline mb-8">
          <span className="material-symbols-outlined mr-2">arrow_back</span> Back to Services
        </Link>
        <div className="space-y-6 mb-12">
          <div className="inline-flex items-center px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded">
            Mobile Development
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            High-Performance Mobile App Development
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl leading-relaxed">
            We design, develop, and deploy native and cross-platform mobile applications engineered for high efficiency, strict security protocols, and exceptional user engagement.
          </p>
        </div>

        {/* Gallery Grid */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6">Application Showcases</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {screenshots.map((screen, idx) => (
            <div key={idx} className="bg-white p-4 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="aspect-[9/16] bg-slate-100 rounded-xl overflow-hidden mb-4 relative">
                <img src={screen.src} alt={screen.title} className="w-full h-full object-cover" />
              </div>
              <div>
                <h3 className="font-bold text-slate-950 text-base mb-1">{screen.title}</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{screen.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900">Engineering Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <span className="material-symbols-outlined text-3xl text-secondary">phone_iphone</span>
              <h3 className="text-lg font-bold">Cross-Platform Versatility</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Single codebase efficiency utilizing frameworks like React Native and Flutter, ensuring native feel on both iOS and Android platforms.</p>
            </div>
            <div className="space-y-2">
              <span className="material-symbols-outlined text-3xl text-secondary">speed</span>
              <h3 className="text-lg font-bold">Performance Optimization</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Strictest attention to runtime efficiency, offline persistence, asynchronous data syncing, and minimized app bundle footprint.</p>
            </div>
            <div className="space-y-2">
              <span className="material-symbols-outlined text-3xl text-secondary">fingerprint</span>
              <h3 className="text-lg font-bold">Biometric Security</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Seamless integration with native iOS/Android keychain services, face/fingerprint authentication, and local data encryption.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
