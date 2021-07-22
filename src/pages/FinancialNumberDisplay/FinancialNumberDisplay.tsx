import React, { FC } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { spacingUnits } from '../../style';
import { convertFinancialNumberFromString } from '../../utils/financialNumberUtils';

type FinancialNumberDisplayProps = { financialNumber: string };

const useStyles = makeStyles({
    displayContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    yourResultText: {
        marginBottom: spacingUnits(2),
    },
});

const FinancialNumberDisplay: FC<FinancialNumberDisplayProps> = (props) => {
    const { financialNumber } = props;

    const styles = useStyles();

    return (
        <div className={styles.displayContainer}>
            <div className={styles.yourResultText}>
                Please enter a financial number (e.g. 250k, 10m, or 0.5b)
            </div>
            <div>
                {convertFinancialNumberFromString(financialNumber)}
            </div>
        </div>
    );
};

export default FinancialNumberDisplay;
