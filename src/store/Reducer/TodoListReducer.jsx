import { ADD_DATA_IN_LIST } from "../Action/ActionType";


const initialState = []



export const todoListReducer = (state=initialState,action) => {
    switch(action.type) {
        case ADD_DATA_IN_LIST :
            return [...state,action.data]


        default :
            return state
    }
}

