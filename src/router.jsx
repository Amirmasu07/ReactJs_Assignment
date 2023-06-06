import React, { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import AboutPage from "./AboutPage.jsx";
import HeaderComp from "./CommonCompo/Header";
import ExampleCompo from "./ExampleCompo";
// import ClassCompoQUESTION from "./ClassCompo/01ClassCompoQUESTION.jsx";
// import ClassCompoMenu from "./ClassCompo/ClassCompoMenu";
// import ReactRouterMenu from "./ReactCompo/ReactRouterMenu.jsx";

const ClassCompoRoute = React.lazy(() => { return import('./ClassCompo/ClassCompoRoute.jsx') })
// const FunctionalCompoRoute = React.lazy(()=>{ return import('./FunctionalCompo/FunctionalCompoRoute.jsx') })
const FunctionalCompoRoute = React.lazy(() => import('./FunctionalCompo/FunctionalCompoRoute'))
// const ReactCompoRoute = React.lazy(() => import('./ReactCompo/ReactCompoRoute.jsx'))
const ReactCompoRoute = React.lazy(()=>{ return import('./ReactCompo/ReactCompoRoute.jsx') })

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <><HeaderComp /><HomePage /></>,
    },
    {
        path: "/about",
        element: <><HeaderComp /><AboutPage></AboutPage></>,
    },
    {
        path: "/examples",
        element: <><HeaderComp /><ExampleCompo /></>,
        children: [
            {
                path: "classcompo/*",
                element: <Suspense><ClassCompoRoute /></Suspense>,
            },
            {
                path: "functionalcompo/*",
                element: <Suspense><FunctionalCompoRoute /></Suspense>,
            },
            {
                path: "ReactCompo/*",
                element: <Suspense fallback={<h1>loading page....</h1>}><ReactCompoRoute /></Suspense>,
            },
        
        ]
    },
]);


export default MainRouter;