import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Contact() {
    return (
        <section className="py-24 bg-background min-h-screen">

            <div className="text-center mb-16 animate-slide-up">
                <span className="text-primary font-mono text-sm tracking-wider uppercase">Get in Touch</span>
                <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
                    Contact <span className="text-gradient-primary">Me</span>
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                    Feel free to reach out for collaborations, opportunities, or just to say hello!
                </p>
            </div>

            <div className=" max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div className="grid gap-6">
                        <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <a href="mailto:revathianjana12@gmail.com" className="font-medium hover:text-primary transition-colors">
                                        revathianjana12@gmail.com
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <a href="tel:+918072756496" className="font-medium hover:text-primary transition-colors">
                                        +91 80727 56496
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <Linkedin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">LinkedIn</p>
                                    <a
                                        href="https://linkedin.com/in/revathi-anjana-025684239/"
                                        target="_blank"
                                        rel="noreferrer"
                                        className="font-medium hover:text-primary transition-colors"
                                    >
                                        View Profile
                                    </a>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="bg-gradient-card border-border hover:border-primary/50 transition-all">
                            <CardContent className="flex items-center gap-4 p-6">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-medium">Sivakasi, Tamil Nadu, India</p>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>



            </div>
        </section>
    );
}
