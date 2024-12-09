import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { MdEmail } from "react-icons/md";
import { Button } from '../CommonCompo/Button';
import { handleError, handleSuccess } from '../utils';

export const ForgotPassword = () =>{
    const [password, setPassword] = useState('');
    const {id, token} = useParams();
    const navigate = useNavigate();

    const uservalid = async () =>{

        const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/forgot-password/${id}/${token}`, {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        });

        const data = await res.json();

        if (data.status == 201) {
            console.log("user valid")
        } else {
            navigate("/login")
        }
    }

    const handleSubmitForgotPassword = async (e) =>{
        e.preventDefault();

        try{
            const res = await fetch(`${import.meta.env.VITE_BACKEND_API_URL}/api/auth/${id}/${token}`, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({password})
            });
    
            const data = await res.json();
    
            if(data.status == 201){
                setPassword("");
                handleSuccess("password reset seccessfully")
            }else{
                handleError("Token expired generate new link")
            }
        }
        catch(error){
            handleError("Something went wrong");
        }

    }

    useEffect(() =>{
        uservalid();
    }, [])

    return(
        <>
             <div className="flex gap-5 justify-center items-center w-fit mx-auto mt-20 overflow-hidden shadow-lg rounded-md">
                <div className="flex">
                <form onSubmit={handleSubmitForgotPassword} className="w-[30%] left-10 p-10 justify-center items-center flex flex-col relative">
                    <h6 className="font-semibold mb-10">Enter Your NEW Password</h6>
                    <div className="flex flex-col gap-4">
                        
                        <div className="flex gap-10 signup-inputs w-fit">
                        <input 
                        type="password" 
                        placeholder="Enter new password" 
                        name="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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