import React, { Component } from "react";

class Children extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    console.log("willmount");
  }
  componentDidMount() {
    console.log("didmount");
  }
  componentWillReceiveProps(nextProps, nextContext) {
    console.log(`receive${nextProps.name}`);
  }
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log(`should update`);
    return true;
  }
  componentWillUpdate(nextProps, nextState, nextContext) {
    console.log("will updatae");
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("has update");
  }

  render() {
    return (
      <div>
        <p>{this.props.name}</p>
      </div>
    );
  }
}

export default Children;
