import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Navbar />
      <div className="px-5 pb-5 min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
