import React, { Component } from "react";
import Children from "./Children";
import { Button } from "antd";
import "antd/dist/antd.css";
import "./index.less";
export default class Life extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }
  handleClick = () => {
    this.setState({
      count: this.state.count++
    });
  };
  handleAdd() {
    this.setState({
      count: this.state.count++
    });
  }
  render() {
    let style = {
      padding: 50
    };
    return (
      <div>
        <p>react demo show</p>
        <Button type="primary">antd click</Button>
        <button onClick={this.handleClick}>click1</button>
        <button onClick={this.handleAdd.bind(this)}>click2</button>
        <span>{this.state.count}</span>
        <Children name={this.state.count} />
      </div>
    );
  }
}
