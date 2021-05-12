import PropTypes from 'prop-types';
import React from 'react';

import { InputLabel } from './elements/InputLabel';
import { InputField } from './elements/InputField';
import styles from './input.scss';

const MAIN_CLASSNAME = 'input';

export const Input = ({ hasError, id, label, onChange, ...other }) => {
    return (
        // Practice #1 id for label is not needed
        <label id={id} className={styles[MAIN_CLASSNAME]} htmlFor={id}>
            <InputLabel hasError={hasError}>{label}</InputLabel>
            <InputField hasError={hasError} id={id} name="input" onChange={onChange} {...other} />
        </label>
    );
};

Input.propTypes = {
    /** If true, changes visual appearance to error state */
    hasError: PropTypes.bool,
    /** Unique input field identifier */
    id: PropTypes.string.isRequired,
    /** Input field label */
    label: PropTypes.node.isRequired,
    /** Callback function for component value manipulation */
    onChange: PropTypes.func,
    /** Temporary text that is shown when input field is empty */
    placeholder: PropTypes.string,
    /** Input field value */
    value: PropTypes.string,
};

Input.defaultProps = {
    hasError: false,
    onChange: () => {},
    placeholder: '',
    value: '',
};
