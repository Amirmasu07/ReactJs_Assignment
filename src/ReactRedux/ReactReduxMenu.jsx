import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";



class OneQu extends Component {
    render() {
        return (
            <>
                <div className="col-3 offset-10">
                    <ul>
                        <li><Link to="OneQu">What is Redux ?</Link></li>
                        <li><Link to="TwoQu">What is Redux Thunk used for ?</Link></li>
                        <li><Link to="ThreeQu">What is Pure Component? When to use Pure Component over Component ?</Link></li>
                        <li><Link to="FourQu">What is the second argument that can optionally be passed tosetState and what is its purpose ?</Link></li>
                        <li><Link to="FiveQu">Create a Table and Search data from table using React Js ?</Link></li>
                        <li><Link to="SixQu">Create Login registration with CRUD Application using API (Redux)</Link></li>
                    </ul>
                </div>
                <Outlet></Outlet>
            </>
        );
    }
}

export default OneQu;