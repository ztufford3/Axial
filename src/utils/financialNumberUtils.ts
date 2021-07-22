import { financialAbbreviationMap } from "./constants";

type ConvertFinancialNumberFromStringType = (financialNumber: string) => number | null;

/**
 * @param financialNumber a string containing a number and a financial suffix (e.g. k, m, or b), not case sensitive
 * @returns the numeric equivalent of the string passed in or null if unable to convert
 */
const convertFinancialNumberFromString: ConvertFinancialNumberFromStringType = (financialNumber) => {
    const parsedFinancialNumber = financialNumber.match(/^(\d*\.\d+|\d+)(k|K|b|B|m|M)$/);

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
    if (numberToFormat <= 999) return '';

    const reverseInput = numberToFormat.toString().split('').reverse().join('');
    const commaSeparatedReverseInput = reverseInput.replace(/(\d{3})/g, '$1,');
    
    const unReversedString = commaSeparatedReverseInput.split('').reverse().join('');

    const isCommaLastValue = reverseInput.length % 3 === 0;

    return unReversedString.substring(isCommaLastValue ? 1 : 0);
}

export {
    convertFinancialNumberFromString,
    formatFinancialNumber,
};
