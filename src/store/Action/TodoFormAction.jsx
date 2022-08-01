import { TODO_FORM_TITLE_CHANGE, TODO_FORM_DESCRIPTION_CHANGE, TODO_FORM_SUBMIT_CHANGE ,RESET_FORM_ON_SUBMIT} from "./ActionType"


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

export const onTodoFormSubmit = (data) => {
    return {
        type : TODO_FORM_SUBMIT_CHANGE,
        data : data
    }
}

export const resetFormAction = () => {
    return {
        type : RESET_FORM_ON_SUBMIT
    }
}