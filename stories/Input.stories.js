import React from 'react';

import { Input } from '../packages/input/src';

/** Practice #1 Migrate Input component story to MDX format
 * 1. Everything should be identical to this story
 * 2. Main category should be: MDX
 */

export default {
    component: Input,
    title: 'JSX/Input',
    parameters: {
        docs: {
            description: {
                component: 'Inputs let users enter and edit text.',
            },
        },
    },
};

const InputTemplate = (args) => <Input data-testid="input" {...args} />;

export const Default = InputTemplate.bind({});

Default.args = {
    id: 'input',
    label: 'Full Name',
    placeholder: 'John Doe',
};

Default.argTypes = {
    label: { type: 'string' },
};
