export default function AboutSection() { return (
<>
<section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-center">
                    <div className="w-full md:w-1/2 order-2 md:order-1">
                        <div className="relative group">
                            <div
                                className="absolute -inset-4 bg-primary-fixed/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500">
                            </div>
                            <img alt="Professional IT consultant with headset"
                                className="relative rounded-2xl w-full h-[600px] object-cover shadow-2xl"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9SeDr0OX70p4AZadPLCxFadP2FSZRWB1-tbee9x8ma8UylTVAwqFt_hBYRgP2hKsVjob8vzTJF9NgnYevKgbfcDKdJMmzF4_9V34bawhcGGU6vsSaSZTttf-GKKi7rigYVhpglQQnk1sq1EsSnMi-so7sUfUaV1ziAjRlSI0TBsRCdqPG76Jsp2zOj3qAGEr20fs0QeHVbuDNTP2zyRZxgTgHemcBH6NjgXqyznC8lp5GFD7d2ggIm2IRh5YnPhqaktuq5rhPa0hh" />
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 space-y-8 order-1 md:order-2">
                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Expert Consultation at
                            Your Fingertips</h2>
                        <p className="text-on-surface-variant leading-relaxed text-lg">
                            We provide expert certification support with one-on-one guidance, helping you gain the
                            skills and credentials you need quickly and effectively.
                        </p>
                        <ul className="space-y-5 pt-2">
                            <li className="flex items-start gap-4">
                                <span
                                    className="material-symbols-outlined text-primary bg-primary-fixed/40 p-1.5 rounded-full text-sm mt-1">check</span>
                                <div>
                                    <span className="font-bold block text-slate-900">Direct Industry Access</span>
                                    <p className="text-sm text-slate-500">Work directly with senior architects and project
                                        leads.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span
                                    className="material-symbols-outlined text-primary bg-primary-fixed/40 p-1.5 rounded-full text-sm mt-1">check</span>
                                <div>
                                    <span className="font-bold block text-slate-900">Personalized Roadmap</span>
                                    <p className="text-sm text-slate-500">Customized ERP implementation strategies for your
                                        unique stack.</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4">
                                <span
                                    className="material-symbols-outlined text-primary bg-primary-fixed/40 p-1.5 rounded-full text-sm mt-1">check</span>
                                <div>
                                    <span className="font-bold block text-slate-900">24/7 Priority Support</span>
                                    <p className="text-sm text-slate-500">Global assistance for mission-critical operations.
                                    </p>
                                </div>
                            </li>
                        </ul>
                        <button
                            className="bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all">Book
                            a Consultation</button>
                    </div>
                </div>
            </div>
        </section>
</>
); }
