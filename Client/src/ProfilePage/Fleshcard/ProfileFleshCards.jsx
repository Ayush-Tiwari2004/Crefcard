import Base from "./Base";
import DynamicFlashCards from "./DynamicFlashCards";

export const ProfileFleshCards = () =>{
    return(
        <>
        <div className="p-6 flex flex-col gap-10 text-white">
            <Base />
            <DynamicFlashCards />
        </div>
        </>
    )
}