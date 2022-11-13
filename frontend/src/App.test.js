import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders the landing page", async () => {
  render(<App />);
  expect(screen.getByRole("navigation")).toBeInTheDocument();
  // const headings = screen.getAllByRole("heading");
  // console.log(headings);
  // expect(headings).toHaveLength(2);
});
