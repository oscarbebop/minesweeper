import React from "react";

import { Top } from "./components/top";

export function App(): JSX.Element {
  return (
    <div>
      <Top feature="Flag" firstAction="click" secondAction="click">
        Minesweeper
      </Top>
      <p>App!</p>
    </div>
  );
}
