import { createBrowserRouter } from "react-router-dom";
import ContestForm from "../ContestForm/ContestForm";
import SignIn from "../Login/SignIn";
import SignUp from "../Login/SignUp";

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
]);

export default router;
