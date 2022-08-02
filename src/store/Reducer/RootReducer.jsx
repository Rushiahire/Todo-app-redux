import { combineReducers } from 'redux';
import { onFormController } from './TodoFormReducer';
import { todoListReducer } from './TodoListReducer';


const RootReducer = combineReducers({
    onFormController,
    todoListReducer
});


export default RootReducer;