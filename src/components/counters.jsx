import React from "react";
import Counter from "./counter";
//import ErrorCounter from "./error-counter";

//Stateless Functional Component
const Counters = ({
  onReset,
  onDelete,
  onIncrement,
  onDecrement,
  counters
}) => {
  //const { onReset, onDelete, onIncrement, onDecrement, counters } = this.props;
  console.log("CounterS Rendered");
  return (
    <div>
      <button onClick={onReset} className="btn btn-primary btn-sm m-2">
        Reset
      </button>

      {counters.map(counter => (
        //<ErrorCounter>
        <Counter
          onDelete={onDelete}
          key={counter.id}
          counter={counter}
          onIncrement={onIncrement}
          onDecrement={onDecrement}
        />
        //</ErrorCounter>
      ))}
    </div>
  );
};

export default Counters;
