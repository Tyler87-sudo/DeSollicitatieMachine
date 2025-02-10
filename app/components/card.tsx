"use client";

import { useEffect } from "react";
import classNames from "classnames";
import anime from "animejs/lib/anime.es.js";

// Default styling for the Card
const defaultStyling =
  "card glass bg-blue-200 h-80 max-[600px]:h-52 overflow-hidden";

export default function Card({
  extension = "-500px",
  id,
  className,
  innercardstyle,
  outercardstyle,
  hrefbtn,
  hrefimg,
  description,
  title,
  text,
}: {
  extension?: string; 
  id?: string;
  className?: string;
  innercardstyle?: React.CSSProperties;
  outercardstyle?: React.CSSProperties;
  hrefbtn?: string;
  hrefimg?: string;
  description: string;
  title: string;
  text: string;
}) {
  useEffect(() => {
    const cardImages = document.querySelectorAll(`#${id} figure img`);

    cardImages.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        anime({
          targets: img,
          translateY: {extension},
          duration: 4000,
          easing: "easeInOutSine",
        });
      });

      img.addEventListener("mouseleave", () => {
        anime({
          targets: img,
          translateY: 0,
          duration: 4000,
          easing: "easeInOutSine",
        });
      });
    });

    return () => {
      cardImages.forEach((img) => {
        img.removeEventListener("mouseenter", () => {});
        img.removeEventListener("mouseleave", () => {});
      });
    };
  }, [id]);

  return (
    <div
      id={id}
      style={outercardstyle || {}}
      className={classNames(defaultStyling, className)}
    >
      {hrefimg && (
        <figure className="relative overflow-hidden">
          {/* Aspect-ratio container */}
          <div className="relative w-full" style={{ paddingTop: "30%" }}>
            <img
              className="absolute top-0 left-0"
              src={hrefimg}
              alt={description}
            />
          </div>
        </figure>
      )}
      <div
        style={innercardstyle || {}}
        className="card-body p-4"
      >
        <h2 className="card-title text-lg font-semibold text-center">{title}</h2>
        <p className="text-sm">{text}</p>
        <div className="card-actions justify-end mt-2">
          {hrefbtn && (
            <a href={hrefbtn}>
              <button id="btn" className="btn btn-primary">Link</button>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}