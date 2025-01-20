import React, { useRef } from "react";
import Button from "./Button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const List = ["All", "Music", "Trending", "Gaming", "React", "Angular", "Vue", "R", "Matlab", "Julia"];

const ButtonList = () => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -200, // Scroll by 200px to the left
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200, // Scroll by 200px to the right
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative flex items-center w-full h-16 overflow-hidden">
      {/* Left Arrow */}
      <div className="absolute left-0 flex items-center justify-center bg-white z-10 h-full p-2 cursor-pointer">
        <FaArrowLeft onClick={scrollLeft} className="text-xl text-gray-700" />
      </div>

      {/* Scrollable Content */}
      <div
        ref={scrollContainerRef}
        className="flex overflow-x-auto whitespace-nowrap h-full no-scrollbar items-center px-10 gap-2"
        style={{ scrollBehavior: "smooth" }}
      >
        {List.map((item, index) => (
          <Button key={index} name={item} />
        ))}
      </div>

      {/* Right Arrow */}
      
    </div>
  );
};

export default ButtonList;
