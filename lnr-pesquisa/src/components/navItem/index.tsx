import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

interface LinkProps {
  children: ReactNode;
  index: number;
  finalPath: string;
}

export const NavItem = ({ children, index, finalPath }: LinkProps) => {
  const actualPath = useLocation().pathname;

  return (
    <div className="transition-transform hover:scale-150 my-4 p-4">
      <div
        className={
          actualPath === finalPath
            ? "transition-colors duration-500 l-c-selected border-2 border-yellow-500 rounded p-2"
            : ""
        }
        key={index}
      >
        <Link to={finalPath}>{children}</Link>
      </div>
    </div>
  );
};
