"use client";

import classNames from "classnames";

// Default Classname (Tailwind) styling for the Card
const defaultStyling =
  "card p-1 glass h-80 max-[600px]:h-52 overflow-hidden";

export default function Card({
  extension = "-500px",
  className,
  innercardstyle,
  outercardstyle,
  hrefbtn,
  hrefimg,
  description = "",
  title = "",
  text = "",
}: {
  extension?: string;
  className?: string;
  innercardstyle?: React.CSSProperties;
  outercardstyle?: React.CSSProperties;
  hrefbtn?: string;
  hrefimg?: string;
  description?: string;
  title?: string;
  text?: string;
}) {
  return (
    <div
      style={outercardstyle || {backgroundColor: "#FFFDD0", height: "60%"}}
      className={classNames(defaultStyling, className)}
    >
      {hrefimg && (
        <figure className="relative overflow-hidden">
          {/* Aspect-ratio container */}
          <div className="relative w-full" style={{ paddingTop: "30%" }}>
            <img
              className="absolute top-0 left-0"
              src={hrefimg}
              alt={description || "Image"}
            />
          </div>
        </figure>
      )}
      <div
        style={innercardstyle || {}}
        className="card-body p-4"
      >
        {title && <h2 className="card-title self-center text-lg font-semibold text-center">{title}</h2>}
        {text && <p className="text-sm">{text}</p>}
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
