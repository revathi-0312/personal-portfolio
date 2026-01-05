interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    image: string;
}

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card"
import { Button } from "./ui/button"

export default function ProjectCard({ title, description, link, image }: ProjectCardProps) {
    return (
        <Card className="overflow-hidden bg-white/5 border-white/10 hover:border-blue-500/50 transition-all hover:shadow-lg hover:shadow-blue-500/10 group">
            <div className="aspect-video w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <CardHeader>
                <CardTitle className="text-xl text-blue-400">{title}</CardTitle>
                <CardDescription className="text-gray-400">Project Overview</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-gray-300">{description}</p>
            </CardContent>
            <CardFooter>
                <Button asChild variant="secondary" className="w-full">
                    <a href={link} target="_blank" rel="noreferrer">
                        View Project
                    </a>
                </Button>
            </CardFooter>
        </Card>
    );
}
