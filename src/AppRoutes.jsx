import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './components/home/Home';
import AddToList from './components/form/AddToList';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/addtolist"  element={<AddToList/>} />

            </Routes>
        </div>
    );
}

export default AppRoutes;
