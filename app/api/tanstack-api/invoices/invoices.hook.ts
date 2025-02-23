import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { InvoicesResponse, PayType } from "./invoices.types";
import { invoiceUrl, mockData } from "@/app/api/mock-data";
import { axiosClient } from "@/app/api/axios-api";
import { randomUUID } from "expo-crypto";
import { generateRandomNumber, generateRandomPrice } from "@/app/utils";

const INVOICE_PATH = "";

const getInvoices = async () => {
  await axiosClient.get<Array<InvoicesResponse>>(INVOICE_PATH);
  return mockData;
};

const postInvoice = async () => {
  await axiosClient.post(INVOICE_PATH);
  const newInvoice = {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: generateRandomPrice(),
    dueDate: "2022-06-06",
    invoiceUrl,
  };
  return mockData.push(newInvoice);
};

const postPayInvoice = async ({ invoice, paymentOption }: PayType) => {
  await axiosClient.post(INVOICE_PATH, {
    invoice: invoice,
    paymentOption: paymentOption,
  });
  return { status: "success" };
};

const useInvoices = () =>
  useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

const usePatchInvoice = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postInvoice,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["invoices"] });
    },
  });
};
const usePayInvoice = () => {
  return useMutation({
    mutationFn: (data: PayType) => postPayInvoice(data),
  });
};

export { useInvoices, usePatchInvoice, usePayInvoice };
