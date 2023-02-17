import { useEffect, useState } from "react";

export function useLocalState<T>(
    key: string,
    defaultValue: T
): [T, (v: T) => void] {
    const itemKey = `useLocalState-${key}`;
    const loadedValue = window.localStorage.getItem(itemKey);
    const parsedValue = loadedValue !== null && JSON.parse(loadedValue);
    const initialValue = parsedValue ? parsedValue.state : defaultValue;
    const [state, setState] = useState<T>(initialValue);
    useEffect(() => {
        window.localStorage.setItem(itemKey, JSON.stringify({ state }));
    }, [itemKey, state]);
    return [state, setState];
}
