import React, {PropTypes} from 'react';
export default class Avatar extends React.Component {
    render() {
        return (
            <div className="avatar">
                <p>
                    <em>{this.props.email}</em>
                </p>
                <img src={this.props.source} className="img-rounded"/>
            </div>
        );
    }
}

Avatar.propTypes = {
    email: PropTypes.string,
    source: PropTypes.string
};