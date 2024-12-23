import React, { useState, useEffect } from "react";
import axios from "axios";

const CardCreator = () => {
  const [cards, setCards] = useState([]);
  
  const [formData, setFormData] = useState({
    title: "",
    number: "",
    user_img: "",
    user_name: "",
    profession: "",
    longtext: "",
    bookimg: "",
    bookname: "",
    edition: "",
    writer: "",
    prise: "",
    icon: "",
    randomUsers: "",
    noOfCards: "",
    classes: "",
    Background: "",
    nextw: "",
    nexth: "",
    pding: "",
  });
  const [isCreating, setIsCreating] = useState(false); // Toggle form visibility

  // Fetch cards from the backend
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

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle card creation
  const handleCreateCard = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${import.meta.env.VITE_BACKEND_API_URL}/api/posts/createPost`, formData);
      setCards([...cards, response.data]); // Add new card to the list
      setFormData({
        title: "",
        number: "",
        user_img: "",
        user_name: "",
        profession: "",
        longtext: "",
        bookimg: "",
        bookname: "",
        edition: "",
        writer: "",
        prise: "",
        icon: "",
        randomUsers: "",
        noOfCards: "",
        classes: "",
        Background: "",
        nextw: "",
        nexth: "",
        pding: "",
      }); // Reset form fields
      setIsCreating(false); // Hide the form
    } catch (error) {
      console.error("Error creating card:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setIsCreating(true)} // Show the form
      >
        Create a New Card
      </button>

      {/* Card Creation Form */}
      {isCreating && (
        <form
          className="bg-gray-100 p-4 mt-4 shadow-md rounded"
          onSubmit={handleCreateCard}
        >
          <div className="mb-4">
            <label className="block text-gray-700">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter card title"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Number</label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded"
              placeholder="Enter card number"
              required
            />
          </div>

          {/* Add other input fields similarly */}
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded ml-2"
            onClick={() => setIsCreating(false)} // Hide the form
          >
            Cancel
          </button>
        </form>
      )}

      {/* Display Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        {cards.map((card) => (
          <div
            key={card._id}
            className="border p-4 shadow-md rounded bg-white"
          >
            <h2 className="text-xl font-bold">{card.title}</h2>
            <p>{card.number}</p>
            <p>{card.user_name}</p>
            {/* Display other fields as needed */}
          </div>
        ))}
      </div>
    </div>
  );
};
export default CardCreator;

