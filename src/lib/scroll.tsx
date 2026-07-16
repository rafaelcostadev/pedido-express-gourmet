import type { MouseEvent } from "react";

/**
 * Unified navigation helper. Locates a section by ID, computes its position
 * relative to the document, subtracts the fixed header height, and performs
 * a smooth window scroll. Does NOT rely on CSS `scroll-behavior: smooth`.
 */
export function scrollToSection(id: string) {
  if (typeof window === "undefined") return;
  const element = document.getElementById(id);
  if (!element) return;
  const header = document.querySelector("header");
  const headerHeight = header?.getBoundingClientRect().height ?? 0;
  const top =
    element.getBoundingClientRect().top + window.scrollY - headerHeight - 16;
  window.scrollTo({ top, behavior: "smooth" });
}

/**
 * Ready-to-use onClick factory for anchor buttons/links. Prevents the default
 * hash navigation and runs the smooth scroll. Optional `before` callback lets
 * callers close menus/drawers before scrolling starts.
 */
export function handleAnchorClick(id: string, before?: () => void) {
  return (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    before?.();
    scrollToSection(id);
    if (window.history.replaceState) {
      window.history.replaceState(null, "", `#${id}`);
    }
  };
}
