import { createBrowserRouter } from "react-router-dom";
import ContestForm from "../ContestForm/ContestForm";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";
import Home from "../AdminDashboard/Home";
import AdminRoute from "./AdminRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContestForm />,
  },
  {
    path: "/adminLog",
    element: <SignIn/>,
  },
  {
    path: "/adminRegi",
    element: <SignUp/>,
  },
  {
    path: "/adminHome",
    element: <AdminRoute><Home/></AdminRoute>
  }
]);

export default router;
