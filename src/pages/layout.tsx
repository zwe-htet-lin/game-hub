import Footer from "@/components/app/Footer";
import Navbar from "@/components/app/Navbar";
import ScrollToTop from "@/components/app/ScrollToTop";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <div className="px-5 pb-5 min-h-[100vh]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
