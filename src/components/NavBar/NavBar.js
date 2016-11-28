import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router'

class NavBar extends Component {

    constructor() {
        super();
    }

    render() {
        //console.log("element", this.props.element.text);
        return(
            <div className="nav-bar">
                <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button"
                                    className="navbar-toggle collapsed"
                                    data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1"
                                    aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <Link className="navbar-brand" to="/">XEBIA TEST</Link>
                        </div>

                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        );
    }

}
export default NavBar;
