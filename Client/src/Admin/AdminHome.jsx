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
    <div className="w-full h-full justify-center items-center p-5">
      <h3 className="ms-10">User Data</h3>

      {/* Search Input */}
      <div className="flex justify-between items-center mb-4 px-10">
        <input
          type="text"
          placeholder="Search by username or email"
          value={search}
          onChange={handleSearchChange}
          className="border p-2 rounded outline-none text-black"
        />
      </div>

      {/* User Table */}
      <div className="px-20 py-10 m-10 bg-gray-800 rounded-md shadow-xl shadow-gray-950/50">
        <div className="w-full table-auto">
          <div className="grid grid-cols-10 ps-2">
            <div className="p-2 col-span-1">Photo</div>
            <div className="p-2 col-span-3">
              <button onClick={() => handleSortChange("username")}>
                User Name {sortBy === "username" ? (order === "asc" ? "↑" : "↓") : ""}
              </button>
            </div>
            <div className="p-2 col-span-4">
              <button onClick={() => handleSortChange("email")}>
                Email {sortBy === "email" ? (order === "asc" ? "↑" : "↓") : ""}
              </button>
            </div>
            <div className="p-2 col-span-1">Update</div>
            <div className="p-2 col-span-1">Delete</div>
          </div>
          <div>
            {userData.length > 0 ? (
              userData.map((user) => (
                <div key={user._id} className="grid grid-cols-10 ps-2 py-2">
                  <div className="col-span-1">
                    <img
                      src={user.profilepic}
                      className="bg-white h-10 w-10 rounded-full object-cover"
                      alt="Profile"
                    />
                  </div>
                  <div className="col-span-3">{user.username}</div>
                  <div className="col-span-4">{user.email}</div>
                  <div className="col-span-1">
                    <NavLink to={`update/${user._id}`}>
                      <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
                    </NavLink>
                  </div>
                  <div className="col-span-1">
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded"
                      onClick={() => handleDelete(user._id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No users found.</div>
            )}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-around px-4 py-3 sm:px-6">
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

      <div className="text-end mr-10 mt-4">
        <button onClick={handleLogout} className="bg-red-600 px-4 py-1 rounded-md">
          Logout
        </button>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminHome;







// import React, { useEffect, useState } from "react";
// import { handleError, handleSuccess } from "../utils";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { NavLink, useNavigate } from "react-router-dom";

// const AdminHome = () => {
//   const [userData, setUserData] = useState([]);
//   const navigate = useNavigate();

//   const getAllUsersData = async () => {
//     const token = localStorage.getItem("token");
//     if (!token) {
//       handleError("Unauthorized. Please login first.");
//       return;
//     }

//     try {
//       const response = await fetch("http://localhost:5000/api/admin/admin", {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`, // Sending the token in the Authorization header
//         },
//       });

//       const data = await response.json();
//       setUserData(data);
//     } catch (error) {
//       console.error("Error fetching data: ", error);
//     }
//   };

//   const handleDelete = async (_id) => {
//     const confirmationForDeletingData = window.confirm("Are you sure you want to delete this user?");
//     if (!confirmationForDeletingData) {
//       handleSuccess("delete user confirmation canceld successfully!")
//       return;
//     }
//     try {
//       const token = localStorage.getItem("token"); // Get the token from localStorage
//       if (!token) {
//         handleError("unauthorized please log in !")
//         return;
//       }

//       const response = await fetch(`http://localhost:5000/api/admin/admin/delete/${_id}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`,
//         } 
//       })
//       // const data = await response.json();
//       // console.log(data)
//       if (response.ok) {
//         getAllUsersData();
//       }
//       handleSuccess("user delete successfully!");
//     }
//     catch (error) {
//       handleError("error");
//     }
//   }

//   useEffect(() => {
//     getAllUsersData(); // Fetch users when the component render
//   }, []);

//   const handlelogout = () =>{
//     localStorage.removeItem('user');
//     localStorage.removeItem('isAdmin');
//     handleSuccess("admin logdout successfully!");
//     navigate('/profile');
//   }

//   return (
//     <div className="w-full h-full justify-center items-center p-5">
//       <h3 className="ms-10">User Data</h3>
//       <div className="px-20 py-10 m-10 bg-gray-800 rounded-md shadow-xl shadow-gray-950/50">
//         {/* Table for displaying user data */}
//         <div className="w-full table-auto">
//           <div>
//             <div className="grid grid-cols-10 ps-2">
//               <div className="p-2 col-span-1">Photo</div>
//               <div className="p-2 col-span-3">User Name</div>
//               <div className="p-2 col-span-4">Email</div>
//               <div className="p-2 col-span-1">Update</div>
//               <div className="p-2 col-span-1">Delete</div>
//             </div>
//           </div>
//           <div>
//             {userData.length > 0 ? (
//               userData.map((user) => (
//                 <div key={user._id} className="hover:bg-gray-700 rounded-md grid grid-cols-10 items-center ps-2 py-2">
//                   <div className="p-2 col-span-1">
//                     <img src={user.profilepic} className="bg-white h-10 w-10 rounded-full object-cover" alt="" />
//                   </div>
//                   <div className="p-2 col-span-3">{user.username}</div>
//                   <div className="p-2 col-span-4">{user.email}</div>
//                   <div className="p-2 col-span-1">
//                     <NavLink to={`update/${user._id}`}>
//                     <button className="bg-blue-500 text-white px-4 py-2 rounded">Update</button>
//                     </NavLink>
//                   </div>
//                   <div className="p-2 col-span-1">
//                     <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={() => handleDelete(user._id)}>Delete</button>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div>
//                 <div colSpan="4" className="text-center p-2">
//                   No users found.
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//       <div className="text-end mr-10">
//         <button 
//         onClick={handlelogout} 
//         className="bg-red-600 px-4 py-1 rounded-md" 
//         >Logout</button>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// };

// export default AdminHome; 