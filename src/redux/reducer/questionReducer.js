import * as types from "../action/actionType";

const initialQuestionState = {
    questions: [],

};

export default function questions(state = initialQuestionState, action) {
    switch (action.type) {
        //-----------------------------------------------------------------------------        
        // Add all question lists
        case types.ADD_QUESTIONS_LISTS:
            return {
                ...state,
                questions: action.payload,
            };

        case types.ADD_QUESTION_TO_LISTS:
            return {
                ...state,
                questions: [
                    ...state.questions,
                    action.payload.question,
                ],
            };

        // Delete a question in list
        case types.DELETE_QUESTION_TO_LISTS:
            return {
                ...state,
                questions: state.questions.filter(
                    (q) => q.id !== action.payload.id
                ),
            };

        // Update a question in  list
        case types.UPDATE_QUESTION_TO_LISTS:
            return {
                ...state,
                questions: state.questions.map((q) =>
                    q.id === action.payload.id
                        ? { ...q, questionText: action.payload.updatedQuestion }
                        : q
                ),
            };
        //--------------------------------------------------------------------------------
        // Add a category types option
        case types.ADD_OPTIONS:
            return {
                ...state,
                questions: state.questions.map((q) =>
                    q.id === action.payload.questionId
                        ? {
                            ...q,
                            [action.payload.optionKey]: [...q[action.payload.optionKey], action.payload.data]
                        }
                        : q
                ),
            };

        // Delete a category option/answer
        case types.DELETE_OPTIONS:
            return {
                ...state,
                questions: state.questions.map((q) =>
                    q.id === action.payload.questionId
                        ? {
                            ...q,
                            [action.payload.optionKey]: q[action.payload.optionKey].filter(
                                (opt, index) => index !== action.payload.index
                            ),
                        }
                        : q
                ),
            };

        // Update a category option/answer
        case types.UPDATE_OPTIONS:
            return {
                ...state,
                questions: state.questions.map((q) =>
                    q.id === action.payload.questionId
                        ? {
                            ...q,
                            [action.payload.optionKey]: q[action.payload.optionKey].map((opt, index) =>
                                index === action.payload.index
                                    ? action.payload.newData
                                    : opt
                            )
                        }
                        : q
                ),
            };
        default:
            return state;
    }
}
