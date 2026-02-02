
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, Github, Linkedin, MapPin, Phone } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const sectionRef = useRef();
    const statusText = "Available for Freelance & Full-time Roles";

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(".contact-anim", {
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out"
            });
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="contact" ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20">
                    {/* Left Column: Info */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-500 text-xs font-bold uppercase tracking-widest mb-8 contact-anim">
                            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                            {statusText}
                        </div>

                        <h2 className="text-5xl md:text-7xl font-black text-white mb-8 contact-anim">
                            Let's Build <br />
                            <span className="text-primary">Something Great.</span>
                        </h2>

                        <p className="text-gray-400 text-lg leading-relaxed mb-12 max-w-lg contact-anim">
                            I'm always interested in hearing about new projects and opportunities.
                            Whether you have a question or just want to say hi, feel free to drop a message.
                        </p>

                        <div className="space-y-6 contact-anim">
                            <a href="mailto:shadatrolli05@gmail.com" className="flex items-center gap-4 text-xl text-white hover:text-primary transition-colors group">
                                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-primary transition-colors">
                                    <Mail size={20} />
                                </div>
                                shadatrolli05@gmail.com
                            </a>
                            <a href="tel:+918088051514" className="flex items-center gap-4 text-xl text-white hover:text-primary transition-colors group">
                                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 group-hover:border-primary transition-colors">
                                    <Phone size={20} />
                                </div>
                                +91 8088051514
                            </a>
                            <div className="flex items-center gap-4 text-xl text-gray-400">
                                <div className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800">
                                    <MapPin size={20} />
                                </div>
                                Punjab, India
                            </div>
                        </div>

                        <div className="flex gap-4 mt-12 contact-anim">
                            <a href="https://www.linkedin.com/in/shadatrolli2022/" target="_blank" className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300">
                                <Linkedin size={24} />
                            </a>
                            <a href="https://github.com/MdShadatrolli" target="_blank" className="w-14 h-14 bg-zinc-900 rounded-full flex items-center justify-center border border-zinc-800 hover:bg-white hover:text-black hover:border-white transition-all duration-300">
                                <Github size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="contact-anim">
                        <form className="bg-zinc-900/50 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-zinc-800 shadow-2xl">
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Your Name</label>
                                    <input type="text" className="w-full bg-black/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Shadat" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Your Email</label>
                                    <input type="email" className="w-full bg-black/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Shadatrolli05@gmail.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Message</label>
                                    <textarea rows={5} className="w-full bg-black/50 border border-zinc-700 rounded-xl p-4 text-white placeholder-zinc-700 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
                                </div>
                                <button type="submit" className="w-full py-4 bg-primary text-black font-bold text-lg rounded-xl hover:bg-yellow-400 transition-all transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/20">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
