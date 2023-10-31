import ProgressBar from "./components/ProgressBar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-black dark:text-white">Focus</h1>
      <ProgressBar focusMinutes={45} shortBreak={5} longBreak={15} />
    </main>
  );
}
