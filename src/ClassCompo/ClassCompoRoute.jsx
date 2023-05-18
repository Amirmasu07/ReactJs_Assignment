import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import ClassCompoMenu from './ClassCompoMenu';
import ClassCompoQUESTION from './01ClassCompoQUESTION.jsx';
import ClassCompoNpm from './02ClassCompoNpm.jsx';
import ClassCompoRole from './03ClassCompoRole.jsx';
import Cli from './04Cli';
import Components from './05Components';
import Question from './06Question';
import Qseven from './07Qseven';
import Qeight from './08Qeight';
import QNine from './09QNine';
import QTen from './10QTen';
import QEleven from './11QEleven';


class ClassCompoRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<ClassCompoMenu />} >
                        <Route path="classcompoQUESTION" element={<ClassCompoQUESTION />} />
                        <Route path="classcomponpm" element={<ClassCompoNpm />} />
                        <Route path="classcomporole" element={<ClassCompoRole />} />
                        <Route path="classcompocli" element={<Cli />} />
                        <Route path="classcompocomponents" element={<Components />} />
                        <Route path="question" element={<Question />} />
                        <Route path="qseven" element={<Qseven />} />
                        <Route path="qeight" element={<Qeight />} />
                        <Route path="qnine" element={<QNine />} />
                        <Route path="qten" element={<QTen />} />
                        <Route path="qeleven" element={<QEleven />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ClassCompoRoute;