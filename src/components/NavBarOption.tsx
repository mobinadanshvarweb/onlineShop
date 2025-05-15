import type { ReactNode } from "react";

const NavBarOption = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span>{icon}</span>
      <span className="text-xs ">{text}</span>
    </div>
  );
};

export default NavBarOption;
