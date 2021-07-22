import React, { ChangeEvent, FC } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { spacingUnits } from '../../style';

type FinancialNumberInputProps = {
    financialNumber: string,
    handleSetFinancialNumber: (e: ChangeEvent<HTMLInputElement>) => void,
};

const useStyles = makeStyles({
    textField: {
        marginTop: spacingUnits(2),
    },
});

const FinancialNumberInput: FC<FinancialNumberInputProps> = (props) => {
    const { financialNumber, handleSetFinancialNumber } = props;

    const styles = useStyles();

    return (
        <>
            <div>
                Please enter a financial number (e.g. 250k, 10m, or 0.5b)
            </div>
            <TextField
                className={styles.textField}
                onChange={handleSetFinancialNumber}
                value={financialNumber}
                variant="outlined"
            />
        </>
    );
};

export default FinancialNumberInput;
