import React, { useEffect, useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink, useNavigate } from "react-router-dom";

const AdminHome = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("_id");
  const [order, setOrder] = useState("desc");

  const navigate = useNavigate();

  const getAllUsersData = async () => {
    const token = localStorage.getItem("token");
    if (!token) {
      handleError("Unauthorized. Please login first.");
      return;
    }

    try {
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/admin/admin?page=${currentPage}&search=${search}&sortBy=${sortBy}&order=${order}`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const data = await response.json();
      if (data.success) {
        setUserData(data.data);
        setTotalPages(data.totalPages);
      } else {
        setUserData([]);
        setTotalPages(1);
        handleError(data.message || "Failed to fetch users.");
      }
    } catch (error) {
      console.error("Error fetching data: ", error);
      handleError("Error fetching data.");
    }
  };

  const handleDelete = async (_id) => {
    const confirmation = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmation) {
      handleSuccess("User deletion cancelled.");
      return;
    }

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        handleError("Unauthorized. Please log in!");
        return;
      }

      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_API_URL}/api/admin/admin/delete/${_id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        handleSuccess("User deleted successfully!");
        getAllUsersData();
      } else {
        handleError("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user: ", error);
      handleError("Error deleting user.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("isAdmin");
    handleSuccess("Admin logged out successfully!");
    navigate("/profile");
  };

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setCurrentPage(1);
  };

  const handleSortChange = (field) => {
    setSortBy(field);
    setOrder(order === "asc" ? "desc" : "asc");
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    getAllUsersData();
  }, [currentPage, search, sortBy, order]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-0">
            User Management
          </h1>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors duration-200 ease-in-out"
          >
            Logout
          </button>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-6">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
              <div className="w-full sm:w-96 mb-4 sm:mb-0">
                <input
                  type="text"
                  placeholder="Search users..."
                  value={search}
                  onChange={handleSearchChange}
                  className="w-full px-4 py-2 rounded-lg border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 dark:text-white"
                />
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="text-left border-b dark:border-gray-700">
                    <th className="p-4">Photo</th>
                    <th className="p-4">
                      <button
                        onClick={() => handleSortChange("username")}
                        className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-500"
                      >
                        <span>Username</span>
                        {sortBy === "username" && (
                          <span>{order === "asc" ? "↑" : "↓"}</span>
                        )}
                      </button>
                    </th>
                    <th className="p-4">
                      <button
                        onClick={() => handleSortChange("email")}
                        className="flex items-center space-x-1 text-gray-700 dark:text-gray-200 hover:text-blue-500"
                      >
                        <span>Email</span>
                        {sortBy === "email" && (
                          <span>{order === "asc" ? "↑" : "↓"}</span>
                        )}
                      </button>
                    </th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {userData.length > 0 ? (
                    userData.map((user) => (
                      <tr
                        key={user._id}
                        className="border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        <td className="p-4">
                          <img
                            src={user.profilepic}
                            className="h-10 w-10 rounded-full object-cover"
                            alt={user.username}
                          />
                        </td>
                        <td className="p-4 dark:text-gray-200">{user.username}</td>
                        <td className="p-4 dark:text-gray-200">{user.email}</td>
                        <td className="p-4">
                          <div className="flex space-x-2">
                            <NavLink to={`update/${user._id}`}>
                              <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-200">
                                Edit
                              </button>
                            </NavLink>
                            <button
                              onClick={() => handleDelete(user._id)}
                              className="px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-200"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="4" className="p-4 text-center dark:text-gray-200">
                        No users found
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
              <div className="flex space-x-2 mb-4 sm:mb-0">
                <button
                  onClick={handlePreviousPage}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Previous
                </button>
                <button
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-md ${
                    currentPage === totalPages
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600 text-white"
                  }`}
                >
                  Next
                </button>
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of {totalPages}
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminHome;