"use client";

import Image from "next/image";
import { useEffect } from "react";
import anime from "animejs"

export default function Home() {
  useEffect(() => {
    const stack = document.querySelectorAll(`div.first`);

    stack.forEach((div) => {
      div.addEventListener("mouseenter", () => {
        anime({
          targets: ".first",
          translateX: "500px",
          duration: 500,
          easing: "easeInOutSine",
        });
      });

      div.addEventListener("mouseleave", () => {
        anime({
          targets: ".first",
          translateX: 0,
          duration: 500,
          easing: "easeInOutSine",
        });
      });
    });

    return () => {
      stack.forEach((div) => {
        div.removeEventListener("mouseenter", () => {});
        div.removeEventListener("mouseleave", () => {});
      });
    };
  },);

  return (
    <div className="stack">
  <div className="first bg-primary text-primary-content grid h-20 w-32 place-content-center rounded">1</div>
  <div className="bg-accent text-accent-content grid h-20 w-32 place-content-center rounded">2</div>
  <div className="bg-secondary text-secondary-content grid h-20 w-32 place-content-center rounded">
    3
  </div>
</div>
  )
}