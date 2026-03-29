export default function Certifications() { return (
<>
<section className="py-24 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-extrabold tracking-tight mb-4 text-slate-900">Master the Future</h2>
                        <p className="text-on-surface-variant text-lg">Accelerate your career with our globally recognized
                            certification courses led by industry veterans.</p>
                    </div>
                    <button
                        className="text-primary font-bold border-b-2 border-primary pb-1 hover:text-blue-800 transition-colors">Browse
                        All Courses</button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    
                    <div
                        className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all duration-300 hover:bg-slate-900 hover:text-white cursor-pointer hover:-translate-y-2 shadow-sm">
                        <div
                            className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-primary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl" data-weight="fill">neurology</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2">AI Mastery</h4>
                        <div className="text-xs uppercase tracking-widest font-bold opacity-60">Professional Badge</div>
                        <p className="mt-4 text-sm text-slate-500 group-hover:text-slate-300">Generative AI and Large
                            Language Models.</p>
                    </div>
                    
                    <div
                        className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all duration-300 hover:bg-slate-900 hover:text-white cursor-pointer hover:-translate-y-2 shadow-sm">
                        <div
                            className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-secondary group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl" data-weight="fill">database</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2">Oracle Database</h4>
                        <div className="text-xs uppercase tracking-widest font-bold opacity-60">Certified Expert</div>
                        <p className="mt-4 text-sm text-slate-500 group-hover:text-slate-300">Advanced SQL and Cloud
                            Database Admin.</p>
                    </div>
                    
                    <div
                        className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all duration-300 hover:bg-slate-900 hover:text-white cursor-pointer hover:-translate-y-2 shadow-sm">
                        <div
                            className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-blue-500 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl" data-weight="fill">code_blocks</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2">Python Core</h4>
                        <div className="text-xs uppercase tracking-widest font-bold opacity-60">Developer Series</div>
                        <p className="mt-4 text-sm text-slate-500 group-hover:text-slate-300">Data Science and Backend
                            Engineering.</p>
                    </div>
                    
                    <div
                        className="group relative p-8 rounded-2xl bg-slate-50 border border-slate-100 text-center transition-all duration-300 hover:bg-slate-900 hover:text-white cursor-pointer hover:-translate-y-2 shadow-sm">
                        <div
                            className="w-16 h-16 mx-auto mb-6 bg-white rounded-2xl flex items-center justify-center shadow-lg group-hover:bg-purple-500 group-hover:text-white transition-all">
                            <span className="material-symbols-outlined text-3xl" data-weight="fill">developer_mode_tv</span>
                        </div>
                        <h4 className="font-bold text-xl mb-2">.NET Core</h4>
                        <div className="text-xs uppercase tracking-widest font-bold opacity-60">Enterprise Ready</div>
                        <p className="mt-4 text-sm text-slate-500 group-hover:text-slate-300">Microservices and Enterprise
                            Architecture.</p>
                    </div>
                </div>
            </div>
        </section>
</>
); }
