import { financialAbbreviationMap } from "./constants";

type ConvertFinancialNumberFromStringType = (financialNumber: string) => number | null;

/**
 * @param financialNumber a string containing a number and a financial suffix (e.g. k, m, or b), not case sensitive
 * @returns the numeric equivalent of the string passed in or null if unable to convert
 */
const convertFinancialNumberFromString: ConvertFinancialNumberFromStringType = (financialNumber) => {
    const parsedFinancialNumber = financialNumber.match(/^(\d*\.\d+|\d+)(k|b|M)$/);
    console.log(parsedFinancialNumber)
    if (!parsedFinancialNumber || parsedFinancialNumber.length !== 3) return null;

    const prefixValue = parseFloat(parsedFinancialNumber[1]);
    const suffix = parsedFinancialNumber[2].toLowerCase();
    const suffixValue: number = financialAbbreviationMap[suffix];

    return prefixValue * suffixValue;
};

type FormatFinancialNumberType = (numberToFormat: number) => string;

/**
 * @param numberToFormat any number
 * @returns an equivalent string formatted with commas
 */
const formatFinancialNumber: FormatFinancialNumberType = (numberToFormat) => {
    // TODO: nice to have once we finish the critical tasks
    return '';
}

export {
    convertFinancialNumberFromString,
};
