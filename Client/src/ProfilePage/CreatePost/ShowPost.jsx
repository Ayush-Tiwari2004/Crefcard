import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowPost = () => {
  const [cards, setCards] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchCards = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_API_URL}/api/posts/getPosts`);
      setCards(response.data);
    } catch (error) {
      console.error("Error fetching cards:", error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchCards();
  }, []);

  const handleNext = () => {
    if (currentIndex < cards.length - 3) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="relative group w-full overflow-hidden">
      {/* Carousel Container */}
      <div
        className="flex gap-4 transition-transform duration-500"
        style={{ transform: `translateX(-${currentIndex * 100 / 3}%)` }}
      >
        {cards.map((card) => (
          <div
            key={card._id}
            className="min-w-[33.333%] flex-shrink-0 border p-4 shadow-md rounded bg-white"
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p>{card.number}</p>
            <p>{card.user_name}</p>
          </div>
        ))}
      </div>

      {/* Previous Button */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={handlePrevious}
        disabled={currentIndex === 0}
      >
        &lt;
      </button>

      {/* Next Button */}
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        onClick={handleNext}
        disabled={currentIndex >= cards.length - 3}
      >
        &gt;
      </button>
    </div>
  );
};

export default ShowPost;
