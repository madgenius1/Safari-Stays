import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm" aria-label="Breadcrumb">
      <Link
        href="/"
        className="flex items-center text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
      >
        <Home size={16} />
      </Link>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight size={16} className="text-[#1A1A1A]/40" />
          {index === items.length - 1 ? (
            <span className="text-[#1A1A1A] font-medium">{item.label}</span>
          ) : (
            <Link
              href={item.href}
              className="text-[#1A1A1A]/60 hover:text-[#1A1A1A] transition-colors"
            >
              {item.label}
            </Link>
          )}
        </div>
      ))}
    </nav>
  );
}