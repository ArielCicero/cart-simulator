import React, { Component } from "react";

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
    /*
      since the component was updated we have new state or new props
      so we can compare the new state with the oldone
      or the new props with the oldones
      and if there is a change we can make an Ajax call
      to get new data from the server

      if (prevProps.counter.value !== this.props.counter.value){
        //Ajax call and get new data from the server
      }
    */

    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
  }
  componentWillUnmount() {
    //place to clean timers or listeners or cancel network requests
    console.log("Counter will unmount");
  }
  render() {
    console.log("Counter Rendered");
    /*
      if (this.props.counter.value < 0) {
        //JS error
        throw new Error("I crashed!");
      }
    */
    return (
      <div className="container">
        <div className="row">
          <div className="col-1">
            <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
          </div>
          <div className="col">
            <button
              onClick={() => this.props.onIncrement(this.props.counter)}
              className="btn btn-secondary btn-sm"
            >
              +
            </button>
            <button
              onClick={() => this.props.onDecrement(this.props.counter)}
              className="btn btn-secondary btn-sm m-2"
              disabled={this.props.counter.value === 0 ? true : false}
            >
              -
            </button>
            <button
              onClick={() => this.props.onDelete(this.props.counter.id)}
              className="btn btn-danger btn-sm"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  // getDecrementButtonClasses() {
  //   let classes = "btn btn-secondary btn-sm m-2 ";
  //   classes += this.props.counter.value < 1 ? "disabled" : "";
  //   return classes;
  // }

  formatCount() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
