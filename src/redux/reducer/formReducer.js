import * as types from "../action/actionType"


const initialFormState = {
    formList: [],
    currentForm: null
}

export default function form(state = initialFormState, action) {

    switch (action.type) {
        case types.ADD_FORM_LIST:
            return {
                ...state,
                formList: action.payload
            }


        case types.ADD_FORM:
            return {
                ...state,
                formList: [...state.formList, action.payload]
            }

        case types.DELETE_FORM:
            const filteredFormList = state.formList.filter((form) => form._id !== action.payload)
            return {
                ...state,
                formList: [...filteredFormList]
            }

        case types.UPDATE_FORM:
            const updatedFormList = state.formList.map((form) => form._id === action.payload.formId ? action.payload.data : form)
            return {
                ...state,
                formList: [...updatedFormList]
            }
        case types.ADD_CURRENT_FORM:
            return {
                ...state,
                currentForm: action.payload
            }

        case types.UPDATE_CURRENT_FORM:
            return {
                ...state,
                currentForm: { ...state.currentForm, [action.payload.key]: action.payload.data }
            }



        default:
            return state;
    }

}