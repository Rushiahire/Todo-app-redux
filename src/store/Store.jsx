import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Reducer/RootReducer';

const Store = configureStore({
    reducer : rootReducer
});


export default Store;
