import type { Metadata } from 'next'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'JHA | Consultancy',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries" async></script>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script id="tailwind-config" dangerouslySetInnerHTML={{ __html: `
            tailwind.config = {
                darkMode: "class",
                theme: {
                    extend: {
                        colors: {
                            "tertiary-fixed": "#e5e2e1",
                            "outline": "#737785",
                            "on-secondary-fixed": "#400100",
                            "on-surface-variant": "#434653",
                            "error": "#ba1a1a",
                            "error-container": "#ffdad6",
                            "secondary-container": "#dc3220",
                            "on-tertiary-fixed": "#1c1b1b",
                            "surface-container": "#efeded",
                            "surface-container-lowest": "#ffffff",
                            "on-secondary": "#ffffff",
                            "surface": "#fbf9f9",
                            "surface-container-low": "#f5f3f3",
                            "inverse-primary": "#b1c5ff",
                            "on-primary": "#ffffff",
                            "on-secondary-container": "#fffbff",
                            "on-error-container": "#93000a",
                            "on-primary-fixed-variant": "#00419f",
                            "surface-bright": "#fbf9f9",
                            "secondary": "#b71507",
                            "surface-variant": "#e3e2e2",
                            "on-tertiary": "#ffffff",
                            "inverse-surface": "#303031",
                            "surface-dim": "#dbdad9",
                            "inverse-on-surface": "#f2f0f0",
                            "primary": "#003b93",
                            "on-tertiary-fixed-variant": "#474646",
                            "surface-container-high": "#e9e8e7",
                            "tertiary": "#424141",
                            "primary-container": "#0051c3",
                            "tertiary-container": "#595858",
                            "on-background": "#1b1c1c",
                            "on-error": "#ffffff",
                            "on-surface": "#1b1c1c",
                            "surface-tint": "#1357c9",
                            "background": "#fbf9f9",
                            "tertiary-fixed-dim": "#c9c6c5",
                            "primary-fixed": "#dae2ff",
                            "on-secondary-fixed-variant": "#920600",
                            "surface-container-highest": "#e3e2e2",
                            "on-primary-fixed": "#001947",
                            "outline-variant": "#c3c6d6",
                            "secondary-fixed": "#ffdad4",
                            "on-primary-container": "#beceff",
                            "primary-fixed-dim": "#b1c5ff",
                            "on-tertiary-container": "#d1cece",
                            "secondary-fixed-dim": "#ffb4a7"
                        },
                        fontFamily: {
                            "headline": ["Inter"],
                            "body": ["Inter"],
                            "label": ["Inter"]
                        },
                        borderRadius: { "DEFAULT": "0.125rem", "lg": "0.25rem", "xl": "0.5rem", "full": "0.75rem" },
                    },
                },
            }
        ` }}></script>
        <style dangerouslySetInnerHTML={{ __html: `
            .material-symbols-outlined {
                font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            }

            .glass-nav {
                background: rgba(255, 255, 255, 0.85);
                backdrop-filter: blur(20px);
            }

            .hero-gradient {
                background: linear-gradient(135deg, #003b93 0%, #0051c3 100%);
            }

            .carousel-container {
                position: relative;
                width: 100%;
                height: 700px;
                overflow: hidden;
            }

            .carousel-slide {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0;
                transition: opacity 1s ease-in-out;
                display: flex;
                align-items: center;
            }

            .carousel-slide.active {
                opacity: 1;
                z-index: 10;
            }

            .slide-bg {
                position: absolute;
                inset: 0;
                z-index: -1;
            }

            .slide-bg img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .slide-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(to right, rgba(0, 0, 0, 0.8) 0%, rgba(0, 0, 0, 0.4) 50%, transparent 100%);
                z-index: 1;
            }

            .dot {
                height: 10px;
                width: 10px;
                margin: 0 5px;
                background-color: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                display: inline-block;
                transition: background-color 0.6s ease;
                cursor: pointer;
            }

            .dot.active {
                background-color: #fff;
                width: 24px;
                border-radius: 5px;
            }

            /* Preloader Styles */
            #preloader {
                position: fixed;
                inset: 0;
                background: #fbf9f9;
                z-index: 99999;
                display: flex;
                justify-content: center;
                align-items: center;
                transition: opacity 0.5s ease-out;
            }

            .loader-spinner {
                width: 50px;
                height: 50px;
                border: 5px solid #dae2ff;
                border-top-color: #003b93;
                border-radius: 50%;
                animation: spin 1s linear infinite;
            }

            @keyframes spin {
                to {
                    transform: rotate(360deg);
                }
            }
        ` }} />
      </head>
      <body className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed pt-20 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
