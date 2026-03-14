"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const SPLASH_DURATION_MS = 3000;
const SPLASH_FADE_DURATION_MS = 350;
const SPLASH_SEEN_KEY = "flashy:splash-seen";

type SplashGateProps = {
  children: React.ReactNode;
};

export default function SplashGate({ children }: SplashGateProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const hasSeenSplash = window.sessionStorage.getItem(SPLASH_SEEN_KEY) === "1";

    if (hasSeenSplash) {
      return;
    }

    setIsVisible(true);
    window.sessionStorage.setItem(SPLASH_SEEN_KEY, "1");

    const fadeTimer = window.setTimeout(
      () => setIsFading(true),
      SPLASH_DURATION_MS - SPLASH_FADE_DURATION_MS,
    );

    const hideTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, SPLASH_DURATION_MS);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(hideTimer);
    };
  }, []);

  if (!isVisible) {
    return <>{children}</>;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] grid place-items-center bg-white transition-opacity duration-[350ms] ease-out ${
        isFading ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="grid justify-items-center gap-14">
        <Image src="/logo.svg" alt="Flashy logo" width={134} height={87} priority />
        <p className="text-center text-[clamp(1.1rem,2.7vw,2.7rem)] leading-[1.2] text-black">
          Smart Flashcards for Smarter Learning
        </p>
      </div>
    </div>
  );
}
