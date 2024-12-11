import { GenerateStudy } from "./GenerateStudy"
// import { GenerateStudy } from "./GenerateStudy"
import { RecentCards } from "./RecentCards"
import ProfileCardData from "../../../API/ProfileCardData.json";
import { BookCard } from "../BookDetails/BookCard";
// import ShowPost from "../../CreatePost/ShowPost";

export const Profilehomepage = () => {
    
    return (
        <>  
            <section className="w-full bg-[#0a092d] px-6">
                {/* <ShowPost /> */}
                <RecentCards data={ProfileCardData.slice(0, 3)} Recent="Recent" />
                <GenerateStudy />
                <RecentCards data={ProfileCardData.slice(3, 6)} Recent="Because you studied sets by Kenneth_Wilson28" />
                {/* <RecentCards data={ProfileCardData.slice(9, 12)} Recent="Popular textbooks" /> */}
                <BookCard Recent="Popular textbooks" />
                <RecentCards data={ProfileCardData.slice(6, 9)} Recent="Popular questions" />
                <RecentCards data={ProfileCardData.slice(9, 12)} Recent="Top creators" />
            </section>
        </>
    )
}
