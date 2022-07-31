
import { TODO_FORM_TITLE_CHANGE, TODO_FORM_DESCRIPTION_CHANGE } from "../Action/ActionType";


const initialState = {
    title:'',
    description:''
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


export const onFormController = (state=initialState,action) => {
    switch(action.type) {
        case TODO_FORM_TITLE_CHANGE:
            return onFormTitleChangeReducer(state,action.title)

        case TODO_FORM_DESCRIPTION_CHANGE:
            return onFormDescriptionChangeReducer(state,action.description)
        
        default :
            return state
    }
}