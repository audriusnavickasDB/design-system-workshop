import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

import styles from '../card.scss';

export const CardBody = ({ className, ...other }) => {
    return <div className={classNames(styles['card__body'], className)} {...other} />;
};

CardBody.propTypes = {
    className: PropTypes.string,
};

CardBody.defaultProps = {
    className: undefined,
};
