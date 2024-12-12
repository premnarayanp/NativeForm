import * as types from './actionTypes';

export const addFormList = (data) => ({
    type: types.ADD_FORM_LIST,
    payload: data
});

export const addForm = (data) => ({
    type: types.ADD_FORM,
    payload: data
});

export const deleteForm = (data) => ({
    type: types.DELETE_FORM,
    payload: data
});

export const updateForm = (data) => ({
    type: types.UPDATE_FORM,
    payload: data
});

export const addCurrentForm = (data) => ({
    type: types.ADD_CURRENT_FORM,
    payload: data
});

export const updateCurrentForm = (data) => ({
    type: types.UPDATE_CURRENT_FORM,
    payload: data
});



// export const addFormTitle = (data) => ({
//     type: types.ADD_FORM_TITLE,
//     payload: data
// });

// export const addFormHeader = (data) => ({
//     type: types.ADD_FORM_HEADER,
//     payload: data
// });

