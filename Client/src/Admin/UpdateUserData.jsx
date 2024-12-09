import React, { useEffect, useState } from 'react'
import { Button } from '../CommonCompo/Button';
import { handleError, handleSuccess } from '../utils';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateUserData = () => {
    const { id: _id } = useParams(); // Get user ID from URL params
    const navigate  = useNavigate();

    const [formdata, setFormData] = useState({
        username : "",
        email: "",
    });
    const handleChange = (e) =>{
        const {name, value} = e.target;
        setFormData({
            ...formdata,
            [name] : value
        })
    }

    const getSingleUserData = async () =>{
        // localstoreg se token get karne ke lihe backend se 
        // const token = localStorage.getItem("token");
        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/admin/admin/${_id}`, {
                method: "GET",
                headers: {
                    Authorization : `Bearer ${localStorage.getItem("token")}`,
                    "Content-Type" : "application/json"
                }
            })
            // yaha pr hamne condition add ki hai ki agar response sb sahi raha to setformdata me users ka data update kare
            if (response.ok) {
                const userData = await response.json();
                setFormData({
                    username: userData.data.username,
                    email: userData.data.email,
                })
              } else{
                handleError("failed to fetch users data!")
              }
        }
        catch(error){
            handleError("cant get users data for updating data.");
        }
    }

    const handleSubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/admin/admin/update/${_id}`, {
                method: "PATCH",
                headers: {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${localStorage.getItem("token")}`
            },
                body : JSON.stringify(formdata),
            })
            if (response.ok) {
                const data = await response.json();
                handleSuccess("User data updated successfully:", data);
                setTimeout(() =>{
                    navigate("/admin");
                }, 3000)
              } else {
                handleError("Failed to update user data");
              }
        }
        catch(error){
            handleError("donot updated data.")
        }
    }

    useEffect(() =>{
        getSingleUserData();
    }, [])

  return (
    <>
    <div className="p-10">
      <h1>Update Users Data</h1>

      <form onSubmit={handleSubmit} className="my-10 flex flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="username">UserNaame</label>
        <input 
        type="text"
        value={formdata.username}
        onChange={handleChange}
        name='username'
        className='bg-zinc-500 outline-none rounded-md px-6 py-2'
         />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input 
        type="email"
        value={formdata.email}
        onChange={handleChange}
        name='email'
        className='bg-zinc-500 outline-none rounded-md px-6 py-2'
         />
      </div>
      <Button buttonColor="bg-yellow-500 mt-2 py-2" label="Update"/>
      </form>
      <ToastContainer />
    </div>
    </>
  )
}

export default UpdateUserData;
