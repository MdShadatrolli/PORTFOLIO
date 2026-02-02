
import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import HeroScene from "./Canvas/HeroScene";
import { ArrowRight } from "lucide-react";

const Hero = () => {
    const comp = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline();

            tl.from(".hero-text-reveal", {
                y: 100,
                opacity: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power4.out",
                delay: 0.5
            })
                .from(".hero-btn", {
                    scale: 0,
                    opacity: 0,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.7)"
                }, "-=0.5");

        }, comp);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={comp} className="relative h-screen flex flex-col justify-center items-center overflow-hidden" id="home">
            {/* 3D Background */}
            <HeroScene />

            {/* Overlay Content */}
            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pointer-events-none">
                <h2 className="hero-text-reveal text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-4">
                    DATA SCIENTIST & ML ENGINEER
                </h2>

                <h1 className="hero-text-reveal text-4xl md:text-7xl font-black text-white leading-tight mb-6">
                    <span className="block text-3xl md:text-5xl mb-2 font-light text-gray-300">I'm Mohammad Shadathusen Rolli</span>
                    TRANSFORMING <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-yellow-200">INSIGHTS</span>
                </h1>

                <p className="hero-text-reveal text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10">
                    I craft intelligent solutions using Python and Machine Learning to extract value from complex data.
                </p>

                <div className="flex flex-col md:flex-row gap-6 justify-center pointer-events-auto">
                    <a href="#projects" className="hero-btn group relative px-8 py-4 bg-primary text-black font-bold uppercase tracking-wider overflow-hidden rounded-sm hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all">
                        <span className="relative z-10 flex items-center gap-2">
                            View Projects <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>

                    <a href="#contact" className="hero-btn px-8 py-4 border border-white/20 hover:border-white text-white font-bold uppercase tracking-wider bg-black/20 backdrop-blur-sm rounded-sm transition-all hover:bg-white/10">
                        Contact Me
                    </a>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
