import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Button } from "../CommonCompo/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AdminLogin = () =>{
    const [login, setLogin] = useState({
        email: "",
        password: "",
    })
    const navigate = useNavigate();

    const handleinputeChange = (e) =>{
        const {name, value} = e.target;
        setLogin({
            ...login,
            [name] : value,
        })
    }

    const handlesubmit = async (e) =>{
        e.preventDefault();
        try{
            const response = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/admin/adminlogin`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify(login),
            })
            const data = await response.json();
            if(response.ok){
                const existingToken = localStorage.getItem("token");
                console.log(existingToken);
                localStorage.setItem("user", JSON.stringify(data.user)); // Save user details
                localStorage.setItem("isAdmin", true); // Indicate admin status
                handleSuccess("user login admin dashboard successfully!");
                setTimeout(() =>{
                    navigate("/adminDashboard")
                }, 3000)
            }else{
                handleError("username or password wrong.")
            }
        }
        catch(error){
            handleError("invalid user for access admin dashboard");
        }
    }

    return(
        <>
            <div className="flex gap-5 justify-center items-center w-fit mx-auto mt-20 overflow-hidden shadow-lg rounded-3xl">
                <div className="bg-white flex justify-center items-center h-[calc(100vh-32vh)] max-w-[956px]">
                <form onSubmit={handlesubmit} className="p-[16px] md:w-[50%] h-full md:px-24 py-10 justify-center items-center flex flex-col relative">
                    <h3 className="font-semibold mb-10">Admin Login</h3>
                    <div className="flex flex-col gap-4">
                        
                        <div className="flex gap-10 signup-inputs w-fit">
                        <input 
                        type="email" 
                        placeholder="Enter your Email" 
                        name="email" 
                        value={login.email}
                        onChange={handleinputeChange}
                        className="outline-none bg-transparent"/>
                        <MdEmail />
                        </div>

                        <div className="flex gap-10 signup-inputs w-fit">
                        <input 
                        type="password" 
                        placeholder="Password"
                        name="password" 
                        value={login.password}
                        onChange={handleinputeChange}
                        className="outline-none bg-transparent"/>
                           <FaLock />
                        </div>
                        <Button buttonColor="text-white bg-[#4255ff] rounded-full py-3" label="Login"/>
                        <div className="flex flex-col text-center gap-2">
                            <div>
                            <span>Dont have an account? </span>
                            <NavLink to="/register" className="text-[#4255ff] font-semibold underline"> Signup</NavLink>
                            </div>
                            <NavLink to="/reset-password" className="text-[#4255ff] underline"> Forgot Password</NavLink>
                        </div>
                    </div>
                </form>

                <div className="text-white bg-[#4255ff] h-full w-[50%] hidden md:flex flex-col justify-center px-5 relative">
                        <div className="">
                            <img src="/images/cardcrousel-img3.avif" alt="" className="h-40 ms-16"/>
                        <img src="/images/cardcrousel-img2.avif" alt="" className="h-64 absolute top-0 right-16"/>
                        </div>
                        <div className="mt-10">
                            <h3>
                                Welcome Back !
                            </h3>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ducimus mollitia delectus soluta.</p>
                        </div>
                    </div>
                <ToastContainer />
                </div>
            </div>
        </>
    )
}
