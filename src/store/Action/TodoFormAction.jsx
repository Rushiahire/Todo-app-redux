import { TODO_FORM_TITLE_CHANGE, 
    TODO_FORM_DESCRIPTION_CHANGE, 
    TODO_FORM_SUBMIT_CHANGE, 
    ADD_DATA_IN_LIST,
    RESET_FORM_ON_SUBMIT
    } from "./ActionType"


export const onTodoFormTitleChange = (data) => {
    return {
        type: TODO_FORM_TITLE_CHANGE,
        title: data
    }
}


export const onTodoFormDescriptionChange = (data) => {
    return {
        type: TODO_FORM_DESCRIPTION_CHANGE,
        description : data
    }
}

// export const onTodoFormSubmit = (data) => {
//     return {
//         type : TODO_FORM_SUBMIT_CHANGE,
//         data : data
//     }
// }

export const addToList = (data) => {
    return {
        type : ADD_DATA_IN_LIST,
        data : data
    }
}

export const resetFormAction = () => {
    return {
        type : RESET_FORM_ON_SUBMIT
    }
}