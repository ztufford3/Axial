type FinancialAbbreviationMapType = { [key: string]: number };

const financialAbbreviationMap: FinancialAbbreviationMapType = {
    'k': 1000,
    'm': 1000000,
    'b': 1000000000,
};

enum AppRoute {
    FINANCIAL_NUMBER_DISPLAY = 'FinancialNumberDisplay',
    FINANCIAL_NUMBER_INPUT = 'FinancialNumberInput',
};

export { AppRoute, financialAbbreviationMap };
