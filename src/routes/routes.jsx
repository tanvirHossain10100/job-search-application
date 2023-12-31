import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import App from "../App";
import { Contact } from "../pages/Contact/Contact";
import { Jobs } from "../pages/Jobs/Jobs";
import { About } from "../pages/About/About";
import { SignUp } from "../pages/SignUp/SignUp";
import { AddNewJob } from "../pages/AddNewJob/AddNewJob";
import "react-toastify/dist/ReactToastify.css";
import { FavouriteJobs } from "../pages/FavouriteJobs/FavouriteJobs";
import { ParticularJobPageInfo } from "../pages/ParticularJobaInfo/ParticularJobInfo";
import { NotFound } from "../pages/NotFound/NotFound";
import { Error } from "../pages/Error/Error";
import { AppliedJobs } from "../pages/AppliedJobs/AppliesJobs";
import PrivateRoutes from "./PrivateRoute/PrivateRoutes";
import { PostJob } from "../pages/PostJob/PostJob";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        element: <Home></Home>,
      },
      {
        path: "jobs",
        element: <Jobs></Jobs>,
      },
      {
        path: "jobs/:id",
        element: <ParticularJobPageInfo></ParticularJobPageInfo>,
      },
      {
        path: "abouts",
        element: <About></About>,
      },
      {
        path: "favorite",
        element: <FavouriteJobs></FavouriteJobs>,
      },
      {
        path: "signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "appliedJob",
        element: (
          <PrivateRoutes>
            <AppliedJobs></AppliedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: "addNewJob",
        element: (
          <PrivateRoutes>
            <PostJob></PostJob>
          </PrivateRoutes>
        ),
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);
