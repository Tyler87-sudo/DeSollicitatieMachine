"use client";

import { useEffect } from "react";
import anime from "animejs";
import Card from "./components/card";
import ImageBox from "./components/imagebox";

export default function Home() {


  function getCurrentScale(element : HTMLElement) {
    const style = window.getComputedStyle(element);
    const transform = style.transform;
  
    if (transform === "none") return 1; // Default scale if no transform is applied
  
    const matrix = new DOMMatrix(transform); // Parse transform matrix
    return matrix.a; // 'a' represents scaleX, 'd' represents scaleY
  }
  
  useEffect(() => {
    const stack = document.querySelectorAll(".popout");

    let currentAnimation: anime.AnimeInstance | null = null;
  
    stack.forEach((image) => {
      const imageElement = image as HTMLElement;
      const imagebox = imageElement.querySelector("img") as HTMLImageElement;

      if (currentAnimation) {
        anime.remove(imageElement) 
      }

      if (!imagebox) return;
    
      imageElement.addEventListener("mouseenter", () => {
        if (currentAnimation) {
          anime.remove(imageElement); 
        }

        imageElement.style.zIndex = "9999"; 
        imageElement.style.position = "relative";

        const currentScale = getCurrentScale(imageElement);
        console.log("Current Scale:", currentScale);

        anime({
          targets: imageElement,
          scale: [`${currentScale}`, 1.5],
          duration: 1000,
          easing: "easeInOutQuad",
        });
      });

      imageElement.addEventListener("mouseleave", () => {
        
        imageElement.style.zIndex = "1";
        const currentScale = getCurrentScale(imageElement);
        console.log("Current Scale:", currentScale);

          anime({
            targets: imageElement,
            scale: [`${currentScale}`, 1.0], 
            duration: 1000,
            easing: "easeInOutQuad",
          });
      });
    });
  }, []); 



  return (
    <div className="min-h-screen h-full box grid grid-rows-1">
      <div className="ml-3 mr-3 mt-3 mb-3 col-span-3">
        <Card
          outercardstyle={{ height: "100%", backgroundColor: "#FFFDD0"}}
          title="De Solliciteer Machine"
          text="Welkom bij de solliciteer machine! Op deze website heb ik alles verzameld wat ik kan vinden over het solliciteerproces. Als het goed is, is alles hier voldoende om je te helpen!
          Hieronder staan 3 voorbeelden. Van links naar rechts: Voorbeeld CV, voorbeeld brief, voorbeeld gesprek. Links heb je een link naar de tippendoos. Hier staat een super grote lijst met tips. Ook is er een pagina met statistieken die je de beste tips laten zien + hoe goed een tip werkt."
        />
      </div>
      <div>
        <div className="ml-2 mr-2 p-1">
          <ImageBox classNames="popout image" text="Voorbeeld CV" imglink="cv.jpg" />
        </div>
      </div>
      <div>
        <div className="ml-2 mr-2 p-1">
          <ImageBox classNames="popout image" text="Voorbeeld CV" imglink="cv.jpg" />
        </div>
      </div>
      <div>
        <div className="ml-2 mr-2 p-1">
          <ImageBox classNames="popout image" text="Voorbeeld CV" imglink="cv.jpg" />
        </div>
      </div>
    </div>
  );
}
