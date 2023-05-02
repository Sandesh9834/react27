import { useState } from "react";

export const About = ({ heading, name, learning }) => {
  const [btn, setBtn] = useState(true);

  return (
    <div>
      <h1>{heading}</h1>
      <h2>{name}</h2>
      <button onClick={() => setBtn(!btn)}>
        {btn ? "Know More!" : "Show Less"}
      </button>
      <p style={{ display: btn ? "none" : "block" }}>{learning}</p>
    </div>
  );
};
