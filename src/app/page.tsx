"use client";
import Menu from "@/components/home/menu";
import useDarkMode from "@/hooks/useDarkMode";

export default function Home() {
  const [dark, toggleDarkMode] = useDarkMode();
  return (
    <div className="bg-main h-screen w-screen bg-cover">
      <div className="dark justify-center bg-black dark:bg-red-300">
        it goes Work!!
      </div>
      <button onClick={toggleDarkMode}>
        {dark ? "현재 Dark모드" : "현재 light모드"}
      </button>
      <Menu />
    </div>
  );
}
