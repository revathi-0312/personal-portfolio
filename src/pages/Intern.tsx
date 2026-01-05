import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Code, Terminal, CheckCircle2 } from "lucide-react";

export default function Intern() {
    return (
        <section className="py-24 bg-background min-h-screen">
            <div className="container px-6 mx-auto">
                <div className="text-center mb-16 animate-slide-up">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Experience</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        Internship <span className="text-gradient-primary">Details</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                        My professional journey and hands-on experience in the industry.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all">
                        <CardHeader className="border-b border-border/50 pb-8">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Briefcase className="w-8 h-8" />
                                    </div>
                                    <div>
                                        <CardTitle className="text-2xl text-primary">Full Stack Developer Intern</CardTitle>
                                        <h3 className="text-xl font-medium mt-1">ADigiElite</h3>
                                        <p className="text-muted-foreground flex items-center gap-2 mt-2">
                                            <Terminal className="w-4 h-4" /> Next.js & Convex Development
                                        </p>
                                    </div>
                                </div>
                                <Badge variant="secondary" className="w-fit h-fit px-4 py-1 text-sm">
                                    Present
                                </Badge>
                            </div>
                        </CardHeader>

                        <CardContent className="pt-8 space-y-8">
                            <div>
                                <h4 className="flex items-center gap-2 text-lg font-semibold mb-4 text-blue-400">
                                    <Code className="w-5 h-5" /> Tech Stack
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {["Next.js", "Convex", "TypeScript", "Tailwind CSS", "React", "Shadcn UI"].map((tech) => (
                                        <Badge key={tech} variant="outline" className="text-sm py-1 px-3 bg-primary/5 hover:bg-primary/10 border-primary/20">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-blue-400">Key Responsibilities & Achievements</h4>
                                <ul className="grid gap-3">
                                    {[
                                        "Developing scalable full-stack web applications using Next.js 14 and Convex backend.",
                                        "Implementing real-time data synchronization and reactive UI components.",
                                        "Designing modern, responsive user interfaces with Tailwind CSS and Shadcn UI.",
                                        "Optimizing application performance and ensuring type safety with TypeScript.",
                                        "Collaborating with the team to deliver high-quality software solutions."
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start gap-3 text-muted-foreground">
                                            <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                            <span className="leading-relaxed">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
}
