import {
  FaSearchPlus,
  FaCalendarAlt,
  FaBuilding,
  FaListAlt,
  FaHome,
} from "react-icons/fa";

import { NavItem } from "../navItem";

export const Header = () => {
  const links = [
    { path: "/", icon: <FaHome size={25} /> },
    { path: "/pesquisa", icon: <FaSearchPlus size={25} /> },
    { path: "/calendar", icon: <FaCalendarAlt size={25} /> },
    { path: "/orgaos", icon: <FaBuilding size={25} /> },
    { path: "/listas", icon: <FaListAlt size={25} /> },
  ];

  return (
    <header className="w-20 max-w-full h-full flex flex-col justify-top items-center my-2">
      {links.map((link, ind) => (
        <NavItem index={ind} finalPath={link.path}>
          {link.icon}
        </NavItem>
      ))}
    </header>
  );
};
