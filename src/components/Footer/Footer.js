import React, { Component, PropTypes } from 'react';

var style = {
    paddingTop: 50
};

export default class Footer extends Component {

    constructor(){
        super();
    }

    render() {
        return(
            <footer style={style}>
                <nav className="navbar navbar-default navbar-fixed-bottom">
                    <div className="container">
                        <div className="navbar-header">
                                <span className="navbar-text">
                                    2016, <a href="#">Xebia-Test</a>
                                </span>
                        </div>
                    </div>
                </nav>
            </footer>
        );
    }
}
