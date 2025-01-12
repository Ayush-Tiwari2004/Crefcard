import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ShowPost = () => {
  const [cards, setCards] = useState([]);

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

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-8 gap-4">
        {cards.map((card) => (
          <NavLink 
            key={card._id}
          to={`/profile/${card._id}`}>
          <div
            className="h-44 p-4 border-b-2 border-b-[#0a092d] hover:border-b-slate-200 rounded-lg bg-[#2e3856] relative text-white"
          >
            <h6 className="text-sm font-medium mb-3">{card.title}</h6>
            <p className="text-[12px]">{card.writer}</p>
            {/* Display other fields as needed */}
          </div>
          </NavLink>
        ))}
      </div>
  );
};

export default ShowPost;
