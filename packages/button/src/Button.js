import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from './button.scss';

const MAIN_CLASSNAME = 'button';

export const Button = ({ children, className, isDisabled, isFullWidth, onClick, size, variant, ...other }) => (
    <button
        className={classNames(
            styles[MAIN_CLASSNAME],
            {
                [styles[`${MAIN_CLASSNAME}--disabled`]]: isDisabled,
                [styles[`${MAIN_CLASSNAME}--${size}`]]: true,
                [styles[`${MAIN_CLASSNAME}--${variant}`]]: true,
                [styles[`${MAIN_CLASSNAME}--full-width`]]: isFullWidth,
            },
            className
        )}
        disabled={isDisabled}
        onClick={onClick}
        type="button"
        {...other}
    >
        {children}
    </button>
);

Button.propTypes = {
    /** Any type of content, entered between the tags */
    children: PropTypes.node,
    /** If true, disables element interactions and visually adjust appearance */
    isDisabled: PropTypes.bool,
    /** If true, adjust Button styles to take full space horizontally */
    isFullWidth: PropTypes.bool,
    /** Callback function for main click interaction */
    onClick: PropTypes.func,
    /** Changes element dimensions based on prop value */
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    /** Changes element appearance based on prop value */
    variant: PropTypes.oneOf(['primary', 'secondary']),
};

Button.defaultProps = {
    children: undefined,
    isDisabled: false,
    isFullWidth: false,
    onClick: () => {},
    size: 'medium',
    variant: 'primary',
};
