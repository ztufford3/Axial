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
});

const FinancialNumberInput: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.inputContainer}>
            <TextField variant="outlined" />
        </div>
    );
};

export default FinancialNumberInput;
