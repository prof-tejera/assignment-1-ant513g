import React from "react";
import styled from 'styled-components';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Input from "../generic/Input";
import Container from "../generic/Container";


//  Stopwatch
//  A timer that counts up to X amount of time
//  (e.g.count up to 2 minutes and 30 seconds, starting at 0) |



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
        <Input />
        <Container>
        <Button value={'Start'} onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
        <Button value={'Reset'} click='' type='true' onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
          </Container>
        </Panel>
    );
  }
}

export default Stopwatch;
