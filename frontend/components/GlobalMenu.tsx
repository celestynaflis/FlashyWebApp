"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type MobileMenuItem = {
  href: string;
  label: string;
  dotClassName: string;
};

const desktopItems = [
  { href: "/", label: "My flash cards library" },
  { href: "/cards-set-creator", label: "Create new set" },
] as const;

const mobileItems: MobileMenuItem[] = [
  { href: "/", label: "My flash cards library", dotClassName: "bg-[#ff70a6]" },
  { href: "/cards-set-creator", label: "Create new set", dotClassName: "bg-[#ff9770]" },
];

export default function GlobalMenu() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-background shadow-[0_2px_4px_rgba(0,0,0,0.12)]">
        <div className="app-container flex h-[52px] items-center">
          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden cursor-pointer"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu-drawer"
          >
            <Image src="/hamburger-menu.svg" alt="Menu" width={40} height={10} priority />
          </button>

          <Link href="/" className="hidden md:inline-flex" aria-label="Flashy home">
            <Image src="/logo-desktop-menu.svg" alt="Flashy" width={123} height={43} priority />
          </Link>

          <Link
            href="/"
            className="absolute left-1/2 -translate-x-1/2 md:hidden"
            aria-label="Flashy home"
          >
            <Image src="/logo-mobile-menu.svg" alt="Flashy" width={84} height={30} priority />
          </Link>

          <nav className="ml-16 hidden items-center gap-16 text-[16px] leading-none md:flex">
            {desktopItems.map((item) => {
              const isActive = pathname === item.href;

              return (
              <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-pink ${
                      isActive ? "text-pink" : "text-black"
                  }`}
              >
                {item.label}
              </Link> );
            })}
          </nav>
        </div>
      </header>

      {isMenuOpen ? (
        <div className="fixed inset-0 z-50 md:hidden" role="dialog" aria-modal="true">
          <button
            type="button"
            className="absolute inset-0 bg-black/20"
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close menu"
          />

          <aside
            id="mobile-menu-drawer"
            className="absolute left-0 top-0 h-full w-[45vw] min-w-[270px] max-w-[320px] bg-background px-4 pb-8 pt-5 shadow-[-2px_0_8px_rgba(0,0,0,0.2)]"
          >
            <p className="text-[16px] tracking-[0.08em] text-black">MENU</p>

            <nav className="mt-8 space-y-5">
              {mobileItems.map((item) => {
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center gap-4 text-[16px] leading-none transition-colors hover:text-pink ${
                      isActive ? "text-pink" : "text-black"
                    }`}
                  >
                    <span className={`h-3 w-3 rounded-[3px] ${item.dotClassName}`} aria-hidden />
                    {item.label}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}

