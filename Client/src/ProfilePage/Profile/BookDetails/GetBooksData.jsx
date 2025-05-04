import ProfileCardData from "../../../API/ProfileCardData.json";
import BookCardData from "../../../API/BookCardData.json";

// Define a loader function
export const getBooksData = ({ params }) => {
  // Check both BookCardData and ProfileCardData for matching ID
  const profiles = BookCardData.filter((profile) => profile.id === params.id);
  return profiles;
};

export const getLanguageQuestionsData = ({params}) =>{
  const recentProfiles = ProfileCardData.filter((questions) => questions.id === params.id);
  return recentProfiles;
}

export const recentCardData = ({params}) => {
  const recentlyAddedCardData = ProfileCardData.filter((recentdata) => recentdata.id === params.id);
  return recentlyAddedCardData; 
}