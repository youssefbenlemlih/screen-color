import React from "react";
import { MenuItem } from "@blueprintjs/core";
import ClickBoundary from "./ClickBoundary";

type ColorMenuItemProps = {
  selectedColor: string;
  setSelectedColor?: (c: string) => void;
};

function ColorSelectorMenuItem({
  selectedColor,
  setSelectedColor,
}: ColorMenuItemProps) {
  return (
    <MenuItem
      icon={
        <ClickBoundary>
          <input
            type="color"
            id="head"
            name="head"
            value={selectedColor}
            onChange={(e) => {
              console.log({ e });
              setSelectedColor?.(e.target.value);
            }}
            onSubmit={() => console.log("submit: " + selectedColor)}
          />
        </ClickBoundary>
      }
      text={selectedColor}
    />
  );
}

export default ColorSelectorMenuItem;
