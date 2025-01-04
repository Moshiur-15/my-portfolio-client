import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Page/Home";
import Contect from "../Page/Contect";
import ProjectDetail from "../Components/ProjectDetail";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/contact",
        element: <Contect/>,
      }
      ,
      {
        path: "/productDetail",
        element: <ProjectDetail/>,
      }
    ]
  },
]);
export default router;
