import React, { useState, useEffect } from "react";

const BackToTopButton: React.FC = () => {
  const [showButton, setShowButton] = useState(false);
  const [borderPosition, setBorderPosition] = useState(0);
  const [borderColor, setBorderColor] = useState(generateRandomColor());

  function generateRandomColor() {
    const randomRed = Math.floor(Math.random() * 256);
    const randomGreen = Math.floor(Math.random() * 256);
    const randomBlue = Math.floor(Math.random() * 256);
    return `rgb(${randomRed},${randomGreen},${randomBlue})`;
  }

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setShowButton(true);

      // Calculate the border position based on scroll position
      setBorderPosition((window.scrollY - 100) * 5); // Adjust the factor for the desired circular movement speed

      // Update the border color
      setBorderColor(generateRandomColor());
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      className={`${
        showButton ? "opacity-100" : "opacity-0"
      } fixed right-1 bottom-2 border-4 p-2 rounded-full bg-white`}
      style={{
        transform: `translateX(-50%) translateY(-50%) rotate(${borderPosition}deg)`,
        borderColor: borderColor,
      }}
      onClick={scrollToTop}
    >
      ▲
    </button>
  );
};

export default BackToTopButton;