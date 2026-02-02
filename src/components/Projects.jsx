
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ExternalLink, Github, Code2, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projectsData = [
    {
        title: "SplitSmart – AI Bill Splitter",
        category: "AI & Full Stack",
        description: "Built an AI-powered bill splitter that extracts receipt text using Tesseract.js and automatically identifies items. Features a responsive React interface with image upload, preview, and editable items, plus automatic equal bill splitting.",
        image: "/assets/bill-splitter.png",
        tags: ["React", "TypeScript", "Tesseract.js", "Flask"],
        link: "#",
        github: "#"
    },
    {
        title: "California House Pricing",
        category: "ML & DevOps",
        description: "End-to-end ML web app predicting housing prices using regression models. Features Flask backend with automated scaling, clean UI, and CI/CD automation via GitHub Actions and Docker.",
        image: "/assets/image-prediction.png",
        tags: ["Python", "Flask", "Docker", "Ci/Cd"],
        link: "#",
        github: "#"
    },
    {
        title: "Data Visualization Suite",
        category: "Data Science",
        description: "Interactive EDA dashboards analyzing complex datasets like Titanic and Iris. Reveals hidden patterns through correlation matrices and distribution plots using Pandas and Seaborn.",
        image: "/assets/data-viz.png",
        tags: ["Pandas", "Seaborn", "Matplotlib", "NumPy"],
        link: "#",
        github: "#"
    }
];

const ProjectCard = ({ project }) => {
    return (
        <div className="project-card group relative bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full">
            {/* Image Section */}
            <div className="relative h-64 overflow-hidden shrink-0">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10"></div>

                {/* Fallback Icon */}
                <div className="absolute inset-0 flex items-center justify-center bg-zinc-800 text-zinc-700">
                    <Code2 size={64} opacity={0.3} />
                </div>

                <img
                    src={project.image}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    onError={(e) => { e.target.style.display = 'none' }}
                />
            </div>

            {/* Content Section */}
            <div className="p-8 flex flex-col flex-grow relative z-20 bg-zinc-900">
                <div className="mb-4">
                    <span className="inline-block px-3 py-1 text-[10px] font-bold tracking-widest text-black uppercase bg-primary rounded-full">
                        {project.category}
                    </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary transition-colors flex items-center justify-between">
                    {project.title}
                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0" size={20} />
                </h3>

                <p className="text-gray-400 mb-6 text-sm leading-relaxed flex-grow">
                    {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((tag, i) => (
                        <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-400 bg-black border border-zinc-800 rounded">
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 border-t border-white/10 pt-6 mt-auto">
                    <a href={project.link} className="flex items-center gap-2 text-sm font-bold text-white hover:text-primary transition-colors">
                        <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={project.github} className="flex items-center gap-2 text-sm font-bold text-gray-400 hover:text-white transition-colors">
                        <Github size={16} /> Source Code
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const container = useRef();

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Ensure cards are visible by default in case animation fails, 
            // but set immediate initial state for animation
            gsap.set(".project-card", { y: 100, opacity: 0 });

            gsap.to(".project-card", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 75%",
                },
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out"
            });
        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="projects" ref={container} className="py-32 bg-black relative">
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Portfolio</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Selected Works
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
