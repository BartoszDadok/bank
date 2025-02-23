import { Invoice } from "../api/tanstack-api/invoices";
import { PaymentOptions } from "../screens";
import { Routes } from "./routes";

export type RootStackParamList = {
  //Routes without props
  [Routes.INVOICES]: undefined;
  //Routes with props
  [Routes.PDF_VIEWER]: { url: string };
  [Routes.VERIFY_INVOICE]: { invoice?: Invoice } | undefined;
  [Routes.PAYMENT_METHODS]: { invoice?: Invoice } | undefined;
  [Routes.CONFIRMATION]:
    | { invoice?: Invoice; paymentOption?: PaymentOptions }
    | undefined;
};
