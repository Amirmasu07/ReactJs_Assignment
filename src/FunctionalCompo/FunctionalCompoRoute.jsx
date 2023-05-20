import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import FunctionalCompoMenu from './FunctionalCompoMenu.jsx';
import Qone from './01Qone.jsx'
import Qtwo from './02Qtwo.jsx'





class FunctionalCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<FunctionalCompoMenu />} >
                        <Route path="Qone" element={<Qone />} />
                        <Route path='Qtwo' element={<Qtwo/>} />
                        
                    </Route>
                </Routes>
            </>
        );
    }
}

export default FunctionalCompoRoute;