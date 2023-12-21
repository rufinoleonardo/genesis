import { Outlet } from "react-router-dom";
import { Header } from "../header";

export const Layout = () => {
  return (
    <div className="flex">
      <div className="w-16 max-w-20 max-h-full l-bg-primary l-c-secondary">
        <Header />
      </div>
      <div className="p-4 w-full max-w-8xl max-h-full mx-auto h-screen">
        <Outlet />
      </div>
    </div>
  );
};
