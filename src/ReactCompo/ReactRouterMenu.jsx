import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";


class QuOne extends Component {
    render() {
        return (
            <>
                <div className="row offset-8">
                    <div>
                        <ul>
                            <li><Link to="QuOne">Create React app with modules and lazy loading (Admin-user module with
                                child Router and outlet).</Link></li>
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

export default QuOne;