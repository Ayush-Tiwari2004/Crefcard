import { useLoaderData } from "react-router-dom";

export const PopularQuestions = () => {
    let profiles = useLoaderData();
    if (!Array.isArray(profiles)) {
        profiles = [profiles];
    }
    if(profiles.length === 0) return <p>No questions available.</p>;
    return(
        <>
            {profiles.map((profile) => (
                <div key={profile.id} className="text-white bg-[#0a092d] p-6">
                    <h1>{profile.bookcontant}</h1>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi in eum aliquam temporibus cupiditate non, suscipit cum placeat labore consequatur unde. Debitis, odio et? Cupiditate accusantium a maiores architecto illum.
                </div>
            ))}
        </>
    )
}
