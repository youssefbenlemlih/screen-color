import { useLocalState } from "./useLocalState";
import useDebounce from "./useDebounce";
import { useEffect } from "react";

const maxHistoryLength = 25;
export const useColors = () => {
  const [selectedColor, setSelectedColor] = useLocalState(
    "selected-color",
    "#000000"
  );
  const debouncedSelectedColor = useDebounce<string>(selectedColor, 500);

  const [history, setHistory] = useLocalState<string[]>("colors-history", []);
  useEffect(() => {
    const newHistory = [...history];
    if (newHistory[newHistory.length - 1] !== debouncedSelectedColor) {
      newHistory.push(debouncedSelectedColor);
    }
    if (newHistory.length === maxHistoryLength) {
      newHistory.shift();
    }
    setHistory(newHistory);
  }, [debouncedSelectedColor]);
  return {
    selectedColor,
    history,
    setSelectedColor: (color: string) => {
      setSelectedColor(color);
    },
    clearHistory: () => setHistory([]),
  };
};
