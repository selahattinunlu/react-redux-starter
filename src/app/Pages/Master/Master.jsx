import React, {Component} from 'react';
import { Link } from 'react-router';

class Master extends Component {
    render() {
        return (
            <div>
                <h1>Master...</h1>
                <hr/>
                <Link to="/">Index</Link>
                <Link to="/about">About</Link>
                <hr/>
                {this.props.children}
            </div>
        );
    }
}

export default Master;