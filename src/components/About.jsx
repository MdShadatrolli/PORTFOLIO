
import { useRef, useLayoutEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const container = useRef();
    const [activeTab, setActiveTab] = useState("about");

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".about-anim", {
                scrollTrigger: {
                    trigger: "#about",
                    start: "top 80%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    const tabs = [
        { id: "about", label: "About Me" },
        { id: "education", label: "Education" },
        { id: "certs", label: "Certifications" }
    ];

    return (
        <section id="about" ref={container} className="py-24 relative bg-zinc-950 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-start relative z-10">
                {/* Image Section */}
                <div className="relative about-anim">
                    <div className="w-full aspect-square bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl relative group">
                        <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black flex items-center justify-center">
                            <img src="/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                                onError={(e) => { e.target.style.display = 'none' }}
                            />
                        </div>
                        <div className="absolute top-4 right-4 w-20 h-20 border-r-2 border-t-2 border-primary rounded-tr-3xl"></div>
                        <div className="absolute bottom-4 left-4 w-20 h-20 border-l-2 border-b-2 border-primary rounded-bl-3xl"></div>
                    </div>
                </div>

                {/* Content Section */}
                <div>
                    <h2 className="about-anim text-primary font-mono text-sm tracking-widest uppercase mb-4">Discover</h2>
                    <h3 className="about-anim text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                        Pioneering Data-Driven <span className="text-gray-500">Solutions.</span>
                    </h3>

                    {/* Tabs */}
                    <div className="flex gap-4 mb-8 border-b border-zinc-800 pb-1 about-anim">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`pb-3 text-sm font-bold uppercase tracking-wider transition-all relative ${activeTab === tab.id ? "text-primary" : "text-gray-500 hover:text-white"
                                    }`}
                            >
                                {tab.label}
                                {activeTab === tab.id && (
                                    <span className="absolute bottom-[-1px] left-0 w-full h-[2px] bg-primary"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="relative min-h-[300px] about-anim">
                        {activeTab === "about" && (
                            <div className="space-y-6 text-gray-400 leading-relaxed text-lg animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <p>
                                    I am a passionate <strong className="text-white">Computer Science Engineer</strong> specializing in AI & Machine Learning.
                                    With a strong foundation in <strong className="text-white">Python, C++, and Data Science</strong>, I build intelligent systems that solve real-world problems.
                                </p>
                                <p>
                                    My journey is defined by a relentless curiosity to understand the "why" behind every data point.
                                    Currently pursuing my B.Tech, I combine academic rigor with practical application.
                                </p>
                            </div>
                        )}

                        {activeTab === "education" && (
                            <div className="space-y-8 pl-4 border-l-2 border-zinc-800 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                <div className="relative">
                                    <span className="absolute -left-[21px] top-2 w-3 h-3 bg-primary rounded-full ring-4 ring-black"></span>
                                    <h5 className="text-white font-bold text-lg">Lovely Professional University</h5>
                                    <p className="text-primary text-sm mb-1">B.Tech CSE • Aug 2023 – Present</p>
                                    <p className="text-gray-500 text-sm">CGPA: 6.55</p>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-[21px] top-2 w-3 h-3 bg-zinc-700 rounded-full ring-4 ring-black"></span>
                                    <h5 className="text-white font-bold text-lg">Lucent International School</h5>
                                    <p className="text-gray-400 text-sm mb-1">Intermediate (PCM) • 2021 – 2022</p>
                                    <p className="text-gray-500 text-sm">Percentage: 70%</p>
                                </div>
                                <div className="relative">
                                    <span className="absolute -left-[21px] top-2 w-3 h-3 bg-zinc-700 rounded-full ring-4 ring-black"></span>
                                    <h5 className="text-white font-bold text-lg">Basaweshwara International School</h5>
                                    <p className="text-gray-400 text-sm mb-1">Matriculation • 2018 – 2019</p>
                                    <p className="text-gray-500 text-sm">Percentage: 81.3%</p>
                                </div>
                            </div>
                        )}

                        {activeTab === "certs" && (
                            <div className="grid gap-4 animate-in fade-in slide-in-from-bottom-4 duration-500">
                                {[
                                    { name: "Computer Vision Masterclass (Udemy)", link: "/assets/UdemyCOmputerVision.pdf" },
                                    { name: "Docker & Kubernetes Guide", link: "/assets/DockerKubernetes.pdf" },
                                    { name: "MERN Stack Development", link: "/assets/MERN.pdf" }
                                ].map((cert, i) => (
                                    <a
                                        key={i}
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-zinc-900 p-4 rounded-lg border border-zinc-800 flex items-center justify-between group hover:border-primary/50 transition-all hover:bg-zinc-800 cursor-pointer"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-green-500 rounded-full shrink-0 group-hover:bg-primary transition-colors"></div>
                                            <span className="text-gray-300 font-medium text-sm group-hover:text-white transition-colors">{cert.name}</span>
                                        </div>
                                        <ExternalLink size={16} className="text-gray-600 group-hover:text-primary transition-colors" />
                                    </a>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
