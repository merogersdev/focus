import Theme from "../components/Theme";
import Main from "../components/Main";
import Header from "../components/Header";
import LinkButton from "../components/LinkButton";
import SwitchTheme from "../components/SwitchTheme";
import SwitchAutoPause from "../components/SwitchAutoPause";
import SwitchAudio from "../components/SwitchAudio";

export default function Config() {
  return (
    <Theme>
      <Main>
        <h1 className="text-3xl font-medium mb-8">Configure Focus</h1>
        <SwitchTheme />
        <SwitchAutoPause />
        <SwitchAudio />

        <div className="flex w-80 justify-between mt-8">
          <LinkButton href="/" text="Back" />
        </div>
      </Main>
    </Theme>
  );
}
