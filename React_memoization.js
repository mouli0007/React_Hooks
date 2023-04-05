//  UseMemo vs UseCallback !
//  React memo

import { useState, memo } from "react";

function Swatch({ color }) {
  console.log(`Swatch Rendered ${color}`);
  return (
    <div
      style={{ width: 75, height: 75, backgroundColor: color, margin: 2 }}
    ></div>
  );
}

const MemoedSwatch = memo(Swatch);

function App() {
  const [apprender, setAppRender] = useState(0);
  const [color, setColor] = useState("red");
  return (
    <div>
      <button onClick={() => setAppRender((re) => re + 1)}>
        Re Rendered App !
      </button>

      <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
        ChangeColor
      </button>

      <div>
        <MemoedSwatch color={color} />
      </div>
    </div>
  );
}
