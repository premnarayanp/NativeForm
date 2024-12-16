import * as types from './actionType';

export const addQuestionsLists = (data) => ({
    type: types.ADD_QUESTIONS_LISTS,
    payload: data
});

export const addQuestionToLists = (data) => ({
    type: types.ADD_QUESTION_TO_LISTS,
    payload: data
});

export const deleteQuestionToLists = (data) => ({
    type: types.DELETE_QUESTION_TO_LISTS,
    payload: data
});

export const updateQuestionToLists = (data) => ({
    type: types.UPDATE_QUESTION_TO_LISTS,
    payload: data
});


//--------------------------------------------------
export const addObOptions = (data) => ({
    type: types.ADD_OPTIONS,
    payload: data
});

export const deleteOptions = (data) => ({
    type: types.DELETE_OPTIONS,
    payload: data
});

export const updateOptions = (data) => ({
    type: types.UPDATE_OPTIONS,
    payload: data
});

