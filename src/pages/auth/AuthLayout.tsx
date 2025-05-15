import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-12  min-h-screen">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
