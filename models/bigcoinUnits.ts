export const BigcoinUnit = {
  BBTC: 'BBTC',
  SATS: 'sats',
  LOCAL_CURRENCY: 'local_currency',
  MAX: 'MAX',
} as const;
export type BigcoinUnit = (typeof BigcoinUnit)[keyof typeof BigcoinUnit];

export const Chain = {
  ONCHAIN: 'ONCHAIN',
  OFFCHAIN: 'OFFCHAIN',
} as const;
export type Chain = (typeof Chain)[keyof typeof Chain];
