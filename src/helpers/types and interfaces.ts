import { Dispatch } from "react";

export type rootStateType = {
  hidden: boolean;
  dispatch?: Dispatch<String>;
};
