import { RxCross1 } from "react-icons/rx"
import { NavLink, Outlet } from "react-router-dom"
import StudyPracticeFooter from "../PracticeTest/Study&PracticeFooter"

export const StudyGuide = () => {
    return (
        <>
            <section className="bg-[#0a092d]">
                <div className="text-white px-4 md:px-6 py-2">
                    <div className="flex justify-between items-center">
                        <div className="flex gap-3 md:gap-5 items-center">
                            <img src="/images/edit.png" className="h-6 md:h-8" alt="" />
                            <h4 className="text-sm md:text-base">Study Guides</h4>
                        </div>
                        <div className="fleshicons">
                            <RxCross1 />
                        </div>
                    </div>
                </div>
                <hr className="h-[1px]" />
                <div className="py-5 px-2 sm:px-0 flex justify-center items-center">
                    <div className="max-w-full md:max-w-[800px] text-white">
                        <h4 className="pt-3 pb-5 text-sm md:text-base">Upload lecture slides, readings or notes to create a study guide</h4>
                        <div className="libraryLinks flex gap-3 md:gap-5 border-b-2 text-gray-500 border-b-gray-500 pb-1 overflow-x-auto whitespace-nowrap">
                            <NavLink to="past-text" className="links" end>Paste text</NavLink>
                            <NavLink to="past-text/upload-files" className="links">Upload files</NavLink>
                            <NavLink to="past-text/google-drive" className="links">Google drive</NavLink>
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