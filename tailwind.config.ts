
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				jha: {
					blue: '#1e3a8a',
					orange: '#f97316',
					lightblue: '#3b82f6',
					gray: '#f3f4f6',
					darkgray: '#4b5563'
				},
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			fontFamily: {
				headline: ["Inter", "sans-serif"],
				body: ["Inter", "sans-serif"],
				label: ["Inter", "sans-serif"]
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'slide-in': {
					'0%': {
						transform: 'translateX(-100%)'
					},
					'100%': {
						transform: 'translateX(0)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'slide-in': 'slide-in 0.5s ease-out forwards'
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/forms"),
		require("@tailwindcss/container-queries")
	],
} satisfies Config;
