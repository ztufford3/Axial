// TODO: low effort to refactor this pattern, come back and think about this once implementation is complete
import React, { useState, FC, ChangeEvent } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import { routes } from '../utils/constants';
import { FinancialNumberDisplay, FinancialNumberInput } from '../pages';

const useStyles = makeStyles({
    applicationContainer: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

const ApplicationContainer: FC = () => {
    const [financialNumber, setFinancialNumber] = useState<string>('');

    const styles = useStyles();

    const handleSetFinancialNumber: (e: ChangeEvent<HTMLInputElement>)  => void = (e) => {
        setFinancialNumber(e.target.value);
    };

    return (
        <div className={styles.applicationContainer}>
            <Route path={`/${routes.FINANCIAL_NUMBER_DISPLAY}`}>
                <FinancialNumberDisplay financialNumber={financialNumber} />
            </Route>
            <Route path={`/${routes.FINANCIAL_NUMBER_INPUT}`}>
                <FinancialNumberInput
                    financialNumber={financialNumber}
                    handleSetFinancialNumber={handleSetFinancialNumber}
                />
            </Route>
            <Route path="/" render={() => <Redirect to={`/${routes.FINANCIAL_NUMBER_INPUT}`} />} />
        </div>
    )
};

export default ApplicationContainer;
