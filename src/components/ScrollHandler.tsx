"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();
  const lastScrolledPath = useRef("");

  useEffect(() => {
    // If we've already scrolled to this exact path during this session,
    // don't scroll again! This prevents annoying jumps on Next.js Hot Reload.
    if (lastScrolledPath.current === pathname) return;
    lastScrolledPath.current = pathname;

    const timeout = setTimeout(() => {
      let sectionId = "";
      if (pathname === "/services") sectionId = "services";
      else if (pathname === "/how-we-work") sectionId = "how-we-work";
      else if (pathname === "/why-us") sectionId = "why-us";
      else if (pathname === "/contact") sectionId = "contact";
      else if (pathname === "/home" || pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, 300);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
