import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { spacingUnits } from '../../style';
import { convertFinancialNumberFromString, formatFinancialNumber } from '../../utils/financialNumberUtils';
import ChangeRouteButton from '../ChangeRouteButton';
import { AppRoute } from '../../utils/constants';

type FinancialNumberDisplayProps = { financialNumber: string };

const useStyles = makeStyles({
    yourResultText: {
        marginBottom: spacingUnits(2),
    },
});

const FinancialNumberDisplay: FC<FinancialNumberDisplayProps> = (props) => {
    const { financialNumber } = props;

    const styles = useStyles();

    const convertedFinancialNumber = convertFinancialNumberFromString(financialNumber);
    const formattedFinancialNumber = convertedFinancialNumber && formatFinancialNumber(convertedFinancialNumber);

    // Account for the case where the number is well below 1 and can't be formatted with commas
    const displayNumber = convertedFinancialNumber && convertedFinancialNumber > 999 ? formattedFinancialNumber : convertedFinancialNumber;

    const errorMessage = 'Oops! Something went wrong. Please try again!';

    return (
        <>
            {!errorMessage && (
                <div className={styles.yourResultText}>
                    The numerical value is:
                </div>
            )}
            <div>
                {displayNumber || errorMessage}
            </div>
            <ChangeRouteButton
                newRoute={AppRoute.FINANCIAL_NUMBER_INPUT}
                text="Back to Input"
            />
        </>
    );
};

export default FinancialNumberDisplay;
