import ProfileCardData from "../../../API/ProfileCardData.json";
import BookCardData from "../../../API/BookCardData.json";

// Define a loader function
export const getBooksData = async ({ params }) => {
  // Check both BookCardData and ProfileCardData for matching ID
  const bookProfiles = BookCardData.filter((profile) => profile.id === params.id);
  const recentProfiles = ProfileCardData.filter((profile) => profile.id === params.id);
  
  // Combine results from both data sources
  const profiles = [...bookProfiles, ...recentProfiles];
  
  return profiles;
};


