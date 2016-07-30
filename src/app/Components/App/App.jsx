import React, {Component} from 'react';
import Button from './../Button/Button';
import { connect } from 'react-redux';
import Actions from './../../Actions';

class App extends Component {
    render() {
        return (
            <div>
                <h3>A Option Total Counts: {this.props.aOptionCounts}</h3>
                <h3>B Option Total Counts: {this.props.bOptionCounts}</h3>
                <hr/>
                <Button onClick={this.props.increaseAOption} text="Increase A Option"/>
                <Button onClick={this.props.increaseBOption} text="Increase B Option"/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        aOptionCounts: state.Vote.aOptionVoteCounts,
        bOptionCounts: state.Vote.bOptionVoteCounts
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increaseAOption: () => {
            dispatch(Actions.Vote.increaseA());
        },
        increaseBOption: () => {
            dispatch(Actions.Vote.increaseB())
        }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);