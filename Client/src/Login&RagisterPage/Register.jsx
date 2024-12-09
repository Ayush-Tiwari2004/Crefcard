import { FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "../CommonCompo/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError, handleSuccess } from "../utils";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Register = () => {
    const [user, setuser] = useState({
        username: "",
        email: "",
        password: "",
    })
    const handleinput = (e) => {
        const { name, value } = e.target;
        setuser((prev) => ({
            ...prev,
            [name]: value,
        }))
    }
    const navigate = useNavigate();
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(user);

        const { username, email, password } = user;
        if (!username || !email || !password) {
            return handleError('username, email and password required')
        }
        try {
            const url = `${import.meta.env.VITE_BACKEND_API_URL}/api/auth/signup`;
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(user)
            });
            const result = await response.json();
            const { success, message, jwtToken, error, _id, profilepic } = result;
            if (success) {
                
                handleSuccess(message);
                localStorage.setItem('token', jwtToken);
                localStorage.setItem('loggedInUser', username);
                localStorage.setItem('loggedInUserEmail', email);
                localStorage.setItem('userId', _id);
                localStorage.setItem('profilepic', profilepic);
                setTimeout(() => {navigate('/profile');}, 1000);

            } else if (error) {
                const details = error?.details[0].message;
                handleError(details);
            } else if (!success) {
                handleError('password atleast 4 charactor');
            }
            // console.log(result);
        }
        catch (err) {
            handleError(err);
        }
    }

    return (
        <>
            <div className="flex gap-2 md:gap-5 justify-center items-center w-[95%] md:w-fit mx-auto mt-10 md:mt-20 overflow-hidden shadow-lg rounded-3xl">
                <div className="bg-white flex justify-center items-center min-h-[500px] md:h-[calc(100vh-32vh)] w-full max-w-[956px]">
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
                    <form onSubmit={handleFormSubmit} className="p-4 w-full md:w-[50%] h-full md:px-24 py-10 justify-center items-center flex flex-col relative">
                        <h3 className="font-semibold text-xl md:text-2xl mb-6 md:mb-10 select-none">Sign_up</h3>
                        <div className="flex flex-col gap-4 w-full max-w-[300px]">
                            <div className="flex gap-4 md:gap-10 signup-inputs w-full">
                                <input
                                    type="text"
                                    placeholder="UserName"
                                    autoComplete="off"
                                    name="username"
                                    value={user.username}
                                    onChange={handleinput}
                                    className="outline-none bg-transparent" />
                                <FaUser />
                            </div>

                            <div className="flex gap-4 md:gap-10 signup-inputs w-full">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    autoComplete="off"
                                    name="email"
                                    value={user.email}
                                    onChange={handleinput}
                                    className="outline-none bg-transparent" />
                                <MdEmail />
                            </div>

                            <div className="flex gap-4 md:gap-10 signup-inputs w-full">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="off"
                                    name="password"
                                    value={user.password}
                                    onChange={handleinput}
                                    className="outline-none bg-transparent" />
                                <FaLock />
                            </div>
                            <Button buttonColor="text-white bg-[#4255ff] rounded-full py-2 md:py-3" label="Signup" />
                            <div className="text-center text-sm md:text-base">
                                <span>Already have an account? </span>
                                <NavLink to="/login" className="text-[#4255ff] font-semibold underline"> Login</NavLink>
                            </div>
                        </div>
                    </form>
                    <ToastContainer />
                </div>
            </div>
        </>
    )
}

