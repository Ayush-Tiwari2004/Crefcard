import ProfileCardData from "../../../API/ProfileCardData.json";

// Define a loader function
export const getBooksData = async ({ params }) => {
  // Find profile(s) matching the ID from params
  const profiles = ProfileCardData.filter((profile) => profile.id === params.id);
  return profiles;
};
