import React, { useState } from "react";
import axios from "axios";
import ShowPost from "./ShowPost";

const CardCreator = () => {
  const [cards, setCards] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    number: "",
    profession: "",
    longtext: "",
    edition: "",
    writer: "",
  });
  const [isCreating, setIsCreating] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCreateCard = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/posts/createPost`,
        formData
      );
      setCards([...cards, response.data]); // Update the cards list
      setFormData({ title: "", profession: "", longtext: "", writer: "", edition: "" }); // Reset form
      setIsCreating(false); // Close form
    } catch (error) {
      console.error("Error creating card:", error.response?.data || error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded"
        onClick={() => setIsCreating(true)}
      >
        Create a New Card
      </button>

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
              placeholder="Write your title"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Book type</label>
            <input
              type="text"
              name="longtext"
              value={formData.longtext}
              onChange={handleInputChange}
              placeholder="Write your booktype"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Number of terms</label>
            <input
              type="text"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Write your booktype"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              name="writer"
              value={formData.writer}
              onChange={handleInputChange}
              placeholder="Write your book Description"
              className="w-full px-3 py-2 border rounded"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded"
          >
            Submit
          </button>
          <button
            type="button"
            className="bg-red-500 text-white py-2 px-4 rounded ml-2"
            onClick={() => setIsCreating(false)}
          >
            Cancel
          </button>
        </form>
      )}
      <ShowPost />
    </div>
  );
};

export default CardCreator;
