import React, { Component, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import ReactRouterMenu from "./ReactRouterMenu.jsx";


const QuOne = React.lazy(() => import('./QuOne.jsx'))

class ReactCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ReactRouterMenu />} >
                        <Route
                            index
                            element={
                                <Suspense fallback={<h1>Loading page....</h1>}>
                                    <QuOne />
                                </Suspense>
                            }>
                            </Route>
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ReactCompoRoute;