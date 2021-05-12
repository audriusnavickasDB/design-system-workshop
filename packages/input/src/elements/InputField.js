import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from '../input.scss';

const MAIN_CLASSNAME = 'input__field';

export const InputField = ({ className, hasError, ...other }) => {
    return (
        <input
            className={classNames(
                styles[MAIN_CLASSNAME],
                {
                    [styles[`${MAIN_CLASSNAME}--has-error`]]: hasError,
                },
                className
            )}
            {...other}
        />
    );
};

InputField.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    hasError: PropTypes.bool,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    onChange: PropTypes.func,
};

InputField.defaultProps = {
    className: '',
    hasError: false,
    value: '',
    onChange: () => {},
};
