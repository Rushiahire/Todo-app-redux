import { TODO_FORM_TITLE_CHANGE, TODO_FORM_DESCRIPTION_CHANGE } from "./ActionType"


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

