import { atom } from "jotai";

export const bpmAtom = atom(128);
export const bpsAtom = atom((get) => get(bpmAtom) / 60);
