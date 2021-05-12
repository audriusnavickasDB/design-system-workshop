const STORYBOOK_PATH = ['MDX', 'Input', 'Default'];

/** Practice #7 Write a test for Input component to verify visual appearance for these cases:
 * 1. Empty input field with placeholder text set to John Doe
 * 2. Filled small input field with entered value: John. Verify if entered value is really John
 * Note: You will need to add new data-testid for input component story
 */

describe('Button', () => {
    beforeEach(() => {
        cy.visitStorybook(STORYBOOK_PATH);
    });

    it('should display primary, medium size Button and take snapshot', () => {
        // ...
    });
});
