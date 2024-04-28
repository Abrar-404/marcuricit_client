import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="lg:max-w-[1900px] md:max-w-[768px] max-w-[425px] mx-auto">
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayout;