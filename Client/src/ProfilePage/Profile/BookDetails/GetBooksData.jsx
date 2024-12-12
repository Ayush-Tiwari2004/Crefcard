import ProfileCardData from "../../../API/ProfileCardData.json";
import BookCardData from "../../../API/BookCardData.json";

// Define a loader function
export const getBooksData = ({ params }) => {
  // Check both BookCardData and ProfileCardData for matching ID
  const profiles = BookCardData.filter((profile) => profile.id === params.id);
  
  // Combine results from both data sources
  // const profiles = [...bookProfiles, ...recentProfiles];
  
  return profiles;
};

export const getLanguageQuestionsData = ({params}) =>{
  const recentProfiles = ProfileCardData.filter((questions) => questions.id === params.id);
  return recentProfiles;
}