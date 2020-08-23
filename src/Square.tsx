import React, {Component} from "react";

interface Props {
    value: number
}

class Square extends Component<Props> {
  render() {
    return <button className="square">{this.props.value}</button>;
  }
}

export default Square;
