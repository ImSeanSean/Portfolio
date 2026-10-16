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
    <nav aria-label="Primary navigation" className="navbar">
      <Link aria-label="Sean Rad P. Alberto home" className="nav-brand" href="/">
        <span aria-hidden="true" className="nav-brand-mark">SR</span>
        <span className="nav-brand-name">Sean Alberto</span>
      </Link>
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
      <Link className="nav-cta" href="/contact">
        Let&apos;s Connect <span aria-hidden="true">↗</span>
      </Link>
    </nav>
  );
}
