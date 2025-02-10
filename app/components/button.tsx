import styling from "app/styling.module.css"

import React from 'react';

const defaultStyle = {
  backgroundColor: "lightBlue",
}

export default function Button({style,link}: {style?: React.CSSProperties;link: string;}) {
  return (
    <a href={link}>
      <button style={style || defaultStyle }>Click me</button>
    </a>
  );
}
