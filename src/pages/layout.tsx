import Navbar from "@/components/app/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 pb-5">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
