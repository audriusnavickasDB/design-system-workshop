import { addMatchImageSnapshotCommand } from 'cypress-image-snapshot/command';

const getStoryId = (path) => {
    const pathToMainStory = path.slice(0, path.length - 1).join('-');
    const mainStoryName = path.slice(-1);
    const storyPath = pathToMainStory + '--' + mainStoryName;

    return storyPath.toLowerCase();
}

const getStorybookPath = (path) => {
    const urlPrefix = 'iframe.html?path=/story/';
    return urlPrefix + getStoryId(path);
};

addMatchImageSnapshotCommand({
    customDiffConfig: { threshold: 0.1 },
    failureThreshold: 0.03,
    failureThresholdType: 'percent',
});

Cypress.Commands.add('visitStorybook', (storyPath) => cy.visit(getStorybookPath(storyPath)));

Cypress.Commands.add('changeControl', (storyPathItems, updatedArgs) => {
    const log = Cypress.log({
        $el: Cypress.$('#root'),
        message: updatedArgs,
        name: 'Control',
    });
    log.snapshot('before');
    const now = performance.now();
    /** eslint-disable-next-line no-underscore-dangle */
    const addons = cy.state('window').__STORYBOOK_ADDONS;
    const storyId = getStoryId(storyPathItems);
    addons.getChannel().emit('updateStoryArgs', {
        storyId,
        updatedArgs,
    });
    addons.getChannel().emit('forceReRender');
    log.set('consoleProps', () => ({
        time: performance.now() - now,
        updatedArgs,
    }));
    log.snapshot('after');
    log.end();
    return null;
});

Cypress.Commands.add('getByTestId', (testId, options = {}) => cy.get(`[data-testid=${testId}]`, options));
