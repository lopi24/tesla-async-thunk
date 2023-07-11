import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "../features/footer/Footer";
import './_layout.scss';

const Layout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
