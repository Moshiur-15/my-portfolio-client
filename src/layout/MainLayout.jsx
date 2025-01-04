import { Outlet } from "react-router-dom";
import NavBer from "../Components/NavBer";
import Footer from "../Components/Footer";

export default function MainLayout() {
  return (
    <div className="min-h-screen font-roboto">
      <div className="sticky z-10 top-0">
        <NavBer/>
      </div>
      <div className="container mx-auto lg:px-48 mb-20">
        <Outlet />
      </div>
      <div className="">
        <Footer/>
      </div>
    </div>
  );
}
