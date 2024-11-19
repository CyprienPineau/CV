import { useEffect, useState } from "react";
import "./Intro.css";

const Intro = () => {
  const [endIntro, setEndIntro] = useState(false);

  //temporiration pour montrer l'intro
  useEffect(() => {
    setTimeout(() => {
      setEndIntro(true);
    }, 1000);
  }, []);

  return (
    <div className={endIntro ? "intro end" : "intro"}>
      <svg
        className="triangle1"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M-3.49691e-06 0L80 -3.49691e-06L80 80L-3.49691e-06 0Z"
          fill="#303030"
        />
      </svg>

      <svg
        className="triangle1"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M80 80L1.04907e-05 80L0 1.04907e-05L80 80Z" fill="#303030" />
      </svg>
      <svg
        className="triangle2"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M80 0L80 80L0 80L80 0Z" fill="#303030" />
      </svg>

      <svg
        className="triangle2"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 80L-6.99382e-06 6.99382e-06L80 0L0 80Z" fill="#303030" />
      </svg>
    </div>
  );
};

export default Intro;
