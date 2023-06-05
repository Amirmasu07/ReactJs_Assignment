import React, { Component, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactRouterMenu from "./ReactRouterMenu.jsx";
import QuOne from "./QuOne.jsx";



class ReactCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ReactRouterMenu />} >
                        <Route path="QuOne" element={<QuOne />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ReactCompoRoute;