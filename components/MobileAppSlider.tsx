"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface MobileScreen {
    src: string;
    title: string;
    description: string;
}

const mobileScreens: MobileScreen[] = [
    {
        src: "/mobile-dashboard.jpeg",
        title: "Dashboard",
        description: "Beautiful gradient dashboard with group management",
    },
    {
        src: "/mobile-groups.jpeg",
        title: "Group Details",
        description: "Detailed cycle information and member management",
    },
    {
        src: "/mobile-members.jpeg",
        title: "Members",
        description: "Track member progress and payments",
    },
    {
        src: "/mobile-profile.jpeg",
        title: "User Profile",
        description: "Comprehensive user profile with ratings",
    },
];

export const MobileAppSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % mobileScreens.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className="relative w-full">
            {/* Section Title */}
            <div className="text-center mb-8 animate-fade-in">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                    My Tech Projects
                </h2>
                <p className="text-blue-100 text-lg">
                    Round Robin Saving - Mobile Group Finance App
                </p>
            </div>

            {/* Slider Container */}
            <div className="relative max-w-sm mx-auto">
                {/* Phone Mockup Frame */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                    {/* Phone Notch */}
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-7 bg-gray-900 rounded-b-3xl z-10"></div>

                    {/* Screen Container */}
                    <div className="relative bg-white rounded-[2.5rem] overflow-hidden" style={{ aspectRatio: "9/19.5" }}>
                        {/* Screens */}
                        <div className="relative w-full h-full">
                            {mobileScreens.map((screen, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${index === currentIndex
                                        ? "opacity-100 translate-x-0"
                                        : index < currentIndex
                                            ? "opacity-0 -translate-x-full"
                                            : "opacity-0 translate-x-full"
                                        }`}
                                >
                                    <Image
                                        src={screen.src}
                                        alt={screen.title}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative Elements */}
                    <div className="absolute -top-1 -right-1 w-24 h-24 bg-jha-orange/20 rounded-full blur-2xl"></div>
                    <div className="absolute -bottom-1 -left-1 w-24 h-24 bg-blue-500/20 rounded-full blur-2xl"></div>
                </div>

                {/* Screen Title & Description */}
                <div className="text-center mt-6 animate-fade-in">
                    <h3 className="text-xl font-semibold text-white mb-2">
                        {mobileScreens[currentIndex].title}
                    </h3>
                    <p className="text-blue-100">
                        {mobileScreens[currentIndex].description}
                    </p>
                </div>

                {/* Dot Indicators */}
                <div className="flex justify-center gap-2 mt-6">
                    {mobileScreens.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                ? "w-8 h-3 bg-jha-orange"
                                : "w-3 h-3 bg-white/40 hover:bg-white/60"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Tech Stack Badges */}
            <div className="flex flex-wrap justify-center gap-3 mt-8">
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                    Python
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                    Flutter
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                    Mobile Development
                </span>
                <span className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm font-medium border border-white/20">
                    Group Finance
                </span>
            </div>
        </div>
    );
};
