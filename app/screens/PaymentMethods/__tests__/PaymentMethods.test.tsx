import React, { act } from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
} from "@testing-library/react-native";
import { PaymentMethods } from "../PaymentMethods";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Routes } from "@/app/router/routes";
import { useSafeAreaInsets } from "react-native-safe-area-context";

jest.mock("@expo/vector-icons", () => ({
  AntDesign: jest.fn(),
  Entypo: jest.fn(),
  Feather: jest.fn(),
  FontAwesome5: jest.fn(),
  MaterialCommunityIcons: jest.fn(),
  MaterialIcons: jest.fn(),
}));

jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
  useRoute: jest.fn(),
}));
jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: jest.fn(),
}));

const mockUseNavigation = useNavigation as jest.Mock;
const mockUseRoute = useRoute as jest.Mock;
const mockUseSafeAreaInsets = useSafeAreaInsets as jest.Mock;

describe("PaymentMethods Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  afterEach(() => {
    jest.clearAllMocks();
    jest.restoreAllMocks();
  });

  it("renders correctly", () => {
    mockUseRoute.mockReturnValue({
      params: { invoice: { id: 1, receiver: "Test Receiver" } },
    });
    mockUseNavigation.mockReturnValue({
      navigate: jest.fn(),
    });

    mockUseSafeAreaInsets.mockReturnValue({ bottom: 0 });

    render(<PaymentMethods />);
    expect(screen.getByText("Payment options")).toBeTruthy();
    expect(screen.getByText("When do you want to pay?")).toBeTruthy();
    expect(screen.getByText("Pay now")).toBeTruthy();
    expect(screen.getByText("Pay in 30 days")).toBeTruthy();
    expect(screen.getByText("Split in 12 months")).toBeTruthy();
  });

  it("enables the Next button when a payment option is selected", async () => {
    mockUseRoute.mockReturnValue({
      params: { invoice: { id: 1, receiver: "Test Receiver" } },
    });
    mockUseSafeAreaInsets.mockReturnValue({ bottom: 0 });

    render(<PaymentMethods />);
    const nextButton = screen.getByText("Next");

    expect(nextButton).toBeDisabled();

    await act(async () => {
      fireEvent(screen.getByTestId("payNow"), "onValueChange", true);
    });

    await waitFor(() => {
      expect(nextButton).not.toBeDisabled();
    });
  });

  it("navigates to the Confirmation screen with the correct params when Next is pressed", async () => {
    const mockNavigate = jest.fn();
    mockUseNavigation.mockReturnValue({ navigate: mockNavigate });
    mockUseRoute.mockReturnValue({
      params: { invoice: { id: 1, receiver: "Test Receiver" } },
    });
    mockUseSafeAreaInsets.mockReturnValue({ bottom: 0 });

    render(<PaymentMethods />);

    await act(async () => {
      fireEvent(screen.getByTestId("payNow"), "onValueChange", true);
    });
    act(() => {
      fireEvent.press(screen.getByText("Next"));
    });
    await waitFor(() => {
      expect(mockNavigate).toHaveBeenCalledWith(Routes.CONFIRMATION, {
        invoice: { id: 1, receiver: "Test Receiver" },
        paymentOption: "now",
      });
    });
  });
});
