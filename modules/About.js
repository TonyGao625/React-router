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
  renderList() {
    return this.props.auth.message.map((singleMessage) => {
      return (
        <li
          key={singleMessage._id}
          onClick={() => this.props.selectUser(singleMessage)}
        >
          {singleMessage.author} {singleMessage.text}
        </li>
      )
    })
  }
  render() {
    if (!this.props.auth) {
      return (
        <div>
          <h4>This is the dashboard</h4>
          <button onClick={this.handleClickHello.bind(this)}>Knock Knock </button>
        </div>
      );
    }
    return (
      <div>
        <h4>This is the dashboard</h4>
        <button onClick={this.handleClickHello.bind(this)}>Knock Knock </button>
        <ul>
          {this.renderList()}
        </ul>
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