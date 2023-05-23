import { BillsModel } from "@models/index.model";

export const getServiceValue = (name: string, bills: BillsModel[]) => {
  let total = 0;
  for (let i = 0; i < bills.length; i++) {
    if (name === bills[i].services) {
      total = total + bills[i].amount;
    }
  }
  return total;
}

export const getPercentageOfValue = (servicesValue: number, totalAmount: number) => (servicesValue * totalAmount) / 100;

