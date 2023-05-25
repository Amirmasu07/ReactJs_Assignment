import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactRouterMenu from "./ReactRouterMenu.jsx";
import RouteQ from "./01RouteQ.jsx";



class ReactCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ReactRouterMenu />} >
                        <Route path="RouteQ" element={<RouteQ />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ReactCompoRoute;