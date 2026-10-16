"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ResumeDownload from "./ResumeDownload";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const pathname = usePathname();
  const currentPath = pathname === "/" ? "/" : pathname?.replace(/\/$/, "");

  return (
    <nav className="navbar">
      <div className="buttons">
        {links.map((link) => (
          <Link
            aria-current={currentPath === link.href ? "page" : undefined}
            className={currentPath === link.href ? "active" : undefined}
            href={link.href}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
        <ResumeDownload>Resume</ResumeDownload>
      </div>
    </nav>
  );
}
