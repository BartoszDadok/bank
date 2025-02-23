import React from "react";
import { render, screen, fireEvent } from "@testing-library/react-native";
import { useModal } from "@/app/providers/ModalsProvider";
import { useNavigation } from "@react-navigation/native";
import { Routes } from "@/app/router/routes";
import { InvoiceDrawerModal } from "../InvoiceDrawerModal";

jest.mock("@expo/vector-icons", () => ({
  AntDesign: jest.fn(),
  Entypo: jest.fn(),
  Feather: jest.fn(),
  FontAwesome5: jest.fn(),
  MaterialCommunityIcons: jest.fn(),
  MaterialIcons: jest.fn(),
}));

jest.mock("@/app/providers/ModalsProvider", () => ({
  useModal: jest.fn(),
}));
jest.mock("@react-navigation/native", () => ({
  useNavigation: jest.fn(),
}));

const mockUseModal = useModal as jest.Mock;
const mockUseNavigation = useNavigation as jest.Mock;

describe("InvoiceDrawerModal Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("closes modal and navigates to PDF Viewer on Open button click", () => {
    const mockHandleClose = jest.fn();
    const mockNavigate = jest.fn();

    mockUseModal.mockReturnValue({
      invoiceDrawerModal: {
        handleClose: mockHandleClose,
        invoiceDrawerData: { invoiceUrl: "test-url" },
      },
    });

    mockUseNavigation.mockReturnValue({
      navigate: mockNavigate,
    });

    render(<InvoiceDrawerModal />);
    fireEvent.press(screen.getByText("Open"));
    expect(mockHandleClose).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(Routes.PDF_VIEWER, {
      url: "test-url",
    });
  });

  it("closes modal and navigates to Verify Invoice on Pay button click", () => {
    const mockHandleClose = jest.fn();
    const mockNavigate = jest.fn();

    mockUseModal.mockReturnValue({
      invoiceDrawerModal: {
        handleClose: mockHandleClose,
        invoiceDrawerData: { id: 1, receiver: "Test Receiver" },
      },
    });

    mockUseNavigation.mockReturnValue({
      navigate: mockNavigate,
    });

    render(<InvoiceDrawerModal />);
    fireEvent.press(screen.getByText("Pay"));
    expect(mockHandleClose).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(Routes.VERIFY_INVOICE, {
      invoice: { id: 1, receiver: "Test Receiver" },
    });
  });
});
