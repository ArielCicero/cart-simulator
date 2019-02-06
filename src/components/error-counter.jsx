import React, { Component } from "react";
import Counter from "./counter";

class ErrorCounter extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    //display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, info);
    console.log("error->", error);
    console.log("info->", info);
  }
  render() {
    if (this.state.hasError) {
      // Error path

      return <Counter key="algo" />;
    }

    // Normally, just render children
    return this.props.children;
  }
}

export default ErrorCounter;
