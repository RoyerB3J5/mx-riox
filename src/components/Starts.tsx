import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import FormReview from "./FormReview";

function Starts() {
  const [hovered, setHovered] = useState<number | null>(null);
  const [rating, setRating] = useState<number | null>(null);
  const showForm = rating !== null && rating <= 3;
  const total = 5;
  const reviewLink = "https://maps.app.goo.gl/7whydDpD3D1kb4ZS7";

  // Move any client-only side effects (redirect) into useEffect so SSR won't break.
  useEffect(() => {
    if (rating !== null && rating === total - 1) {
      if (typeof window !== "undefined") {
        window.location.href = reviewLink;
      }
    }
  }, [rating]);

  const handleRatingSelect = (index: number) => {
    setRating(index);
  };

  const STAR_KEYS = ["s1", "s2", "s3", "s4", "s5"];

  return (
    <>
      <div className="flex justify-center items-center gap-5 px-5">
        {STAR_KEYS.map((key, idx) => {
          const activeIndex = hovered !== null ? hovered : rating;
          const isActive = activeIndex !== null && idx <= activeIndex;

          return (
            <button
              key={key}
              type="button"
              aria-label={`Rate ${idx + 1} stars`}
              className="cursor-pointer transition-colors duration-150 bg-transparent border-0 p-0"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              onClick={() => handleRatingSelect(idx)}
            >
              {isActive ? (
                <FaStar size={24} className="text-yellow-300" />
              ) : (
                <FaStar size={24} className="text-gray-200" />
              )}
            </button>
          );
        })}
      </div>
      {showForm && <FormReview />}
    </>
  );
}

export default Starts;
