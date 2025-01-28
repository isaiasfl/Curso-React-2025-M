import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    // contenedor principal
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      {/* Aquí se renderizará el contenido de las rutas */}
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
