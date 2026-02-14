import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
}

export default function ServiceCard({ name, description, href }: ServiceCardProps) {
  return (
    <div className="trg-card group">
      <h3 className="font-orbitron text-xl font-medium text-trg-primary mb-2">{name}</h3>
      <p className="text-trg-text/80 font-light text-sm mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-trg-accent hover:text-trg-accent/80 font-medium transition group-hover:gap-3"
      >
        Read More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
