import { VscVerifiedFilled } from "react-icons/vsc";
import { FaRegUser } from "react-icons/fa";
import { TbCards } from "react-icons/tb";
import { NavLink } from "react-router-dom";

export const RecentCards = ({ data = [], Recent }) => {
    return (
        <>
            <section className="w-full">
                <div className="text-slate-200 pt-8 pb-5 w-full">
                    <h1 className="text-xl text-white mb-5">{Recent}</h1>
                    <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-5">
                        {
                            data.slice(0, 10).map((index) => (
                                <ProfileCard key={index.id} data={index} />
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export const ProfileCard = (props) => {
    const footerIcon = {
        verifiedStamp: <VscVerifiedFilled className="text-[16px]" />,
        user: <FaRegUser />,
        fleshcard: <TbCards className="text-[18px]" />
    }
    const { id, title, number, user_img, user_name, profession, longtext, Background, width, height, bookimg, bookname, edition, writer, prise, icon, icons, randomUsers, fleshcard, userImg, nextw, nexth, noOfCards, classes, pding } = props.data;
    return (
        <>
            <NavLink to={`/profile/${id}`}>
                <div className="h-44 p-4 border-b-2 border-b-[#0a092d] hover:border-b-slate-200 flex flex-col justify-between rounded-lg bg-[#2e3856] relative">

                    <div className="flex flex-col overflow-y-scroll overflow-x-hidden gap-3">
                        <h6 className="text-sm sticky top-0 pb-1 w-full bg-[#2e3856]">{title}</h6>
                        <p className="text-[12px]">{longtext}</p>
                        <div className="text-[12px] bg-[#586380] w-fit px-2 rounded-xl">
                            <span>{number}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2">
                        <img
                            src={user_img}
                            className="rounded-full"
                            style={{
                                backgroundColor: Background,
                                width: width,
                                height: height
                            }} alt="" />
                        <p>{user_name}</p>
                        <div className="flex text-[12px] gap-1 bg-[#586380] w-fit px-2 rounded-xl">
                            <span>{profession}</span>
                        </div>
                    </div>

                    <div className="flex overflow-hidden items-center mt-1 gap-5 absolute">
                        <img 
                        src={bookimg} 
                        className="w-[40%] sm:w-[22%] md:w-[32%] lg:w-[26%] xl:w-[28%] rounded-md" 
                        alt="" 
                        />
                        <div className="flex flex-col gap-2 md:gap-5">
                            <h6 className="text-[14px] sm:text-18px">{bookname}</h6>
                            <div>
                                <div className="text-[12px]">
                                    <p>{edition}</p>
                                    <p className="mb-2">{writer?.length > 15 ? writer.slice(0, 15) + "..." : writer}</p>
                                </div>
                                <div className="text-[12px] flex gap-1 items-center bg-[#586380] w-fit px-2 rounded-xl">
                                    <p>{footerIcon[icon]}</p>
                                    <p className="text-[12px]">{prise}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between gap-10 absolute">
                        <img
                            src={userImg}
                            className="rounded-full object-cover"
                            style={{
                                width: nextw,
                                height: nexth,
                                backgroundColor: Background
                            }} alt="" />
                        <div className="flex flex-col gap-4">
                            <h6 className="text-[14px] sm:text-[18px]">{randomUsers?.length > 20 ? randomUsers.slice(0, 20) + "..." : randomUsers}</h6>
                            <div className="flex gap-2">
                                <div className="text-[10px] sm:text-[12px] flex gap-1 items-center bg-[#586380] w-fit rounded-xl"
                                    style={{ padding: pding }}>
                                    <p>{footerIcon[fleshcard]}</p>
                                    <p>{noOfCards}</p>
                                </div>
                                <div className="text-[10px] sm:text-[12px] flex gap-1 items-center bg-[#586380] w-fit rounded-xl" style={{ padding: pding }}>
                                    <p>{footerIcon[icons]}</p>
                                    <p>{classes}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </NavLink>
        </>
    )
}