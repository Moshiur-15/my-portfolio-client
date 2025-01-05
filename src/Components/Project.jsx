import { Outlet } from "react-router-dom";
import Footer from "./Footer";

export default function Project() {
  return (
    <div className="space-y-16">
      <Outlet/>
      <Footer/>
    </div>
  )
}
