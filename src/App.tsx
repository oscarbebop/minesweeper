import React from "react";

import { Top } from "./components/top";
import { Scoreboard } from "./components/socoreboard";

export function App(): JSX.Element {
  return (
    <div>
      <Top feature="Flag" firstAction="ctrl" secondAction="click">
        Minesweeper
      </Top>
      <Scoreboard
        time="000"
        levels={["beginner", "intermediate", "expert"]}
        mines="010"
        onReset={() => null}
      />
    </div>
  );
}
