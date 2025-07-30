import * as bigcoin from 'bigcoinjs-lib';

export function isValidBech32Address(address: string): boolean {
  try {
    bigcoin.address.fromBech32(address);    
    return true;
  } catch (e) {
    return false;
  }
}