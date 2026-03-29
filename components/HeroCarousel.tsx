
"use client";
import { useEffect, useState } from "react";

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="carousel-container mt-20">
            <div className={`carousel-slide ${currentSlide === 0 ? 'active' : ''}`} style={{ opacity: currentSlide === 0 ? 1 : 0, transition: 'opacity 1s ease-in-out', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                <div className="slide-bg" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                    <img alt="Mobile app development" src="https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1600&auto=format&fit=crop" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="slide-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)', zIndex: 1 }}></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center px-3 py-1 bg-tertiary text-white text-xs font-bold uppercase tracking-widest rounded">Mobile App Development</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Building <span className="text-tertiary-fixed-dim">Next-Gen</span> Mobile Experiences</h1>
                        <p className="text-lg text-slate-200 leading-relaxed">We design and develop high-performance mobile applications.</p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-white text-primary px-8 py-3.5 rounded-lg font-bold shadow-xl hover:bg-slate-100 transition-all">Start Your App</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`carousel-slide ${currentSlide === 1 ? 'active' : ''}`} style={{ opacity: currentSlide === 1 ? 1 : 0, transition: 'opacity 1s ease-in-out', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                <div className="slide-bg" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                    <img alt="Enterprise" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAa0lUCxNK4wbJ_0Nomacoy9chayfleXyKiclwRysmS_q1rtznYHMJ00dLv1Pwaow-_0uHRsZN-gmnAbkvFyteDNm7JlY-tqkIzzLBUmsEah0vOKDjI37S5GCxMo-lMzlIGpWrR_EXVl_VgPDh2CFy7hYMB5T2UJQaELpIj0zy5EDj2itLX5HL8JrTDDtiPG3Fn2L-4JxT-qw0HNATvTw3Kpxe4yj6-HHZHwSixymzoh-XXVasu9PqUALc9yC0-tUmJ8mpCVTgTZTcH" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="slide-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)', zIndex: 1 }}></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center px-3 py-1 bg-primary text-white text-xs font-bold uppercase tracking-widest rounded">Enterprise Excellence</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Innovative <span className="text-primary-fixed">ERP Solutions</span> for Global Scale</h1>
                        <p className="text-lg text-slate-200 leading-relaxed">Streamline your entire business ecosystem.</p>
                        <div className="flex flex-wrap gap-4 pt-4">
                            <button className="bg-primary text-white px-8 py-3.5 rounded-lg font-bold shadow-xl hover:bg-blue-700 transition-all">Explore Systems</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`carousel-slide ${currentSlide === 2 ? 'active' : ''}`} style={{ opacity: currentSlide === 2 ? 1 : 0, transition: 'opacity 1s ease-in-out', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center' }}>
                <div className="slide-bg" style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
                    <img alt="Training" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpiK7RfbNRnPZA94dBZNyNp27jAMVagglp5_xAJSwIIIoqMaNYAsCoWJ5YACdNTA-D_k99wmZFEXNOs-XoHILoI-heFxt6TfC0VW2SDw7ri-dWEcRJHJ4_EYy1VsSvkCjilYunIoq4LNAjCo1CfpeDH0fZdQOgBXVS-JR-4ldpBmJdIkVVFmO7JIyjv8UrGK22B1xRltKviQ3UB_lK-J-pbT4NOLqGqZBv3p2aCqbdd9nT-EHgPEsVBS_oy4k27IeNiJMeBsRbhAEV" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                <div className="slide-overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%)', zIndex: 1 }}></div>
                <div className="max-w-7xl mx-auto px-6 relative z-10 text-white">
                    <div className="max-w-2xl space-y-6">
                        <div className="inline-flex items-center px-3 py-1 bg-secondary text-white text-xs font-bold uppercase tracking-widest rounded">Global Training</div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">Empower Your Team with <span className="text-secondary-fixed-dim">Mastery Courses</span></h1>
                        <p className="text-lg text-slate-200 leading-relaxed">Upskill with industry-recognized certifications.</p>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center">
                <div className="flex gap-2">
                    <span className={`dot ${currentSlide === 0 ? 'active' : ''}`} onClick={() => setCurrentSlide(0)}></span>
                    <span className={`dot ${currentSlide === 1 ? 'active' : ''}`} onClick={() => setCurrentSlide(1)}></span>
                    <span className={`dot ${currentSlide === 2 ? 'active' : ''}`} onClick={() => setCurrentSlide(2)}></span>
                </div>
            </div>
            <button className="absolute left-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all" onClick={() => setCurrentSlide((prev) => (prev - 1 + 3) % 3)}>
                <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all" onClick={() => setCurrentSlide((prev) => (prev + 1) % 3)}>
                <span className="material-symbols-outlined">chevron_right</span>
            </button>
    </section>
  );
}
