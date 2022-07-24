import React, { Component } from "react";
import store from "../store";

export default class ReduxPage extends Component {
  unsubscribe: any;
  componentDidMount() {
    // 告诉redux，一旦state发生变化(一旦执行dispatch函数)，就执行的事件
    this.unsubscribe = store.subscribe(() => {
      this.forceUpdate();
    });
  }

  compomentWillUnmount() {
    this.unsubscribe();
  }

  add = () => {
    store.dispatch({type: "ADD"});
  };
  minus = () => {
    store.dispatch({type: "MINUS"});
  };
  render() {
    return (
      <>
        <div>
          <h3>ReduxPage</h3>
          <p>{store.getState()}</p>
          <button onClick={this.add}>add</button>
          <button onClick={this.minus}>minus</button>
        </div>
      </>
    );
  }
}