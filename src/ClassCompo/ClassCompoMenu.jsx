import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';

class ClassCompoQUESTION extends Component {
  render() {
    return (
      <>
        <ul>
          <li><Link to="classcompoQUESTION">What Is ReactJs ?</Link></li>
          <li><Link to="classcomponpm">What is NPM in React Js?</Link></li>
          <li><Link to="classcomporole">What is Role of Node Js in react Js?</Link></li>
          <li><Link to="classcompocli">What is CLI command In React Js?</Link></li>
          <li><Link to="classcompocomponents">What is Components in React Js?</Link></li>
          <li><Link to="question">What is Header and Content Components in React Js?</Link></li>
          <li><Link to="qseven">How to install React Js on Windows, Linux Operating System? How to Install
                        NPM and How to check version of NPM?</Link></li>
          <li><Link to="qeight">How to check version of React Js?</Link></li>
          <li><Link to="qnine">How to change in components of React Js?</Link></li>
          <li><Link to="qten">How to Create a List View in React Js?</Link></li>
          <li><Link to="qeleven">Create Increment decrement state change by button click?</Link></li>
        </ul>
        <Outlet></Outlet>
      </>
    );
  }
}

export default ClassCompoQUESTION;