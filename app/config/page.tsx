import Theme from "../components/Theme";
import Main from "../components/Main";
import LinkButton from "../components/LinkButton";
import SwitchTheme from "../components/switch/SwitchTheme";
import SwitchAutoPause from "../components/switch/SwitchAutoPause";
import SwitchAudio from "../components/switch/SwitchAudio";
import CounterFocus from "../components/counter/CounterFocus";
import CounterShort from "../components/counter/CounterShort";
import CounterLong from "../components/counter/CounterLong";
import CounterSessions from "../components/counter/CounterSessions";
import { H1 } from "../components/Typography";

export default function Config() {
  return (
    <Theme>
      <Main>
        <H1>Configure Focus</H1>
        <div>
          <CounterFocus />
          <CounterShort />
          <CounterLong />
          <CounterSessions />
        </div>
        <div className="mb-8">
          <SwitchTheme />
          <SwitchAutoPause />
          <SwitchAudio />
        </div>
        <div className="flex w-80 justify-between">
          <LinkButton href="/" text="Back" />
        </div>
      </Main>
    </Theme>
  );
}
