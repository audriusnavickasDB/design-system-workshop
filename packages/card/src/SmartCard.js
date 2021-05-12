import PropTypes from 'prop-types';
import React from 'react';

import { Button } from '@audnavds/button'
import { Card, CardBody, CardFooter, CardFooterItem } from './elements';

export const SmartCard = ({ children, footerButtonsProps }) => {
    return (
        <Card>
            <CardBody>{children}</CardBody>
            {footerButtonsProps.length > 0 && (
                <CardFooter>
                    {footerButtonsProps.map((buttonProps, index) => {
                        return (
                            <CardFooterItem key={index}>
                                <Button {...buttonProps} />
                            </CardFooterItem>
                        );
                    })}
                </CardFooter>
            )}
        </Card>
    );
};

SmartCard.propTypes = {
    /** Any type of content, entered between the tags */
    children: PropTypes.node,
    /** Array of buttons */
    footerButtonsProps: PropTypes.arrayOf(PropTypes.shape(Button.propTypes)),
};

SmartCard.defaultProps = {
    children: undefined,
    footerButtonsProps: [],
};
