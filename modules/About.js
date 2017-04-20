import React, { Component } from 'react'
import { connect } from 'react-redux';
import { testAction } from '../actions/index.js';
// export default React.createClass({
//   render() {
//     return <div>About</div>
//   }
// })

class About extends Component {
   handleClickHello() {
    this.props.testAction();
  }
  render() {
    return (
      <div>
        <h4>This is the dashboard</h4>
        <button onClick={this.handleClickHello.bind(this)}>Knock Knock </button>
        <h3>{this.props.auth.message}</h3>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth
  };
}

export default connect(mapStateToProps, { testAction })(About);