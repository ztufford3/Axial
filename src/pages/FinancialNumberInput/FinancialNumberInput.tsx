import React, { FC } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { spacingUnits } from '../../style';

const useStyles = makeStyles({
    inputContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textField: {
        marginTop: spacingUnits(2),
    },
});

const FinancialNumberInput: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.inputContainer}>
            <div>
                Please enter a financial number (e.g. 250k, 10m, or 0.5b)
            </div>
            <TextField
                className={styles.textField}
                variant="outlined"
            />
        </div>
    );
};

export default FinancialNumberInput;
