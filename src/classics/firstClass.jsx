import { Component } from "react";

class MyClassComponent extends Component {
  buttons = ["red", "green", "blue"];
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      name: "hello world",
      color: ["#990000", "#009900", "#000099"],
    };
  }
  handleColorChange = (color) => {
    this.setState({ color: color }); // Update state with selected color
    console.log("change color");
  };

  render() {
    const { color } = this.state;
    return (
      <div>
        {this.buttons.map((btn, key) => (
          <button
            key={key}
            className="text-[24px] mr-2 mb-2 px-4 py-2 rounded"
            style={{ backgroundColor: color[key] }}
            onClick={() => this.handleColorChange(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    );
  }
}

export default MyClassComponent;
