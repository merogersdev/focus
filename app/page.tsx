import ProgressBar from "./components/ProgressBar";
import Theme from "./components/Theme";
import ThemeSwitch from "./components/ThemeSwitch";

export default function Home() {
  return (
    <Theme>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <h1 className="text-black dark:text-white">Focus</h1>
        <ProgressBar />
        <ThemeSwitch />
      </main>
    </Theme>
  );
}
