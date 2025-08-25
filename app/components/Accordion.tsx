"use client";

import { useEffect, useRef, useState } from "react";
import styles from "../page.module.css";

export default function Accordion({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // ensure max one open: close others on open via a simple window event bus
  useEffect(() => {
    function onAnyOpen(e: Event) {
      const detail = (e as CustomEvent<{ title: string }>).detail;
      if (detail?.title !== title) setOpen(false);
    }
    window.addEventListener("accordion:open", onAnyOpen as EventListener);
    return () => window.removeEventListener("accordion:open", onAnyOpen as EventListener);
  }, [title]);

  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ""}`}>
      <button
        className={styles.faqHeader}
        onClick={() => {
          setOpen((v) => {
            const next = !v;
            if (next) window.dispatchEvent(new CustomEvent("accordion:open", { detail: { title } }));
            return next;
          });
        }}
        aria-expanded={open}
      >
        <span>{title}</span>
        <span className={styles.faqIcon} aria-hidden>{open ? "–" : "+"}</span>
      </button>
      <div
        className={styles.faqBody}
        style={{ maxHeight: open ? (ref.current?.scrollHeight ?? 0) : 0 }}
        aria-hidden={!open}
      >
        <div ref={ref} className={styles.faqInner}>
          {children}
        </div>
      </div>
    </div>
  );
}
