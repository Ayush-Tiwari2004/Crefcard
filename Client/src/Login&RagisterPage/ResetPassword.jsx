import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md";
import { Button } from '../CommonCompo/Button';
import { handleError, handleSuccess } from '../utils';

export const ResetPassword = () =>{
    const [email, setEmail] = useState("");
    const handleinputeChange = (e) =>{
        setEmail(e.target.value)
    }
    const handlesubmit = async (e) =>{
        e.preventDefault();

        try{
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/reset-password`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json",
                },
                body: JSON.stringify({email})
            });
            const data = await res.json();
            if(data.success){
                setEmail("");
                handleSuccess("password reset link send successfully!");
            }
            else{
                handleError(data.message || "Invalid User");
            }
        }
        catch(error){
            handleError(error.message || "something went wrong");
        }
       
    }

    return(
        <>
               <div className="flex gap-5 justify-center items-center w-fit mx-auto mt-20 overflow-hidden shadow-lg rounded-md">
                <div className="flex">
                <form onSubmit={handlesubmit} className="w-[30%] left-10 p-10 justify-center items-center flex flex-col relative">
                    <h6 className="font-semibold mb-10">Enter Your Email</h6>
                    <div className="flex flex-col gap-4">
                        
                        <div className="flex gap-10 signup-inputs w-fit">
                        <input 
                        type="email" 
                        placeholder="Enter your email" 
                        name="email" 
                        value={email}
                        onChange={handleinputeChange}
                        className="outline-none"/>
                        <MdEmail />
                        </div>
                        <Button buttonColor="text-white bg-black rounded-full" label="Send"/>
                    </div>
                </form>
                <div className="login text-white bg-black w-[70%] pl-24 py-10 flex flex-col justify-center items-end px-5 relative">
                    <div className="max-w-80 pl-5">
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