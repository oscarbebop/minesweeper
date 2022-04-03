import React, { FC } from "react";

import { Cell as CellType } from "@/helpers/Field";
import { ClosedFrame, EmptyFrame } from "./Cell.styles";

export interface CellProps {
  children: CellType;
}

export const Cell: FC<CellProps> = ({ children }) => {
  switch (children) {
    case 0:
      return <EmptyFrame />;
    case 10:
      return <ClosedFrame />;
    default:
      return <ClosedFrame />;
  }
};
