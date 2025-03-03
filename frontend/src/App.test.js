import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App.js";

describe("App Component", () => {
  it("renders main title", () => {
    render(<App />);
    expect(
      screen.getByText("FinChat Assignment by Tony Kim")
    ).toBeInTheDocument();
  });
});
