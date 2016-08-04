import React, { Component } from 'react'
import { connect } from 'react-redux'
import Actions from './../../Actions'
import Selectors from './../../Selectors'

class Home extends Component {
  render() {
    return (
      <div>
        <h2>Here home vote page..</h2>
        <hr/>
        <p>A Option Counts: {this.props.aOptionCounts}</p>
        <p>B Option Counts: {this.props.bOptionCounts}</p>

        <button className="btn btn-primary" onClick={this.props.increaseA}>
          INCR A Option
        </button>

        <button className="btn btn-warning" onClick={this.props.increaseB}>
          INCR B Option
        </button>

        <button className="btn btn-primary" onClick={this.props.asyncIncreaseA}>
          ASYNC INCR A Option
        </button>

        <button className="btn btn-warning" onClick={this.props.asyncIncreaseB}>
          ASYNC INCR B Option
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    aOptionCounts: Selectors.Vote.getAOptionCounts(state),
    bOptionCounts: Selectors.Vote.getBOptionCounts(state),
  };
};

const mapDispatchToprops = (dispatch) => {
  return {
    increaseA: () => {
      dispatch(Actions.Vote.increaseA());
    },
    increaseB: () => {
      dispatch(Actions.Vote.increaseB());
    },
    asyncIncreaseA: () => {
      dispatch(Actions.Vote.asyncIncreaseA());
    },
    asyncIncreaseB: () => {
      dispatch(Actions.Vote.asyncIncreaseB());
    }
  }
};

export default connect(mapStateToProps, mapDispatchToprops)(Home);