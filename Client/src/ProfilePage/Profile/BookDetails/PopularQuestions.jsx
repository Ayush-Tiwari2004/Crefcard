import { RiVerifiedBadgeFill } from "react-icons/ri";
import { useLoaderData } from "react-router-dom";

export const PopularQuestions = () => {
    const profiles = useLoaderData();
    if (!Array.isArray(profiles)) {
        profiles = [profiles];
    }
    if (profiles.length === 0) return <p>No questions available.</p>;
    return (
        <>
            {profiles.map((profile) => (
                <div key={profile.id} className="text-white bg-[#0a092d] p-6">
                    <p>{profile.title} / {profile.booktype}</p>
                    <div className="flex flex-col mt-5">
                        <div className="flex flex-col gap-4">
                            <h6>Question</h6>
                            <div className="flex flex-col gap-3">
                                {
                                    profile.yourQuestions && profile.yourQuestions.map((question, index) => (
                                        <div key={index}>
                                            <p>{question.writeYourQuestion}</p>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>

                        <div className="flex gap-4 py-5">
                            <h6>Solutions</h6>
                            <div className="bg-slate-600 w-fit flex gap-2 items-center rounded-full px-2 py-[1px]">
                                <RiVerifiedBadgeFill />
                                <p className='text-sm'>Verified</p>
                            </div>
                        </div>
                        <div className="flex flex-col mt-2 gap-4">
                            {
                                profile.yourAnswer && profile.yourAnswer.map((answer, index) => (
                                    <div key={index}>
                                        <div className="flex flex-col max-w-[800px] px-6 py-4 bg-[#2e3856] rounded-lg overflow-hidden relative">
                                            <div className="flex justify-between my-1">
                                            <h6>Step {index + 1}</h6>
                                            <div className="">
                                                {index + 1} of {profile.yourQuestions.length}
                                            </div>
                                            </div>
                                            <p>{answer.writeYourAnswer}</p>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </div>
            ))}
        </>
    )
}
