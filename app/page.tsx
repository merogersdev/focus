import ProgressBar from "./components/ProgressBar";
import Theme from "./components/Theme";

import Main from "./components/Main";
import Header from "./components/Header";

export default function Home() {
  return (
    <Theme>
      <Main>
        <Header />
        <ProgressBar />
      </Main>
    </Theme>
  );
}
