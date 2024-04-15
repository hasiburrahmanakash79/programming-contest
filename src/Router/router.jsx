import { createBrowserRouter } from "react-router-dom";
import ContestForm from "../ContestForm/ContestForm";
import App from "../App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContestForm />,
  },
  {
    path: "/adminLog",
    element: <App/>,
  },
]);

export default router;
