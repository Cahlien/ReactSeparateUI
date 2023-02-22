import Header from "./Header";
import {fireEvent, render, screen} from "@testing-library/react";

test("Header component renders", () => {
    render(<Header />);
    const header = screen.getByRole("heading", {name: "My React App 1"});
    expect(header).toBeInTheDocument();
});

test("Header component responds to clicks", async () => {
    render(<Header />);
    const element = screen.getByRole("heading", {name: "My React App 1"});

    fireEvent.click(element);

    expect(element).toHaveTextContent("My React App 2");
});