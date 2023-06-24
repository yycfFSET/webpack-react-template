import { FC } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
document.body.innerHTML = `<div id="root"></div>`;
const App: FC = () => {
  return <></>;
};
const root = createRoot(document.getElementById("root")!);
root.render(<App />);

export { App };
