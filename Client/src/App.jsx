import React, { useState, useEffect } from 'react';
import { createBrowserRouter, Navigate, RouterProvider, useLocation, useNavigate } from 'react-router-dom';
import { StudyTools } from './pages/StudyTools';
import { AppLayout } from './ComponentLayout/AppLayout';
import { Home } from './pages/home';
import { ErrorPage } from './pages/ErrorPage';
import { Subject } from './pages/Subject';
import { Profile } from './ProfilePage/Profile/Profile';
import { Profilelayout } from './ProfilePage/Profile/Profilelayout';
import Starthere from './ProfilePage/Librarypage/Library';
import { StudyGuide } from './ProfilePage/StudyGuide/StudyGuide';
import { PracticeTest } from './ProfilePage/PracticeTest/PracticeTest';
import { ProfileFleshCards } from './ProfilePage/Fleshcard/ProfileFleshCards';
import { getBooksData } from './ProfilePage/Profile/BookDetails/GetBooksData';
import { BookDetails } from './ProfilePage/Profile/BookDetails/BookDetails';
import { LibraryLayout } from './ProfilePage/Librarypage/LibraryLayout';
import FleshCardSets from './ProfilePage/Librarypage/FleshCardSets';
import Tests from './ProfilePage/Librarypage/Tests';
import StdyGuides from './ProfilePage/Librarypage/StdyGuides';
import { Register } from './Login&RagisterPage/Register';
import { Login } from './Login&RagisterPage/Login';
import { ForgotPassword } from './Login&RagisterPage/ForgotPassword';
import { ResetPassword } from './Login&RagisterPage/ResetPassword';
import ExpertSolution from './ProfilePage/Librarypage/ExpertSolution';
import Folders from './ProfilePage/Librarypage/Folders';
import Classes from './ProfilePage/Librarypage/Classes';
import PastText from './ProfilePage/StudyGuide/PastText';
import StudyLayout from './ProfilePage/StudyGuide/StudyLayout';
import UploadFiles from './ProfilePage/StudyGuide/UploadFiles';
import GoogleDrive from './ProfilePage/StudyGuide/GoogleDrive';
import PracticeFleshCards from './ProfilePage/PracticeTest/PracticeFleshCards';
import Createpost from './ProfilePage/CreatePost/Createpost';
import { Admin } from './Admin/Admin';
import AdminHome from './Admin/AdminHome';
import AdminLayout from './Admin/AdminLayout';
import UpdateUserData from './Admin/UpdateUserData';
import { AdminLogin } from './Admin/AdminLogin';

// RefreshHandler Component
const RefreshHandler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin');
    if (token) {
      setIsAuthenticated(true);
      if (['/', '/login', '/register'].includes(location.pathname)) {
        if(isAdmin) {
          navigate('/adminDashboard', {replace: true})
        }else{
          navigate('/profile', { replace: true });
        }
      }
    } else {
      setIsAuthenticated(false);
      if (location.pathname.startsWith('/profile')) {
        navigate('/', { replace: true });
      }
    }
  }, [location, navigate, setIsAuthenticated]);

  return null;
};

// Updated AppLayout and ProfileLayout to include RefreshHandler
const AppLayoutWithAuth = ({ setIsAuthenticated, children }) => (
  <>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    <AppLayout>{children}</AppLayout>
  </>
);

const ProfileLayoutWithAuth = ({ setIsAuthenticated, children }) => (
  <>
    <RefreshHandler setIsAuthenticated={setIsAuthenticated} />
    <Profilelayout>{children}</Profilelayout>
  </>
);

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const PrivateRoute = (element) => (isAuthenticated ? element : <Navigate to="/" />);
  const AuthenticatedRoute = (element) => (!isAuthenticated ? element : <Navigate to="/profile" />);
  const PrivateAdminRoute = (element) => {
    const isAdmin = localStorage.getItem('isAdmin'); // उपयोगकर्ता के admin होने की पुष्टि करें
    return isAuthenticated && isAdmin ? element : <Navigate to="/profile" />;
  };
  
  const AuthenticatedAdminRoute = (element) => {
    const isAdmin = localStorage.getItem('isAdmin'); // उपयोगकर्ता के admin होने की पुष्टि करें
    return !isAuthenticated || !isAdmin ? element : <Navigate to="/adminDashboard" />;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayoutWithAuth setIsAuthenticated={setIsAuthenticated} />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/StudyTools", element: <StudyTools /> },
        { path: "/Subject", element: <Subject /> },
        { path: "/register", element: AuthenticatedRoute(<Register />) },
        { path: "/login", element: AuthenticatedRoute(<Login />) },
        { path: "/forgot-password/:id/:token", element: AuthenticatedRoute(<ForgotPassword />) },
        { path: "/reset-password", element: AuthenticatedRoute(<ResetPassword />) }
      ]
    },
    {
      element: <ProfileLayoutWithAuth setIsAuthenticated={setIsAuthenticated} />,
      children: [
        { path: "/profile", element: PrivateRoute(<Profile />) },
        { path: "/createpost", element: PrivateRoute(<Createpost />) },
        {
          path: "/library",
          element: PrivateRoute(<Starthere />),
          children: [
            // Redirect from /library to /library/sets
            { index: true, element: <Navigate to="sets" replace /> },
            {
              path: "sets",
              element: <LibraryLayout />,
              errorElement: <ErrorPage />,
              children: [
                { path: "", element: <FleshCardSets /> },
                { path: "tests", element: <Tests /> },
                { path: "guide", element: <StdyGuides /> },
                { path: "expert-solution", element: <ExpertSolution /> },
                { path: "folders", element: <Folders /> },
                { path: "classes", element: <Classes /> }
              ]
            }
          ]
        },
        { path: "/fleshcard", element: PrivateRoute(<ProfileFleshCards />) },
        {
          path: "/profile/:id",
          element: PrivateRoute(<BookDetails />),
          loader: getBooksData,
        }
      ]
    },
    { 
      path: "/studyguide", 
      element: PrivateRoute(<StudyGuide />),
      children:[
        {index: true, element: <Navigate to="past-text" replace/> },
        {
          path: "past-text", 
          element: <StudyLayout  />,
          errorElement: <ErrorPage />,
          children:[
            { path: "", element: <PastText /> },
            { path: "upload-files", element: <UploadFiles /> },
            { path: "google-drive", element: <GoogleDrive /> },
          ]
        }
      ] 
    },
    { path: "/practicetest", 
      element: PrivateRoute(<PracticeTest />),
      children:[
        {index: true, element: <Navigate to="flesh-card" replace />},
        {
          path: "flesh-card", 
          element: <StudyLayout  />,
          errorElement: <ErrorPage />,
          children:[
            { path: "", element: <PracticeFleshCards /> },
            { path: "past-text", element: <PastText /> },
            { path: "upload-files", element: <UploadFiles /> },
            { path: "google-drive", element: <GoogleDrive /> },
          ]
        }
      ]
    },
    {
      path: "/admin",
      element: AuthenticatedAdminRoute(<AdminLogin />)
    },
    {
      path: "/adminDashboard",
      element:PrivateAdminRoute(<Admin />),
      children: [
        {index: true, element: <Navigate to="home" replace/>},
        {
          path: "home", 
          element: <AdminLayout />,
          errorElement: <ErrorPage />,
          children: [
            {path: "", element: <AdminHome /> },
            {path: "update/:id", element: <UpdateUserData /> }
          ]
        }
      ]
    }
  ]);

  return(
    <>
    <RouterProvider router={router} />
    </>
  ) 
};

export default App;
