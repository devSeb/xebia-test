import React, { Component, PropTypes } from 'react';



export default class Image extends Component {

    static PropTypes = {
        classList: PropTypes.string,
        source: PropTypes.string,
        width: PropTypes.string,
        height: PropTypes.string
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        /**  css **/
        require('./image.scss');
    }

    render() {
        let {classList, source, width, height }= this.props;
        return (
            <div className="img-component">
                <img id="img-cpn" className={classList} src={source}  width={width} height={height} />
            </div>
        )
    }
}
