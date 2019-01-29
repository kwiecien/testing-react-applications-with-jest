import {mapStateToProps, QuestionDetailDisplay} from '../QuestionDetail';

describe('The Question Detail Component', () => {
    descibe('The Container Element', () => {
        describe('mapStateToProps', () => {
            it('should mapStateToProps correctly', () => {
                const sampleQuestion = {
                    question_id: 42,
                    body: "Space is big"
                };
                const appState = {
                    questions: [sampleQuestion]
                };
                const ownProps = {
                    question_id: 42
                };
                const componentState = mapStateToProps(appState, ownProps);
                expect(componentState).toEqual(sampleQuestion);
            });
        });
    });

    it('should not regress', () => {

    });
});