import * as bigcoin from 'bigcoinjs-lib';

/**
 * Combines two PSBTs and returns the combined PSBT.
 * @param {string} psbtBase64 - The base64 string of the first PSBT.
 * @param {string} newPSBTBase64 - The base64 string of the new PSBT to combine.
 * @returns {bigcoin.Psbt} - The combined PSBT.
 */
interface CombinePSBTsParams {
  psbtBase64: string;
  newPSBTBase64: string;
}

export const combinePSBTs = ({ psbtBase64, newPSBTBase64 }: CombinePSBTsParams): bigcoin.Psbt => {
  if (psbtBase64 === newPSBTBase64) {
    return bigcoin.Psbt.fromBase64(psbtBase64);
  }
  try {
    const psbt = bigcoin.Psbt.fromBase64(psbtBase64);
    const newPsbt = bigcoin.Psbt.fromBase64(newPSBTBase64);
    psbt.combine(newPsbt);
    return psbt;
  } catch (err) {
    console.error('Error combining PSBTs:', err);
    throw err;
  }
};
