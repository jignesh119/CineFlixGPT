import { createBrowserRouter } from "react-router-dom";
import Body from "../components/Body";
import Browse from "../components/Browse";
import AppLayout from "../components/AppLayout";
import Login from "../components/Login";
import GPTSearch from "../components/GPTSearch";

const useRoute = () => {
  const mainRouter = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "",
          element: <Browse />,
        },
        {
          path: "browse",
          element: <Browse />,
        },
        {
          path: "body",
          element: <Body />,
        },
        {
          path: "gptsearch",
          element: <GPTSearch />,
        },
        {
          path: "login",
          element: <Login />,
        },
      ],
    },
  ]);
  return mainRouter;
};

export default useRoute;
