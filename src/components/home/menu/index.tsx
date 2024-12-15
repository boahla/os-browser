import dayjs from "dayjs";
import MenuItemButton from "./components/MenuItemButton";
import AppNameButton from "./components/AppNameButton";

const Menu = () => {
  const date = dayjs().format("MMM D, YYYY h:mm a");
  // const getBettery = async () => {
  //   const battery = await (navigator as any).getBattery();
  //   console.log({ battery });
  //   return battery.level;
  // };
  return (
    <div className="bg-menu-background-light dark:bg-menu-background-dark flex flex-row justify-between align-center px-2 py-1">
      <div className="flex flex-row space-x-[-4px]">
        <AppNameButton>Finder</AppNameButton>
        <MenuItemButton>File</MenuItemButton>
        <MenuItemButton>Edit</MenuItemButton>
        <MenuItemButton>View</MenuItemButton>
        <MenuItemButton>Go</MenuItemButton>
        <MenuItemButton>Window</MenuItemButton>
        <MenuItemButton>Help</MenuItemButton>
      </div>
      <div className="flex flex-row align-center">
        {/* <div className="typography-body emphasized px-2">{getBettery()}</div> */}
        <MenuItemButton>{date}</MenuItemButton>
      </div>
    </div>
  );
};
export default Menu;
