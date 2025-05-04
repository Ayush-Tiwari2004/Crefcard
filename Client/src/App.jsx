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
import { getBooksData, getLanguageQuestionsData, recentCardData } from './ProfilePage/Profile/BookDetails/GetBooksData';
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
import UpdateUserData from './Admin/UpdateUserData';
import { AdminLogin } from './Admin/AdminLogin';
// import { DataLayout } from './ProfilePage/Profile/BookDetails/DataLayout';
import { PopularQuestions } from './ProfilePage/Profile/BookDetails/PopularQuestions';
import RecentCardDetails from './ProfilePage/Profile/RecentCardDetails/RecentCardDetails';

// Custom Authentication Hook
const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return !!localStorage.getItem('token');
  });
  
  return { isAuthenticated, setIsAuthenticated };
};

// Updated RefreshHandler Component
const RefreshHandler = ({ setIsAuthenticated }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    
    if (token) {
      setIsAuthenticated(true);
      
      // Admin और normal user के लिए अलग-अलग रीडायरेक्शन
      if (['/', '/login', '/register', '/admin'].includes(location.pathname)) {
        if (isAdmin) {
          navigate('/adminDashboard', { replace: true });
        } else {
          navigate('/profile', { replace: true });
        }
      }
    } else {
      setIsAuthenticated(false);
      // Protected routes check
      const protectedPaths = ['/profile', '/studyguide', '/practicetest', '/library', '/adminDashboard'];
      if (protectedPaths.some(path => location.pathname.startsWith(path))) {
        navigate('/', { replace: true });
      }
    }
  }, [location.pathname, navigate, setIsAuthenticated]);

  return null;
};

// Layout Components
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

// Main App Component
const App = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  // Updated Route Guards
  const PrivateRoute = (element) => {
    return isAuthenticated ? element : <Navigate to="/" />;
  };

  const AuthenticatedRoute = (element) => {
    return !isAuthenticated ? element : <Navigate to="/profile" />;
  };

  const PrivateAdminRoute = (element) => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const token = localStorage.getItem('token');
    
    if (!token || !isAdmin) {
      return <Navigate to="/admin" />;
    }
    return element;
  };

  const AuthenticatedAdminRoute = (element) => {
    const isAdmin = localStorage.getItem('isAdmin') === 'true';
    const token = localStorage.getItem('token');
    
    if (token && isAdmin) {
      return <Navigate to="/adminDashboard" />;
    }
    return element;
  };

  // Router Configuration
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
        { 
          path: "/profile", 
          element: PrivateRoute(<Profile />)
        },
        { 
          path: "/createpost", 
          element: PrivateRoute(<Createpost />) 
        },
        {
          path: "/library",
          element: PrivateRoute(<Starthere />),
          children: [
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
        { 
          path: "/fleshcard", 
          element: PrivateRoute(<ProfileFleshCards />) 
        },
        {
          path: "/profile/:id",
          element: PrivateRoute(<BookDetails />),
          loader: getBooksData,
        },
        {
          path: "/profile/popularQuestions/:id",
          element: PrivateRoute(<PopularQuestions />,),
          loader: getLanguageQuestionsData,
        },
        {
          path: "/profile/recentlyaddedcarddata/:id",
          element: PrivateRoute(<RecentCardDetails />),
          loader: recentCardData,
        }
      ]
    },
    {
      path: "/studyguide",
      element: PrivateRoute(<StudyGuide />),
      children: [
        { index: true, element: <Navigate to="past-text" replace /> },
        {
          path: "past-text",
          element: <StudyLayout />,
          errorElement: <ErrorPage />,
          children: [
            { path: "", element: <PastText /> },
            { path: "upload-files", element: <UploadFiles /> },
            { path: "google-drive", element: <GoogleDrive /> },
          ]
        }
      ]
    },
    {
      path: "/practicetest",
      element: PrivateRoute(<PracticeTest />),
      children: [
        { index: true, element: <Navigate to="flesh-card" replace /> },
        {
          path: "flesh-card",
          element: <StudyLayout />,
          errorElement: <ErrorPage />,
          children: [
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
      element: PrivateAdminRoute(<Admin />),
      children: [
        { 
          index: true, 
          element: <AdminHome /> 
        },
        { 
          path: "update/:id", 
          element: <UpdateUserData /> 
        }
      ]
    }
  ]);

  return <RouterProvider router={router} />;
};

export default App;
