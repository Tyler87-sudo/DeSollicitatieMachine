"use client";

import { useEffect } from "react";
import anime from "animejs";
import Card from "./components/card";
import ImageBox from "./components/imagebox"; // Your ImageBox component

export default function Home() {
  useEffect(() => {
    const stack = document.querySelectorAll(".image");

    // Handle mouseenter
    stack.forEach((image) => {
      // Cast image to HTMLElement to access the 'style' property
      const imageElement = image as HTMLElement;

      imageElement.addEventListener("mouseenter", () => {
        imageElement.style.position = "relative"; // Ensure position is set for zIndex
        imageElement.style.zIndex = "10"; // Increase z-index on hover

        anime({
          targets: imageElement,
          scale: 1.5,
          keyframes : [
            {translateX: "0vw"},
            {translateX: "50vw"},
          ],
          duration: 1000,
          easing: "easeInOutSine",
        });
      });
    });

    // Handle mouseleave
    stack.forEach((image) => {
      // Cast image to HTMLElement to access the 'style' property
      const imageElement = image as HTMLElement;

      imageElement.addEventListener("mouseleave", () => {
        anime({
          delay: 500,
          targets: imageElement,
          scale: 1,
          duration: 300,
          keyframes : [
            {translateX: 0},
          ],
          easing: "easeInOutSine",
          complete: () => {
            imageElement.style.zIndex = "1"; // Reset z-index after animation
          },
        });
      });
    });

    // Clean up event listeners when the component is unmounted
    return () => {
      stack.forEach((image) => {
        const imageElement = image as HTMLElement;
        imageElement.removeEventListener("mouseenter", () => {});
        imageElement.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <div className="box grid grid-rows-1 grid-cols-3">
      <div className="m-3 col-span-3">
        <Card
          outercardstyle={{ height: "100%", backgroundColor: "#FFFDD0"}}
          title="De Solliciteer Machine"
          text="Welkom bij de solliciteer machine! Op deze website heb ik alles verzameld wat ik kan vinden over het solliciteerproces. Als het goed is, is alles hier voldoende om je te helpen!
          Hieronder staan 3 voorbeelden. Van links naar rechts: Voorbeeld CV, voorbeeld brief, voorbeeld gesprek. Links heb je een link naar de tippendoos. Hier staat een super grote lijst met tips. Ook is er een pagina met statistieken die je de beste tips laten zien + hoe goed een tip werkt."
        />
      </div>
      <div>
        <div className="ml-2 mr-2 p-1">
          <ImageBox classNames="image" text="Voorbeeld CV" imglink="cv.jpg" />
        </div>
      </div>
      <div>
        <div className="ml-2 mr-2 p-1">
          <ImageBox classNames="image" text="Voorbeeld CV" imglink="cv.jpg" />
        </div>
      </div>
      <div>
        <div className="ml-2 mr-2 p-1">
          <ImageBox classNames="image" text="Voorbeeld CV" imglink="cv.jpg" />
        </div>
      </div>
    </div>
  );
}
