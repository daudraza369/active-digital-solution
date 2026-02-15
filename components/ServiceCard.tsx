import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
  image?: string;
}

export default function ServiceCard({ name, description, href, image }: ServiceCardProps) {
  return (
    <div className="trg-card group relative overflow-hidden min-h-[280px] flex flex-col">
      {/* Background image layer - separate from card so hover doesn't obscure it */}
      {image && (
        <>
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: `url(${image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(0,12,20,0.7) 0%, rgba(0,12,20,0.88) 50%, rgba(1,20,29,0.95) 100%)",
            }}
          />
        </>
      )}
      <div className="relative z-10 flex flex-col flex-1">
        <h3 className="font-orbitron text-xl font-medium text-trg-primary mb-2">{name}</h3>
        <p className="text-trg-text/80 font-light text-sm mb-4 flex-1">{description}</p>
        <Link
          href={href}
          className="inline-flex items-center gap-2 text-trg-accent hover:text-trg-accent/80 font-medium transition group-hover:gap-3"
        >
          Read More
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
