import { render, screen, fireEvent } from "@testing-library/react-native";
import { Invoices } from "../Invoices";
import { useInvoices } from "@/app/api/tanstack-api/invoices";
import { useModal } from "@/app/providers/ModalsProvider";
import Toast from "react-native-toast-message";
import { useNavigation } from "@react-navigation/native";

const invoiceUrl = "test-url";

const mockData = [
  {
    id: 1,
    receiver: `Tele 1 AB`,
    amount: 19157,
    dueDate: "2020-06-06",
    invoiceUrl,
  },
  {
    id: 2,
    receiver: `Tele 2 AB`,
    amount: 11231,
    dueDate: "2021-03-02",
    invoiceUrl,
  },
  {
    id: 3,
    receiver: `Tele 3 AB`,
    amount: 7521,
    dueDate: "2024-07-08",
    invoiceUrl,
  },
  {
    id: 4,
    receiver: `Tele 4 AB`,
    amount: 45688,
    dueDate: "2025-01-02",
    invoiceUrl,
  },
  {
    id: 5,
    receiver: `Tele 5 AB`,
    amount: 9157,
    dueDate: "2022-02-09",
    invoiceUrl,
  },
  {
    id: 6,
    receiver: `Tele 6 AB`,
    amount: 89129,
    dueDate: "2022-02-15",
    invoiceUrl,
  },
  {
    id: 7,
    receiver: `Tele 7 AB`,
    amount: 78127,
    dueDate: "2020-12-12",
    invoiceUrl,
  },
];

jest.mock("@/app/api/tanstack-api/invoices");
jest.mock("react-native-toast-message", () => ({
  show: jest.fn(),
}));
jest.mock("react-native-safe-area-context", () => ({
  useSafeAreaInsets: () => ({ bottom: 0 }),
}));
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

const mockUseNavigation = useNavigation as jest.Mock;
const mockUseInvoices = useInvoices as jest.Mock;
const mockUseModal = useModal as jest.Mock;

describe("Invoices Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders loading state", () => {
    mockUseInvoices.mockReturnValue({
      data: null,
      isLoading: true,
      error: null,
    });

    mockUseModal.mockReturnValue({
      uploadInvoiceDrawerModal: { handleOpen: jest.fn() },
      invoiceDrawerModal: { handleOpen: jest.fn() },
    });

    mockUseNavigation.mockReturnValue({
      navigate: jest.fn(),
    });

    const { getByTestId } = render(<Invoices />);
    expect(getByTestId("loading")).toBeTruthy();
  });

  it("renders no invoices state", () => {
    mockUseInvoices.mockReturnValueOnce({
      data: [],
      isLoading: false,
      error: null,
    });

    render(<Invoices />);
    expect(
      screen.getByText("Looks like you have no invoices right now!")
    ).toBeTruthy();
  });

  it("renders invoices list", () => {
    mockUseInvoices.mockReturnValueOnce({
      data: mockData,
      isLoading: false,
      error: null,
    });

    render(<Invoices />);
    expect(screen.getByText("Tele 6 AB")).toBeTruthy();
  });

  it("shows error toast on error", () => {
    mockUseInvoices.mockReturnValueOnce({
      data: null,
      isLoading: false,
      error: new Error("Error"),
    });

    render(<Invoices />);
    expect(Toast.show).toHaveBeenCalledWith({
      type: "error",
      text1: "Something went wrong! Please try again.",
    });
  });

  it("opens upload invoice drawer modal on button click", () => {
    mockUseInvoices.mockReturnValueOnce({
      data: mockData,
      isLoading: false,
      error: null,
    });
    const mockHandleOpen = jest.fn();

    mockUseModal.mockReturnValueOnce({
      uploadInvoiceDrawerModal: { handleOpen: mockHandleOpen },
    });

    render(<Invoices />);
    fireEvent.press(screen.getByText("Upload Invoice"));
    expect(mockHandleOpen).toHaveBeenCalled();
  });
});
