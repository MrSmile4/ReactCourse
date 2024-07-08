import { useEffect, useState } from "react";
import "./scroll-progress-bar.css";

export function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const percent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="root">
      <div
        className="progressBar"
        style={{
          width: `${scrollPercent}%`,
        }}
      />
    </div>
  );
}

export default ScrollProgressBar;
