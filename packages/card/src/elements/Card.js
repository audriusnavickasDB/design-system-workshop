import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../card.scss';

export const Card = ({ className, ...other }) => {
    return <div className={classNames(styles['card'], className)} {...other} />;
};

Card.propTypes = {
    className: PropTypes.string,
};

Card.defaultProps = {
    className: undefined,
};
