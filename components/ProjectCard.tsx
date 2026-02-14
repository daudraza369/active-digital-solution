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
    <div className="rounded-[10px] overflow-hidden border border-trg-border bg-trg-card group transition-all duration-300 hover:border-trg-accent/30 hover:-translate-y-5">
      <div className="aspect-video relative bg-trg-card">
        <Image
          src={thumbnail}
          alt={name}
          fill
          className="object-cover transition group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 bg-[radial-gradient(ellipse_at_top_right,rgba(0,225,255,0.14)_0%,#01141D_50%)] border-t border-trg-border">
        <h3 className="font-orbitron text-lg font-medium text-trg-primary mb-2">{name}</h3>
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-trg-accent hover:text-trg-accent/80 font-medium transition"
        >
          View Website
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

