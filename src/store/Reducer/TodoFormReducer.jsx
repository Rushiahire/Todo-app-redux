
import { TODO_FORM_TITLE_CHANGE, TODO_FORM_DESCRIPTION_CHANGE, TODO_FORM_SUBMIT_CHANGE ,RESET_FORM_ON_SUBMIT } from "../Action/ActionType";


const initialState = {
    title:'',
    description:'',
    isFormSubmit: false
}


const onFormTitleChangeReducer = (currentState,newValue) => {
    return {
        ...currentState,
        title: newValue
    }
}


const onFormDescriptionChangeReducer = (currentValue,newValue) => {
    return {
        ...currentValue,
        description : newValue
    }
}


const onFormSubmitReducer = (currentValue,data) => {
    return {
        ...currentValue, isFormSubmit :data
    }
}

const resetFormReducer = () => {
    return {
        title : '',
        description:''
    }
}

export const onFormController = (state=initialState,action) => {
    switch(action.type) {
        case TODO_FORM_TITLE_CHANGE:
            return onFormTitleChangeReducer(state,action.title)

        case TODO_FORM_DESCRIPTION_CHANGE:
            return onFormDescriptionChangeReducer(state,action.description)

        case TODO_FORM_SUBMIT_CHANGE :
            return onFormSubmitReducer(state,action.data)

        case RESET_FORM_ON_SUBMIT :
            return resetFormReducer()

        default :
            return state
    }
}