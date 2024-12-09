import { RxCross1 } from "react-icons/rx"
import { NavLink, Outlet } from "react-router-dom"
import StudyPracticeFooter from "./Study&PracticeFooter"

export const PracticeTest = () =>{
    return(
        <>
        <section className="bg-[#0a092d]">
                <div className="text-white px-4 md:px-6 py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3 md:gap-5 items-center">
                            <img src="/images/edit.png" className="h-6 md:h-8" alt="" />
                            <h4 className="text-sm md:text-base">Practice Test</h4>
                        </div>
                        <div className="fleshicons">
                            <RxCross1 />
                        </div>
                    </div>
                </div>
                <hr className="h-[1px]" />
                <div className="py-5 px-3 md:flex justify-center items-center">
                    <div className="max-w-full md:max-w-[800px] text-white">
                        <div className="pt-3 pb-10 flex flex-col gap-2">
                        <h3 className="text-lg md:text-xl">Generate a practice test</h3>
                        <h5 className="text-sm md:text-base">Choose or upload materials to generate practice questions designed for you</h5>
                        </div>
                        <div className="libraryLinks flex gap-3 md:gap-5 border-b-2 text-gray-500 border-b-gray-500 pb-1 overflow-x-auto whitespace-nowrap">
                            <NavLink to="flesh-card" className="links" end>Fleshcard sets</NavLink>
                            <NavLink to="flesh-card/past-text" className="links" end>Paste text</NavLink>
                            <NavLink to="flesh-card/upload-files" className="links">Upload files</NavLink>
                            <NavLink to="flesh-card/google-drive" className="links">Google drive</NavLink>
                        </div>
                        <Outlet />
                        <div className="flex flex-col gap-5 mt-5">
                            <p className="text-sm md:text-base">This upload will also provide:</p>
                            <div className="flex gap-2 items-center">
                                <img src="/images/literature.png" className="h-8 md:h-10" alt="" />
                                <span className="font-semibold text-sm md:text-base">Fleshcards</span>
                                <p className="text-[12px] md:text-[14px]">Memorize your material</p>
                            </div>
                        </div>
                    </div>
                </div>
                <StudyPracticeFooter />
            </section>
        </>
    )
}