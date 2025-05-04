import { MdEmail } from "react-icons/md";
import { FaLock } from "react-icons/fa";
import { Button } from "../CommonCompo/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Login = () => {
    const [login, setlogin] = useState({
        email: "",
        password: "",
    })

    const handleinputeChange = (e) => {
        const { name, value } = e.target;
        setlogin((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const navigate = useNavigate();
    const handlesubmit = async (e) => {
        e.preventDefault();

        const { email, password } = login;
        if (!email || !password) {
            return handleError("email and password required");
        }

        try {
            const API_URL = import.meta.env.VITE_BACKEND_API_URL;

            const response = await fetch(`${API_URL}/api/auth/login`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                credentials: 'include',
                body: JSON.stringify(login)
            });

            const result = await response.json();
            const { success, message, jwtToken, username, error, userId, profilepic } = result;

            if (success) {
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', username);
                localStorage.setItem('loggedInUserEmail', email);
                localStorage.setItem('userId', userId);
                localStorage.setItem('profilepic', profilepic);
                setTimeout(() => {
                    navigate('/profile');
                }, 1000);
            } else if (error) {
                const details = error?.details[0]?.message;
                handleError(details || message);
            } else {
                handleError(message);
            }
        }
        catch (err) {
            console.error("Login error:", err);
            handleError("Something went wrong while logging in");
        }
    }

    return (
        <>
            <div className="flex gap-2 md:gap-5 justify-center items-center w-[95%] md:w-fit mx-auto mt-10 md:mt-20 overflow-hidden shadow-lg rounded-3xl">
                <div className="bg-white flex justify-center items-center min-h-[500px] md:h-[calc(100vh-32vh)] w-full max-w-[956px]">
                    <form onSubmit={handlesubmit} className="p-4 w-full md:w-[50%] h-full md:px-24 py-10 justify-center items-center flex flex-col relative">
                        <h3 className="font-semibold text-xl md:text-2xl mb-6 md:mb-10">Login</h3>
                        <div className="flex flex-col gap-4 w-full max-w-[300px]">
                            <div className="flex gap-4 md:gap-10 signup-inputs w-full">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    name="email"
                                    value={login.email}
                                    onChange={handleinputeChange}
                                    className="outline-none bg-transparent" />
                                <MdEmail />
                            </div>

                            <div className="flex gap-4 md:gap-10 signup-inputs w-full">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleinputeChange}
                                    className="outline-none bg-transparent" />
                                <FaLock />
                            </div>

                            <Button buttonColor="text-white bg-[#4255ff] rounded-full py-2 md:py-3" label="Login" />

                            <div className="flex flex-col text-center gap-2 text-sm md:text-base">
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
                            <img src="/images/cardcrousel-img3.avif" alt="" className="h-40 ms-16" />
                            <img src="/images/cardcrousel-img2.avif" alt="" className="h-64 absolute top-0 right-16" />
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
