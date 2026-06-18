import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import App from "./App";

test("renders blog title", () => {
  render(<App />);
  expect(screen.getByText(/blog/i)).toBeTruthy();
});