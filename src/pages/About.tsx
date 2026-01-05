import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, Trophy, Award, Code2, Database, Wrench } from "lucide-react";

export default function About() {
    return (
        <section className="py-24 bg-background min-h-screen">
            <div className="container px-6 mx-auto">
                {/* Professional Summary */}
                <div className="text-center mb-16 animate-slide-up">
                    <span className="text-primary font-mono text-sm tracking-wider uppercase">Profile</span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                        About <span className="text-gradient-primary">Me</span>
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                        Final-year MCA student with strong expertise in web development, databases, and problem-solving.
                        Experienced in building real-world PHP–MySQL applications with a focus on functionality, scalability,
                        and user experience. Eager to apply academic knowledge to professional software development and
                        database management roles.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Education Column */}
                    <div className="lg:col-span-2 space-y-8">
                        <div className="flex items-center gap-3 mb-6">
                            <BookOpen className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold">Education</h3>
                        </div>

                        <div className="space-y-6">
                            <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all">
                                <CardHeader>
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                        <div>
                                            <CardTitle className="text-xl text-primary">Master of Computer Applications (MCA)</CardTitle>
                                            <p className="text-lg font-medium mt-1">Mepco Schlenk Engineering College, Sivakasi</p>
                                        </div>
                                        <Badge variant="secondary">2024 – 2026</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">CGPA: 8.49 (2nd Sem) – Pursuing</p>
                                </CardContent>
                            </Card>

                            <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all">
                                <CardHeader>
                                    <div className="flex justify-between items-start flex-wrap gap-2">
                                        <div>
                                            <CardTitle className="text-xl text-primary">B.Com with Computer Applications</CardTitle>
                                            <p className="text-lg font-medium mt-1">Sri S. Ramasamy Naidu Memorial College, Sattur</p>
                                        </div>
                                        <Badge variant="secondary">2021 – 2024</Badge>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">CGPA: 8.51</p>
                                </CardContent>
                            </Card>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card className="bg-gradient-card border-border">
                                    <CardHeader>
                                        <CardTitle className="text-base">Class XII</CardTitle>
                                        <p className="text-sm text-muted-foreground">Sri Kalaivani Matric Hr. Sec. School</p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-primary">94%</span>
                                            <span className="text-xs text-muted-foreground">2021</span>
                                        </div>
                                    </CardContent>
                                </Card>
                                <Card className="bg-gradient-card border-border">
                                    <CardHeader>
                                        <CardTitle className="text-base">Class X</CardTitle>
                                        <p className="text-sm text-muted-foreground">Sri Kalaivani Matric Hr. Sec. School</p>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="flex justify-between items-center">
                                            <span className="font-bold text-primary">90%</span>
                                            <span className="text-xs text-muted-foreground">2019</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>

                    {/* Skills Column */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center gap-3 mb-6">
                                <Code2 className="w-6 h-6 text-primary" />
                                <h3 className="text-2xl font-bold">Technical Skills</h3>
                            </div>
                            <Card className="bg-gradient-card border-border">
                                <CardContent className="pt-6 space-y-6">
                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                                            <Code2 className="w-4 h-4 text-blue-400" /> Languages
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Python", "C", "Java (Basics)", "HTML", "CSS", "PHP"].map(skill => (
                                                <Badge key={skill} variant="outline" className="bg-primary/10 hover:bg-primary/20">{skill}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                                            <Database className="w-4 h-4 text-green-400" /> Database
                                        </h4>
                                        <Badge variant="outline" className="bg-primary/10 hover:bg-primary/20">MySQL</Badge>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3 flex items-center gap-2">
                                            <Wrench className="w-4 h-4 text-yellow-400" /> Tools
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["XAMPP", "Tableau (Basics)", "VS Code", "Git"].map(tool => (
                                                <Badge key={tool} variant="outline" className="bg-primary/10 hover:bg-primary/20">{tool}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold mb-3">Core Competencies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {["Problem-Solving", "Quick Learning", "Team Collaboration"].map(skill => (
                                                <Badge key={skill} className="bg-blue-600/20 text-blue-200 hover:bg-blue-600/30">{skill}</Badge>
                                            ))}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>

                {/* Certifications & Achievements Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Award className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold">Certifications</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Internet of Things – NPTEL",
                                "Programming in Java – NPTEL",
                                "Java (Basics) – HackerRank",
                                "SQL (Intermediate) – HackerRank",
                                "Explore Machine Learning Using Python – Infosys Springboard",
                                "English for Technical Professionals – IEEE"
                            ].map((cert, index) => (
                                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3 hover:bg-white/10 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-green-400" />
                                    <span>{cert}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <Trophy className="w-6 h-6 text-primary" />
                            <h3 className="text-2xl font-bold">Achievements & Workshops</h3>
                        </div>
                        <div className="space-y-4">
                            {[
                                "Organized the Treasure Hunt event at Gyanmitra (College Fest)",
                                "State-level Throwball Player (District & State)",
                                "App Development event – Kalasalingam Academy (2025)",
                                "AI–Conclave - Mepco Schlenk Engineering College (2025)",
                                "Data Analytics MasterClass by NoviTech (2025)",
                                "Power BI Bootcamp by NoviTech (Dec 2025)"
                            ].map((achievement, index) => (
                                <div key={index} className="p-4 rounded-lg bg-white/5 border border-white/10 flex items-start gap-3 hover:bg-white/10 transition-colors">
                                    <div className="w-2 h-2 rounded-full bg-yellow-400 mt-2" />
                                    <span>{achievement}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
