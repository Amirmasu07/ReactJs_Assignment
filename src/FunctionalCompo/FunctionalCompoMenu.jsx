import React, { Component } from 'react';
import { Link, Outlet } from 'react-router-dom';


class Qone extends Component {
    render() {
        return (
            <>
                <div className="row">
                    <div className="col-5 offset-5">
                        <ul>
                            <li><Link to="Qone">Life cycle in Class Component With Hooks</Link></li>
                            <li><Link to="Qtwo">Life cycle in Functional Component With Hooks</Link></li>



                        </ul>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <Outlet></Outlet>
                    </div>
                </div>
            </>
        );
    };
}

export default Qone;