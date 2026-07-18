"use client";
import { useEffect, useRef, useState } from "react";
import TopBar from "./Topbar";
import Navbar from "./Navbar/Navbar";

export default function Header() {
  const [scrollState, setScrollState] = useState<"top" | "down" | "up">("top");
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentY = window.scrollY;
          const scrollingDown = currentY > lastScrollY.current;

          if (currentY <= 10) {
            // At top — show both topbar and navbar
            setScrollState("top");
          } else if (scrollingDown && currentY > 80) {
            // Scrolling down — hide both
            setScrollState("down");
          } else if (!scrollingDown) {
            // Scrolling up — show navbar only, add blur
            setScrollState("up");
          }

          lastScrollY.current = currentY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = 
    scrollState === "down" ? "header-hide" : 
    scrollState === "up" ? "header-compact" : "header-show";

  return (
    <header className={`header-wrapper ${headerClass}`}>
      <TopBar />
      <Navbar navClass={scrollState === "up" ? "blur" : ""} />
    </header>
  );
}