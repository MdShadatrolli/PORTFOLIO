
import { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Database, Brain, Globe, Server, BarChart, Terminal } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const SkillItem = ({ name, level }) => (
    <div className="mb-6 group">
        <div className="flex justify-between items-end mb-2">
            <span className="text-gray-200 font-bold text-sm tracking-wide group-hover:text-white transition-colors">{name}</span>
            <span className="text-primary font-mono text-xs">{level}%</span>
        </div>
        <div className="h-2 w-full bg-zinc-800 rounded-full overflow-hidden relative">
            <div
                className="h-full bg-primary rounded-full relative skill-progress group-hover:shadow-[0_0_10px_#FFD700] transition-shadow duration-300"
                style={{ width: `${level}%` }}
            >
                <div className="absolute inset-0 bg-white/30 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
        </div>
    </div>
);

const SkillCategory = ({ title, icon: Icon, skills }) => (
    <div className="skill-category h-full bg-zinc-900 border border-zinc-800 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
        <div className="flex items-center gap-3 mb-8 pb-4 border-b border-zinc-800">
            <div className="p-2 bg-primary text-black rounded-lg">
                <Icon size={20} className="stroke-[3]" />
            </div>
            <h3 className="text-xl font-bold text-white tracking-wide">{title}</h3>
        </div>
        <div>
            {skills.map((skill, i) => (
                <SkillItem key={i} name={skill.name} level={skill.level} />
            ))}
        </div>
    </div>
);

const Skills = () => {
    const container = useRef();

    const skillSets = [
        {
            title: "Languages",
            icon: Terminal,
            skills: [
                { name: "Python", level: 95 },
                { name: "C++", level: 85 },
                { name: "Java", level: 80 },
                { name: "C", level: 85 }
            ]
        },
        {
            title: "Tools & Platforms",
            icon: Server,
            skills: [
                { name: "Pandas / NumPy", level: 90 },
                { name: "Scikit-learn", level: 85 },
                { name: "Docker / Linux", level: 80 },
                { name: "Flask", level: 85 }
            ]
        },
        {
            title: "Soft Skills",
            icon: Brain,
            skills: [
                { name: "Problem Solving", level: 95 },
                { name: "Logical Thinking", level: 90 },
                { name: "Project Management", level: 85 },
                { name: "Adaptability", level: 90 }
            ]
        }
    ];

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            // Animate only the progress bars to ensure content is always visible
            gsap.from(".skill-progress", {
                scrollTrigger: {
                    trigger: container.current,
                    start: "top 80%",
                },
                width: 0,
                duration: 1.2,
                ease: "power2.out",
                stagger: 0.05
            });

        }, container);
        return () => ctx.revert();
    }, []);

    return (
        <section id="skills" ref={container} className="py-32 bg-zinc-950 px-6 relative">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-20">
                    <h2 className="text-primary font-mono text-sm tracking-widest uppercase mb-4">Expertise</h2>
                    <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        Technical Arsenal
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillSets.map((set, i) => (
                        <SkillCategory key={i} title={set.title} icon={set.icon} skills={set.skills} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
