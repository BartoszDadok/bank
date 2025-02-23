import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { Button } from "../Button";

describe("Button Component", () => {
  test("renders correctly with text", () => {
    const { getByText } = render(<Button text="Click Me" onPress={() => {}} />);
    expect(getByText("Click Me")).toBeTruthy();
  });

  test("calls onPress when clicked", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text="Click Me" onPress={onPressMock} />
    );
    fireEvent.press(getByText("Click Me"));
    expect(onPressMock).toHaveBeenCalled();
  });

  test("displays loading indicator when isLoading is true", () => {
    const { getByTestId } = render(
      <Button isLoading={true} onPress={() => {}} />
    );
    expect(getByTestId("loading-indicator")).toBeTruthy();
  });

  test("is disabled when disabled prop is true", () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button text="Click Me" onPress={onPressMock} disabled={true} />
    );
    fireEvent.press(getByText("Click Me"));
    expect(onPressMock).not.toHaveBeenCalled();
  });

  test("applies custom styles", () => {
    const { getByText } = render(
      <Button
        text="Click Me"
        onPress={() => {}}
        buttonStyle={{ backgroundColor: "red" }}
        textStyle={{ color: "white" }}
      />
    );
    expect(getByText("Click Me").props.style).toContainEqual({
      color: "white",
    });
  });
});
