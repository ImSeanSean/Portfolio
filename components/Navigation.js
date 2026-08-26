"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const assetPath = (path) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="buttons">
        {links.map((link) => (
          <Link
            className={pathname === link.href ? "active" : undefined}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
        <a download href={assetPath("/sean-rad-alberto-resume.pdf")}>Resume</a>
      </div>
    </nav>
  );
}
