import React from 'react';
import {Routes , Route} from 'react-router-dom';
import Home from './components/home/Home';
import Form from './components/form/Form';

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path="/"  element={<Home/>}/>
                <Route path="/addData"  element={<Form/>} />

            </Routes>
        </div>
    );
}

export default AppRoutes;
