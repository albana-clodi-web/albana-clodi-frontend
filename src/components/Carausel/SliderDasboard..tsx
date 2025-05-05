import { useCallback, useEffect, useRef, useState } from "react";

function SliderDashboard() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [
    "https://assets.jenius.com/assets/2018/08/03063131/belanja-hemat.jpg",
    "https://assets.jenius.com/assets/2018/08/03063131/belanja-hemat.jpg",
    "https://assets.jenius.com/assets/2018/08/03063131/belanja-hemat.jpg",
  ];

  const thumbnailRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: { pageX: number }) => {
    isDragging.current = true;
    if (thumbnailRef.current) {
      startX.current = e.pageX - thumbnailRef.current.offsetLeft;
    }
    if (thumbnailRef.current) {
      scrollLeft.current = thumbnailRef.current.scrollLeft;
    }
  };

  const handleMouseMove = (e: {
    preventDefault: () => void;
    pageX: number;
  }) => {
    if (!isDragging.current) return;
    e.preventDefault();
    const x = e.pageX - (thumbnailRef.current?.offsetLeft || 0);
    const walk = (x - startX.current) * 1.5; // drag speed
    if (thumbnailRef.current) {
      thumbnailRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  }, [slides.length]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    const thumbnailElement = thumbnailRef.current;

    if (thumbnailElement) {
      thumbnailElement.addEventListener("mousedown", handleMouseDown);
      thumbnailElement.addEventListener("mousemove", handleMouseMove);
      thumbnailElement.addEventListener("mouseup", handleMouseUp);
      thumbnailElement.addEventListener("mouseleave", handleMouseUp);
    }

    return () => {
      clearInterval(interval);
      if (thumbnailElement) {
        thumbnailElement.removeEventListener("mousedown", handleMouseDown);
        thumbnailElement.removeEventListener("mousemove", handleMouseMove);
        thumbnailElement.removeEventListener("mouseup", handleMouseUp);
        thumbnailElement.removeEventListener("mouseleave", handleMouseUp);
      }
    };
  }, [nextSlide]);

  return (
    <div className="relative h-[144px] mx-auto">
      <div className="overflow-hidden rounded-lg shadow-md w-full h-full">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="w-full flex-shrink-0 h-full">
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* Thumbnails + Dots */}
        <div className="flex flex-col items-center mt-2 space-y-2">
          {/* Scrollable Thumbnails with Mouse Drag */}
          <div
            ref={thumbnailRef}
            className="overflow-x-auto whitespace-nowrap scrollbar-hide px-2 w-full cursor-grab active:cursor-grabbing"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}>
            {slides.map((slide, index) => (
              <img
                key={index}
                src={slide}
                alt={`Thumbnail ${index + 1}`}
                className={`inline-block w-16 h-16 object-cover rounded-lg cursor-pointer mx-1 ${
                  index === currentIndex ? "ring-2 ring-blue-500" : ""
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-blue-500 scale-110"
                    : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderDashboard;
