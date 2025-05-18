import type { ReactNode } from "react";

const NavBarOption = ({
  icon,
  text,
  classname,
}: {
  icon: ReactNode;
  text: string;
  classname: string;
}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <span>{icon}</span>
      <span className={`text-xs ${classname}`}>{text}</span>
    </div>
  );
};

export default NavBarOption;
