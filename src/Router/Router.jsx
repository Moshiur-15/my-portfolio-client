import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../Page/Home";
import Contect from "../Page/Contect";
import ProjectDetail from "../Components/ProjectDetail";
import ProjectDetail3 from "../Components/ProjectDetail3";
import ProjectDetail2 from "../Components/ProjectDetail2";
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
      ,
      {
        path: "/productDetail2",
        element: <ProjectDetail2/>,
      }
      ,
      {
        path: "/productDetail3",
        element: <ProjectDetail3/>,
      }
    ]
  },
]);
export default router;
