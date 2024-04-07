// /* eslint-disable no-undef */
import { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleIncreaseCounter() {
    this.setState({ count: this.state.count + 1 });
  }

  handleDecreaseCounter() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <div className="h-full  w-full flex justify-center items-center gap-4 mt-[5rem]">
          <button
            className="text-[32px] border px-4 py-0"
            onClick={() => {
              this.handleIncreaseCounter();
            }}
          >
            +
          </button>
          <h1 className="text-[2rem]">{this.state.count}</h1>
          <button
            className="text-[32px] border px-4 py-0 "
            onClick={() => {
              this.handleDecreaseCounter();
            }}
          >
            -
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
