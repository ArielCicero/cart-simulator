import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 3 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDecrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    //if (counters[index].value > 0) counters[index].value--;
    counters[index].value--;
    this.setState({ counters });
  };
  handleIncrement = counter => {
    /*
    const counters = this.state.counters.map(c => {
      if (c.id === counter.id) c.value = counter.value + 1;
      return c;
    });
    */
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index].value++;

    this.setState({ counters });
  };

  constructor(props) {
    super(props);
    console.log("App Constructor", this.props);
    /*
      in case this component has a state this will be the place
      to inicialize it
      this.state = this.props.something;
    */
  }

  componentDidMount() {
    console.log("Counter Mounted");
    /*
      perfect place to make ajax calls to get data from the server
      and then:
      this.setState({newData})
    */
  }
  render() {
    console.log("App Rendered");
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            onDelete={this.handleDelete}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            counters={this.state.counters}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
