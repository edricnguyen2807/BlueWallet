import { BigcoinUnit } from '../models/bigcoinUnits';

export type PaymentCodeStackParamList = {
  PaymentCode: { paymentCode: string };
  PaymentCodesList: {
    memo: string;
    address: string;
    walletID: string;
    amount: number;
    amountSats: number;
    unit: BigcoinUnit;
    isTransactionReplaceable: boolean;
    launchedBy: string;
    isEditable: boolean;
    uri: string /* payjoin uri */;
  };
};
