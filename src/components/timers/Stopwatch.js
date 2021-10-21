import React from "react";
import styled from 'styled-components';
import DisplayTime from "../generic/DisplayTime";
import Button from '../generic/Button';
import Panel from '../generic/Panel';




class Stopwatch extends React.Component {
  handleNumberClick = (value) => {
    if (!this.state.operator) {
      this.setState({ first: `${this.state.first || ""}${value}` });
    } else {
      this.setState({ second: `${this.state.second || ""}${value}` });
    }
  };
  
  render() {
    return (
      <Panel>
        <DisplayTime />
        <Button value={'Start'} onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
        <Button value={'Reset'} onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
        </Panel>
    );
  }
}

export default Stopwatch;
