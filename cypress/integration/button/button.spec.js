const STORYBOOK_PATH = ['Components', 'Button', 'Primary'];

describe('Button', () => {
    beforeEach(() => {
        cy.visitStorybook(STORYBOOK_PATH);
    });

    it('should display primary Button and take snapshot', () => {
        cy.getByTestId('button').matchImageSnapshot();
    });

    it('should display secondary Button and take snapshot', () => {
        cy.changeControl(STORYBOOK_PATH, {
            variant: 'secondary',
            size: 'small',
        });
        cy.getByTestId('button').matchImageSnapshot();
    });
});
