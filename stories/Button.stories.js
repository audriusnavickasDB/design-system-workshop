import React from 'react';

import { Button } from '../packages/button/src';

export default {
    component: Button,
    title: 'JSX/Button',
    parameters: {
        docs: {
            description: {
                component: 'Buttons allow users to take actions, and make choices, with a single tap',
            },
        },
    },
};

const ButtonTemplate = (args) => <Button data-testid="button" {...args} />;

export const Primary = ButtonTemplate.bind({});

Primary.args = {
    children: 'Button',
};

Primary.argTypes = {
    children: { type: 'string' },
    onClick: { table: { category: 'Events' } },
    size: { options: ['small', 'medium', 'large'], table: { category: 'Appearance' }, type: 'select' },
    variant: { table: { category: 'Appearance' } },
};
