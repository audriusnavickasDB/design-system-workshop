import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../card.scss';

export const CardFooter = ({ className, ...other }) => {
    return <div className={classNames(styles['card__footer'], className)} {...other} />;
};

CardFooter.propTypes = {
    className: PropTypes.string,
};

CardFooter.defaultProps = {
    className: undefined,
};
