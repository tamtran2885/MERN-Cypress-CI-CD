import * as React from "react";
import { render, mount } from "@testing-library/react";
import App from "../../App";
import Home from "./Home";

test("renders the home page", async () => {
  render(
    <App>
      <Home />
    </App>
  );
});
