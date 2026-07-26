"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure dynamic components have mounted
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
    }, 300); // 300ms delay for next/dynamic components to render

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
