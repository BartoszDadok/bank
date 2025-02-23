import { PaymentOptions } from "@/app/screens";

type Invoice = {
  id: string;
  receiver: string;
  amount: number;
  dueDate: string;
  invoiceUrl: string;
};
type InvoicesResponse = Array<Invoice>;

type PayType = {
  invoice: Invoice;
  paymentOption: PaymentOptions;
};

export { InvoicesResponse, Invoice, PayType };
