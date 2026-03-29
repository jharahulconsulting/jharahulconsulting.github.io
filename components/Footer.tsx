
export default function Footer() {
  return (
    <footer className="w-full py-20 bg-slate-900 text-slate-300">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-6">
            <div className="space-y-6">
                <span className="text-2xl font-bold text-white tracking-tighter block">JHA CONSULTANCY </span>
                <p className="font-inter text-sm leading-relaxed text-slate-400">
                    Engineering Digital Excellence through innovative software solutions and world-class professional
                    education.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Solutions</h4>
                <div className="flex flex-col gap-4 font-inter text-sm">
                    <a className="hover:text-primary transition-colors" href="/">Mobile Apps</a>
                    <a className="hover:text-primary transition-colors" href="/">ERP Development</a>
                    <a className="hover:text-primary transition-colors" href="/">IT Consultation</a>
                    <a className="hover:text-primary transition-colors" href="/">Cloud Infrastructure</a>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Support</h4>
                <div className="flex flex-col gap-4 font-inter text-sm">
                    <a className="hover:text-primary transition-colors" href="/">Help Center</a>
                    <a className="hover:text-primary transition-colors" href="/">Privacy Policy</a>
                    <a className="hover:text-primary transition-colors" href="/">Terms of Service</a>
                    <a className="hover:text-primary transition-colors" href="/">System Status</a>
                </div>
            </div>
            <div>
                <h4 className="font-bold text-white mb-8 uppercase tracking-widest text-xs">Connect</h4>
                <div className="flex gap-4">
                    <a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                        href="/">
                        <span className="material-symbols-outlined text-sm">share</span>
                    </a>
                    <a className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:border-primary transition-all"
                        href="/">
                        <span className="material-symbols-outlined text-sm">mail</span>
                    </a>
                </div>
                <div className="mt-8 text-xs text-slate-500">
                    © 2024 JHA CONSULTANCY. Engineering Digital Excellence.
                </div>
            </div>
        </div>
    
</footer>
  );
}
