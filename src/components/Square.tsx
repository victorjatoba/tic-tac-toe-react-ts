import React, { Component } from "react";

interface ISquareProps {
  value: string | number;
}

class Square extends Component<ISquareProps, any> {
  constructor(props: ISquareProps) {
    super(props);
    this.state = {
      value: "",
    };
  }

  render() {
    return (
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
