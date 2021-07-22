import React, { FC } from 'react';
import { makeStyles, Button } from '@material-ui/core';

import { AppRoute } from '../../utils/constants';
import { useHistory } from 'react-router-dom';
import { spacingUnits } from '../../style';

type ChangeRouteButtonProps = {
    disabled?: boolean,
    newRoute: AppRoute,
    text: string,
};

const defaultProps = { disabled: false };

const useStyles = makeStyles({
    changeRouteButton: {
        backgroundColor: 'grey',
        color: 'white',
        marginTop: spacingUnits(4),
        '&:hover': {
            backgroundColor: 'black',
        },
    },
});

const ChangeRouteButton: FC<ChangeRouteButtonProps> = (props) => {
    const { disabled, newRoute, text } = props;

    const styles = useStyles();
    const history = useHistory();

    const handleClick = () => {
        history.push(newRoute);
    };

    return (
        <Button
            className={styles.changeRouteButton}
            disabled={disabled}
            onClick={handleClick}
            variant="contained"
        >
            {text}
        </Button>
    );
};

ChangeRouteButton.defaultProps = defaultProps;

export default ChangeRouteButton;
