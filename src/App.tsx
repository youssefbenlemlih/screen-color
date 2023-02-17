import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";
import "@blueprintjs/popover2/lib/css/blueprint-popover2.css";

import { Icon, Intent, Menu, MenuDivider, MenuItem } from "@blueprintjs/core";
import React from "react";
import { Popover2 } from "@blueprintjs/popover2";
import ColorSelectorMenuItem from "./components/ColorSelectorMenuItem";
import { useColors } from "./hooks/useColors";
import { useInvertedColor } from "./hooks/useInvertedColor";

function App() {
  const { setSelectedColor, selectedColor, history, clearHistory } =
    useColors();
  const menuColor = useInvertedColor(selectedColor);
  return (
    <div
      style={{
        background: selectedColor,
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        padding: 16,
      }}
    >
      <Popover2
        minimal
        content={
          <Menu>
            <MenuDivider title={"Current"} />
            <ColorSelectorMenuItem
              selectedColor={selectedColor}
              setSelectedColor={setSelectedColor}
            />
            <MenuItem text="History..." icon="history">
              {history.map((color) => (
                <MenuItem
                  icon={<Icon icon={"stop"} color={color} />}
                  text={color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
              <MenuItem
                icon={"trash"}
                intent={Intent.DANGER}
                onClick={clearHistory}
                text={"Clear"}
              />
            </MenuItem>
          </Menu>
        }
      >
        <Icon icon={"menu"} color={menuColor} />
      </Popover2>
    </div>
  );
}

export default App;
