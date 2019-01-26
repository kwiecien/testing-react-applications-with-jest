describe('The Question List', () => {
    beforeEach(() => {
        console.log("Before each!");
    });

    beforeAll(() => {
        console.log("Before all!");
    });

    afterEach(() => {
        console.log("Before each!");
    });

    afterAll(() => {
        console.log("Before all!");
    });

    it.only('should display a list of items', () => {
        expect(40 + 2).toEqual(42);
    });

    it.skip('should be the meaning of life', () => {
        expect(41 + 2).toEqual(42);
    });
});