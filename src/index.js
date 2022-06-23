import React from "react";
import { createRoot } from "react-dom/client";
import App from "./app";
function Root() {
  return <App />;
}

const root = createRoot(document.getElementById("root"));
root.render(<Root />);
