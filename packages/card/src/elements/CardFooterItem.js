import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../card.scss';

export const CardFooterItem = ({ className, ...other }) => {
    return <div className={classNames(styles['card__footer-item'], className)} {...other} />;
};

CardFooterItem.propTypes = {
    className: PropTypes.string,
};

CardFooterItem.defaultProps = {
    className: undefined,
};
