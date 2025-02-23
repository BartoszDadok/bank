import { generateRandomNumber } from "@/app/utils";
import { randomUUID } from "expo-crypto";

const invoiceUrl =
  "https://firebasestorage.googleapis.com/v0/b/tbon-2fa26.appspot.com/o/invoice.pdf?alt=media";

const mockData = [
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 19157,
    dueDate: "2020-06-06",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 11231,
    dueDate: "2021-03-02",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 7521,
    dueDate: "2024-07-08",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 45688,
    dueDate: "2025-01-02",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 9157,
    dueDate: "2022-02-09",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 89129,
    dueDate: "2022-02-15",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 78127,
    dueDate: "2020-12-12",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 191152,
    dueDate: "2023-11-10",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 121327,
    dueDate: "2022-08-10",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 51127,
    dueDate: "2022-06-01",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 21167,
    dueDate: "2025-02-03",
    invoiceUrl,
  },
  {
    id: randomUUID(),
    receiver: `Tele ${generateRandomNumber()} AB`,
    amount: 11827,
    dueDate: "2019-11-10",
    invoiceUrl,
  },
];

export { mockData, invoiceUrl };
