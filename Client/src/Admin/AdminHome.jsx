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
        getAllUsersData(); // Refresh data
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
    setCurrentPage(1); // Reset to page 1
  };

  const handleSortChange = (field) => {
    setSortBy(field);
    setOrder(order === "asc" ? "desc" : "asc"); // Toggle sorting order
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
    <div className="w-full min-h-screen bg-gray-900 p-3 sm:p-5">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <h3 className="text-xl font-bold">User Management</h3>
        <div className="w-full sm:w-auto flex gap-4">
          <input
            type="text"
            placeholder="Search by username or email"
            value={search}
            onChange={handleSearchChange}
            className="w-full sm:w-64 border border-gray-700 bg-gray-800 p-2 rounded-lg outline-none text-sm"
          />
          <button 
            onClick={handleLogout} 
            className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* User Table */}
      <div className="bg-gray-800 rounded-lg shadow-xl overflow-x-auto">
        <div className="min-w-full divide-y divide-gray-700">
          <div className="grid grid-cols-10 bg-gray-750 p-4">
            <div className="col-span-1 text-sm font-medium text-gray-300">Photo</div>
            <div className="col-span-3">
              <button 
                onClick={() => handleSortChange("username")}
                className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1"
              >
                User Name {sortBy === "username" && <span>{order === "asc" ? "↑" : "↓"}</span>}
              </button>
            </div>
            <div className="col-span-4">
              <button 
                onClick={() => handleSortChange("email")}
                className="text-sm font-medium text-gray-300 hover:text-white flex items-center gap-1"
              >
                Email {sortBy === "email" && <span>{order === "asc" ? "↑" : "↓"}</span>}
              </button>
            </div>
            <div className="col-span-1">Update</div>
            <div className="col-span-1">Delete</div>
          </div>

          <div className="divide-y divide-gray-700">
            {userData.length > 0 ? (
              userData.map((user) => (
                <div key={user._id} className="grid grid-cols-10 p-4 hover:bg-gray-750 transition-colors">
                  <div className="col-span-1">
                    <img
                      src={user.profilepic}
                      className="h-10 w-10 rounded-full object-cover border-2 border-gray-600"
                      alt={user.username}
                    />
                  </div>
                  <div className="col-span-3 flex items-center text-sm">{user.username}</div>
                  <div className="col-span-4 flex items-center text-sm text-gray-300">{user.email}</div>
                  <div className="col-span-1">
                    <NavLink to={`update/${user._id}`}>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1.5 rounded-lg text-sm transition-colors">
                        Update
                      </button>
                    </NavLink>
                  </div>
                  <div className="col-span-1">
                    <button
                      className="bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg text-sm transition-colors"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-4 text-center text-gray-400">No users found.</div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination - make it scrollable on mobile */}
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 overflow-x-auto">
        <div className="flex items-center">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === 1 ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
            }`}
          >
            <span className="mr-2">←</span> Previous
          </button>
        </div>

        <div className="flex items-center gap-2">
          {[...Array(totalPages)].map((_, index) => {
            const pageNumber = index + 1;
            // Show first page, last page, current page, and one page before and after current
            if (
              pageNumber === 1 ||
              pageNumber === totalPages ||
              pageNumber === currentPage ||
              pageNumber === currentPage - 1 ||
              pageNumber === currentPage + 1
            ) {
              return (
                <button
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === pageNumber
                      ? "bg-blue-500 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {pageNumber}
                </button>
              );
            } else if (
              pageNumber === currentPage - 2 ||
              pageNumber === currentPage + 2
            ) {
              return <span key={pageNumber}>...</span>;
            }
            return null;
          })}
        </div>

        <div className="flex items-center">
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`mx-1 px-4 py-2 rounded ${
              currentPage === totalPages ? "bg-gray-400 cursor-not-allowed" : "bg-blue-500 text-white"
            }`}
          >
            Next <span className="ml-2">→</span>
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default AdminHome;