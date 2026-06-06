import Link from 'next/link';

export default function ServicesGrid() { return (
<>
<section className="py-24 bg-slate-50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Strategic IT Services</h2>
                    <p className="text-on-surface-variant max-w-2xl mx-auto text-lg">Scalable solutions tailored to the
                        unique demands of modern industry leaders.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-10">
                    
                    <div
                        className="group relative bg-white p-2 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="h-48 overflow-hidden rounded-xl mb-6">
                            <img alt="ERP Dashboard"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6UqMI4XhnCYyGFgLdk88SOB8UJsRnt29cfI6M_x-hA-65cuGDMUtW_5mBR3gN4xKu2ioPP8BtdA5CZcggPWTtC0Fovek3oZQ_YDzs7Z29cDKUJmuWq3Wv8bjhjzCcfhgcZYY21u7meomKTErYs5f2q9i1nl8qzJp9a8RBVgoo0NbhtfBSjd0BXoLQGzwoU75676mwANXDvQED6BZgUqMmW-qycKen5aFIF-UtI1IEsZYQT-j2FCAOaTGxsRbK3WEFMaa7yh04tqr2" />
                        </div>
                        <div className="px-6 pb-8">
                            <div
                                className="w-12 h-12 bg-primary/10 flex items-center justify-center rounded-lg mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">settings_applications</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">ERP Software Development</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">End-to-end resource planning systems
                                that centralize your data and automate complex workflows with AI-driven insights.</p>
                            <Link className="text-primary font-bold flex items-center gap-2 group/link text-sm" href="/services/erp">
                                Learn More <span
                                    className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    
                    <div
                        className="group relative bg-white p-2 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="h-48 overflow-hidden rounded-xl mb-6">
                            <img alt="Mobile App Development"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnvYkcIogPg--DqCSPH-fSts7CUPndVTN7QCODBZTG5nYbhyPD8MBzOPV2HC_fwJhfGpHKOYUW24Lgb8DcU_VWUrtAgGJHdov1LXlpFp_95h0V2bvPalebmc_-X7Km6fi-TianGB1M7p0DxQAEsy3M8gXeamMVpekvJ0c3Peef_IICSsk1A2YAPhSy4UazfpNjxZ2hMdJbS2dhi7YKRUDor5dVKtr_3_0wBEwZlL-IavkGIcOPqblEKgOc15zG1bqnGGSl7HcAUr8X" />
                        </div>
                        <div className="px-6 pb-8">
                            <div
                                className="w-12 h-12 bg-secondary/10 flex items-center justify-center rounded-lg mb-4 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">smartphone</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Mobile App Development</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">Native and cross-platform
                                applications built for high performance, security, and exceptional user engagement
                                metrics.</p>
                            <Link className="text-secondary font-bold flex items-center gap-2 group/link text-sm" href="/services/mobile">
                                Learn More <span
                                    className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                    
                    <div
                        className="group relative bg-white p-2 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden">
                        <div className="h-48 overflow-hidden rounded-xl mb-6">
                            <img alt="Cloud Infrastructure"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgdhjhDMXMidLXoUM-ZpRnNFCgf0TDCa-cDj3VjjKBYeEH4B2m3v4GQlTEKHIUuS5xUyVcmTW5jgL--6XcZIO5f-QjJy4JFks4vOnMGAlTQW6t-1vAtoz9BaFuH5b10UzuIXAnIuKZunpeqwRvUgPHRozY6Vbs0f8WJHSsFAq7TiKLfkMgFl7UiZ-dq6g5XARTFlRsnSwFyUcetbWbnLxAcMZXhynHWokkGBXptc99HJQg3F5tqZjkwTUohZahOXvkRsYHrml82lpH" />
                        </div>
                        <div className="px-6 pb-8">
                            <div
                                className="w-12 h-12 bg-tertiary/10 flex items-center justify-center rounded-lg mb-4 text-tertiary group-hover:bg-tertiary group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">terminal</span>
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-slate-900">Custom IT Solutions</h3>
                            <p className="text-slate-600 mb-6 text-sm leading-relaxed">Tailored architectural consulting and
                                legacy system modernization to keep your enterprise ahead of the technical curve.</p>
                            <Link className="text-tertiary font-bold flex items-center gap-2 group/link text-sm" href="/services/custom-it">
                                Learn More <span
                                    className="material-symbols-outlined text-xs group-hover/link:translate-x-1 transition-transform">arrow_forward</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</>
); }
