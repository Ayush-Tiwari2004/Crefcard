import { NavLink } from "react-router-dom";
import { Button } from "../../../CommonCompo/Button"
import { MdFileUpload, MdKeyboardArrowRight } from "react-icons/md";

export const GenerateStudy = () => {
    return (
        <>
            <div className="text-white mt-6 w-full inline-block">
                <p className="text-xl">Generate study materials in seconds</p>
                <div className="bg-[#2e3856] px-5 py-5 w-full h-36 rounded-xl text-white my-4 flex flex-col justify-between">
                    <p>Paste in your notes.</p>
                    <div className="flex gap-4">
                        <div className="flex w-fit items-center rounded-md bg-transparant text-gray-200 border-2 border-gray-400 px-2 py-[2px] text-[14px]">
                            <MdFileUpload className="text-[18px]" />
                            <NavLink to="/studyguide/past-text/upload-files">
                            <Button buttonColor="" label={"Upload a file"} />
                            </NavLink>
                        </div>
                        <div className="flex w-fit items-center rounded-md bg-transparant text-gray-200 border-2 border-gray-400 px-2 py-[2px] text-[14px]">
                            <img src="/images/google-drive.png" className="size-4" alt="" />
                            <NavLink to="/studyguide/past-text/google-drive">
                            <Button buttonColor="" label={"Google Drive"} />
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center rounded-xl bg-transparant text-gray-200 border-2 border-gray-400 px-4 py-5 my-8 text-[14px]">
                <div className="flex gap-4 items-center">
                    <img src="/images/science.png" className="size-6" alt="" />
                    <p>The fastest way to better result</p>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="font-semibold text-[14px]">Try it free</p>
                    <MdKeyboardArrowRight  className="text-lg"/>
                </div>
            </div>
        </>
    )
}
// https://www.flaticon.com/free-icons/color