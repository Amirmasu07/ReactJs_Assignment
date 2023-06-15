import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import RectReduxMenu from './ReactReduxMenu';
import OneQu from './01OneQu.jsx';
import TwoQu from './02TwoQu.jsx';
import ThreeQu from './03ThreeQu.jsx';
import FourQu from './04FourQu.jsx';
import FiveQu from './05FiveQu.jsx';
import SixQu from './06SixQu.jsx';


class ReactReduxRoute extends Component {
    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<RectReduxMenu />} >
                        <Route path="onequ" element={<OneQu />} />
                        <Route path="twoqu" element={<TwoQu />} />
                        <Route path="threequ" element={<ThreeQu />} />
                        <Route path="fourqu" element={<FourQu />} />
                        <Route path="fivequ" element={<FiveQu />} />
                        <Route path="sixqu" element={<SixQu />} />
                    </Route>
                </Routes>
            </>
        );
    }
}

export default ReactReduxRoute;