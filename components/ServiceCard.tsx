import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  name: string;
  description: string;
  href: string;
}

export default function ServiceCard({ name, description, href }: ServiceCardProps) {
  return (
    <div className="bg-dark-card border border-dark-border rounded-lg p-6 hover:border-accent transition group">
      <h3 className="text-xl font-semibold text-accent mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <Link
        href={href}
        className="inline-flex items-center gap-2 text-accent hover:text-accent-hover transition group-hover:gap-3"
      >
        Read More
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}
