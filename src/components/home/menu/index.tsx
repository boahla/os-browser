import dayjs from "dayjs";

const Menu = () => {
  const date = dayjs().format("MMM D, YYYY h:mm A");
  return (
    <div className="dark bg-menu-light dark: bg-menu-dark flex flex-row justify-between align-center px-2">
      <div>123</div>

      <div>
        <div className="text-black typography-body emphasized">{date}</div>
      </div>
    </div>
  );
};
export default Menu;
