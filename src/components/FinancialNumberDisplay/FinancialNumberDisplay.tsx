import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core';
import { spacingUnits } from '../../style';
import { convertFinancialNumberFromString } from '../../utils/financialNumberUtils';
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

    return (
        <>
            <div className={styles.yourResultText}>
                The numerical value is:
            </div>
            <div>
                {convertFinancialNumberFromString(financialNumber)}
            </div>
            <ChangeRouteButton
                newRoute={AppRoute.FINANCIAL_NUMBER_INPUT}
                text="Back to Input"
            />
        </>
    );
};

export default FinancialNumberDisplay;
