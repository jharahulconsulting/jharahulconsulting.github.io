export default function CtaSection() { return (
<>
<section className="max-w-7xl mx-auto px-6 py-12 mb-20">
            <div className="hero-gradient rounded-3xl p-12 md:p-24 text-center relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
                <div
                    className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/30 rounded-full -ml-32 -mb-32 blur-3xl">
                </div>
                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-8">Ready to transform your digital
                        infrastructure?</h2>
                    <div className="flex flex-col sm:flex-row justify-center gap-6">
                        <button
                            className="bg-white text-primary px-10 py-4 rounded-xl font-bold text-lg hover:bg-slate-100 shadow-xl transition-all hover:scale-105 active:scale-95">Contact
                            Our Experts</button>
                        <button
                            className="bg-primary-container/40 text-white border border-white/20 px-10 py-4 rounded-xl font-bold text-lg hover:bg-primary-container/60 backdrop-blur-sm transition-all hover:scale-105 active:scale-95">Schedule
                            a Demo</button>
                    </div>
                </div>
            </div>
        </section>
</>
); }
