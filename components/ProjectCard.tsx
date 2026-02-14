import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  name: string;
  thumbnail: string;
  url: string;
}

export default function ProjectCard({ name, thumbnail, url }: ProjectCardProps) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg overflow-hidden hover:border-accent transition group">
      <div className="aspect-video relative bg-dark-bg">
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{name}</h3>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition"
        >
          View Website
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
