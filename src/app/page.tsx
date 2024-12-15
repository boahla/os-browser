"use client";
import Menu from "@/components/home/menu";
import useDarkMode from "@/hooks/useDarkMode";

export default function Home() {
  const [dark, toggleDarkMode] = useDarkMode();
  return (
    <div className="bg-desktop-wallpaper-1 dark:bg-desktop-wallpaper-2 h-screen w-screen bg-cover">
      <Menu />

      <button onClick={toggleDarkMode}>
        {dark ? "현재 Dark모드" : "현재 light모드"}
      </button>
    </div>
  );
}
