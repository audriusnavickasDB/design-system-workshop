import { addons } from '@storybook/addons';
import customTheme from './customTheme';

addons.setConfig({
    panelPosition: 'right',
    theme: customTheme,
});
