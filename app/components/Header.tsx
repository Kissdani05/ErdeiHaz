"use client";

import { useEffect, useMemo, useState } from "react";
import styles from "../page.module.css";

const NAV_LINKS = [
  { id: "home", label: "Főoldal" },
  { id: "rolunk", label: "Rólunk" },
  { id: "felszereltseg", label: "Felszereltség" },
  { id: "galeria", label: "Galéria" },
  { id: "arak", label: "Árak és foglalás" },
  { id: "latnivalok", label: "Látnivalók" },
  { id: "gyik", label: "GYIK" },
  { id: "kapcsolat", label: "Kapcsolat" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("home");

  const observer = useMemo(() => {
    if (typeof window === "undefined") return null;
    return new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            if (id) setActive(id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
  }, []);

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (observer) sections.forEach((el) => observer.observe(el));
    return () => {
      if (observer) sections.forEach((el) => observer.unobserve(el));
    };
  }, [observer]);

  useEffect(() => {
    const onResize = () => setOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <a href="#home" className={styles.brand} onClick={() => setOpen(false)}>
          Kicsim
        </a>
        <nav className={`${styles.nav} ${open ? styles.navOpen : ""}`}>
          {NAV_LINKS.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`${styles.navLink} ${
                active === link.id ? styles.active : ""
              }`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Menü"
          className={styles.burger}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
