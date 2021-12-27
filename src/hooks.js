import { useCallback, useEffect, useState } from "react";
import { useAtomValue, useUpdateAtom } from "jotai/utils";
import { bpmAtom, bpsAtom } from "./atoms";
import { useFrame } from "@react-three/fiber";

export function useTapTempoBPM() {
  const setBPM = useUpdateAtom(bpmAtom);
  const [lastTap, setLastTap] = useState(0);

  const onKeydown = useCallback(() => {
    const now = performance.now();
    setLastTap(now);
    if (lastTap < now - 1000) {
      return;
    }
    setBPM((prevBPM) => {
      let bpm = (prevBPM + 60 / ((now - lastTap) * 0.001)) / 2;
      return bpm < 256 ? bpm : 256;
    });
  }, [lastTap, setBPM]);

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, [onKeydown]);
}

export function useKeydown(key, cb) {
  const onKeydown = useCallback(
    (event) => {
      if (event.key !== key) return;
      cb();
    },
    [cb, key]
  );

  useEffect(() => {
    document.addEventListener("keydown", onKeydown);
    return () => {
      document.removeEventListener("keydown", onKeydown);
    };
  }, [onKeydown]);
}

export function useBeats(beats = 4) {
  const bps = useAtomValue(bpsAtom);
  const [beat, setBeat] = useState(0);
  useFrame(({ clock }) => {
    const currentBeat = Math.floor(clock.elapsedTime * bps) % beats;
    if (currentBeat === beat) return;
    setBeat(currentBeat);
  });
  return beat;
}
