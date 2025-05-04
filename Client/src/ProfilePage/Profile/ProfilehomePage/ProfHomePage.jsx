import { GenerateStudy } from "./GenerateStudy"
import { RecentCards } from "./RecentCards"
import ProfileCardData from "../../../API/ProfileCardData.json";
import { BookCard } from "../BookDetails/BookCard";

export const Profilehomepage = () => {

  return (
    <>
      <section className="w-full bg-[#0a092d] px-6">
        <RecentCards data={ProfileCardData.slice(0, 3)} fleshCardLinks={(id) => `/profile/recentlyaddedcarddata/${id}`} Recent="Recent" />
        <GenerateStudy />
        <BookCard Recent="Popular textbooks" />
        <RecentCards data={ProfileCardData.slice(6, 9)} fleshCardLinks={(id) => `/profile/popularQuestions/${id}`}  Recent="Popular questions" />
        <RecentCards data={ProfileCardData.slice(3, 6)} Recent="Because you studied sets by Kenneth_Wilson28" />
        <RecentCards data={ProfileCardData.slice(9, 12)} Recent="Top creators" />
      </section>
    </>
  )
}

