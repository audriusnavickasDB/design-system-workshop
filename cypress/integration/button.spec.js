const STORYBOOK_PATH = ['MDX', 'Button', 'Primary'];

/** Practice #7 Write a test for button component to verify visual appearance for these cases:
 * 1. Secondary variant
 * 2. Secondary variant, disabled and small size
 */

describe('Button', () => {
    beforeEach(() => {
        cy.visitStorybook(STORYBOOK_PATH);
    });

    it('should display primary, medium size Button and take snapshot', () => {
        cy.changeControl(STORYBOOK_PATH, {
            size: 'medium',
        });
        cy.getByTestId('button').matchImageSnapshot();
    });
});
