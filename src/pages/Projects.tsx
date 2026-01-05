import { Badge } from "@/components/ui/badge";
import { Database, Server, Code2 } from "lucide-react";


const Projects = () => {
    const projects = [
        {
            title: "Train Ticket Reservation System",
            year: "2024",
            description:
                "Designed and developed a comprehensive ticket reservation system with form validation and automated booking summaries. Improved booking efficiency by 40% with zero duplicate entries.",
            technologies: ["PHP", "MySQL", "HTML", "CSS"],
            highlights: [
                "40% improvement in booking efficiency",
                "100% accurate data storage",
                "Automated booking summaries",
            ],
            icon: Server,
            color: "from-cyan-500 to-blue-500",
            hoverBorder: "hover:border-blue-500/50",
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400"
        },
        {
            title: "Project Management System",
            year: "2025",
            description:
                "Built a role-based project management portal for efficient task allocation with secure authentication and an interactive dashboard. Reduced task delays by 35%.",
            technologies: ["PHP", "MySQL", "JavaScript", "CSS"],
            highlights: [
                "Role-based access control",
                "35% reduction in task delays",
                "Interactive dashboard",
            ],
            icon: Database,
            color: "from-purple-500 to-pink-500",
            hoverBorder: "hover:border-purple-500/50",
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400"
        },
    ];

    return (
        <section id="projects" className="py-24 bg-background min-h-screen">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16 animate-slide-up">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Portfolio</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Featured <span className="text-gradient-primary">Projects</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        Real-world applications I've built to solve practical problems.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className={`group relative p-8 rounded-2xl bg-gradient-card border border-border transition-all duration-300 shadow-card hover:shadow-glow ${project.hoverBorder}`}
                        >
                            <div className="flex items-start justify-between mb-6">
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center transition-colors ${project.iconBg} group-hover:bg-opacity-20`}>
                                    <project.icon className={`w-7 h-7 ${project.iconColor}`} />
                                </div>
                                <span className="text-muted-foreground font-mono text-sm border border-border px-2 py-1 rounded-md bg-white/5">
                                    {project.year}
                                </span>
                            </div>

                            <h3 className={`text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r ${project.color}`}>
                                {project.title}
                            </h3>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                {project.technologies.map((tech, techIndex) => (
                                    <Badge
                                        key={techIndex}
                                        variant="secondary"
                                        className="bg-white/5 text-gray-300 border-white/10 hover:bg-white/10 transition-colors"
                                    >
                                        {tech}
                                    </Badge>
                                ))}
                            </div>

                            <div className="space-y-3 pt-6 border-t border-border/50">
                                <h4 className="text-sm font-semibold text-gray-300 flex items-center gap-2">
                                    <Code2 className="w-4 h-4" /> Key Highlights
                                </h4>
                                <ul className="space-y-2">
                                    {project.highlights.map((highlight, hIndex) => (
                                        <li key={hIndex} className="flex items-start gap-2 text-sm text-gray-400">
                                            <span className={`w-1.5 h-1.5 rounded-full mt-1.5 bg-gradient-to-r ${project.color}`} />
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
