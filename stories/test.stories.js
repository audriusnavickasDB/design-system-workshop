import React from 'react';

import { Button } from '../packages/button/src';

export default {
    component: Button,
    title: 'TEST/testukas',
};

export const Default = (args) => <Button {...args}>Test</Button>;
export const Secondary = (args) => <Button {...args} variant="secondary">Test</Button>;
export const SecondarySmall = (args) => <Button {...args} variant="secondary" size="small">Test</Button>;
