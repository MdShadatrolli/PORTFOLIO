
import { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import gsap from "gsap";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Animation for Mobile Menu
    useEffect(() => {
        if (isOpen) {
            gsap.to(".mobile-menu", { x: 0, opacity: 1, duration: 0.4, ease: "power3.out" });
            gsap.from(".mobile-link", { y: 20, opacity: 0, stagger: 0.1, delay: 0.2 });
        } else {
            gsap.to(".mobile-menu", { x: "100%", opacity: 0, duration: 0.4, ease: "power3.in" });
        }
    }, [isOpen]);

    const navLinks = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Skills", href: "#skills" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? "bg-black/80 backdrop-blur-xl border-white/10 py-4 shadow-lg shadow-primary/5"
                : "bg-transparent border-transparent py-6"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="flex items-center gap-2 group">
                    <img
                        src="/favicon.png"
                        alt="Logo"
                        className="w-10 h-10 rounded-lg shadow-[0_0_15px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform"
                    />
                    <div className="flex flex-col leading-none">
                        <span className="font-bold text-white text-lg tracking-wide group-hover:text-primary transition-colors">
                            Mohammad Shadat
                        </span>
                        <span className="text-[10px] text-gray-400 uppercase tracking-[0.2em] group-hover:text-white transition-colors">
                            Rolli
                        </span>
                    </div>
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="relative text-sm font-medium text-gray-300 hover:text-white transition-colors py-2 block group"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-primary transition-all duration-300 group-hover:w-full box-shadow-[0_0_10px_#FFD700]"></span>
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="w-px h-6 bg-white/20"></div>

                    <a
                        href="/assets/resume.pdf"
                        target="_blank"
                        className="group flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 rounded-full hover:bg-primary hover:border-primary hover:text-black transition-all duration-300 active:scale-95"
                    >
                        <span className="text-xs font-bold uppercase tracking-wider">See Resume</span>
                        <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden relative z-50 text-white hover:text-primary transition-colors p-2"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`mobile-menu fixed inset-0 bg-black/95 backdrop-blur-2xl z-40 flex flex-col items-center justify-center md:hidden translate-x-full opacity-0`}
            >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50"></div>

                <ul className="flex flex-col text-center gap-8 mb-12">
                    {navLinks.map((link) => (
                        <li key={link.name} className="mobile-link overflow-hidden">
                            <a
                                href={link.href}
                                className="block text-3xl font-bold text-white hover:text-primary transition-all hover:tracking-widest"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="/assets/resume.pdf"
                    target="_blank"
                    className="mobile-link px-8 py-4 bg-primary text-black font-bold uppercase tracking-widest rounded-full hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                >
                    Download Resume
                </a>
            </div>
        </nav>
    );
};

export default Navbar;
