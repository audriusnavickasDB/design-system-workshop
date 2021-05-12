import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from '../input.scss';

const MAIN_CLASSNAME = 'input__label';

export const InputLabel = ({ children, hasError, ...other }) => {
    return (
        <span
            className={classNames(styles[MAIN_CLASSNAME], {
                [styles[`${MAIN_CLASSNAME}--has-error`]]: hasError,
            })}
            {...other}
        >
            {children}
        </span>
    );
};

InputLabel.propTypes = {
    children: PropTypes.node.isRequired,
    hasError: PropTypes.bool,
};

InputLabel.defaultProps = {
    hasError: false,
};
