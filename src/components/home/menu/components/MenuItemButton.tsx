import { ReactNode } from "react";

const MenuItemButton = ({ children }: { children: ReactNode }) => {
  return (
    <button className="typography-body emphasized px-[11px] py-1 rounded text-black dark:text-white hover:bg-menu-item-light dark:hover:bg-menu-item-dark">
      {children}
    </button>
  );
};
export default MenuItemButton;
