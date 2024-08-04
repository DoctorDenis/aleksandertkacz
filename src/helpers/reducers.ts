"use client";
import { rootStateType } from "./types and interfaces";

export function hiddenStateReducer(state: rootStateType, action: String) {
  if (action === "hide") {
    return {
      hidden: !state.hidden,
    };
  }
  throw Error("Unknown action.");
}
