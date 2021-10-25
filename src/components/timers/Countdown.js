import React from "react";
import styled from 'styled-components';
import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Container from "../generic/Container";


//  Countdown
//  A timer that counts down from X amount of time
// (e.g.count down to 0, starting at 2 minutes and 30)



class Countdown extends React.Component {
  // handleNumberClick = (value) => {
  //   if (!this.state.operator) {
  //     this.setState({ first: `${this.state.first || ""}${value}` });
  //   } else {
  //     this.setState({ second: `${this.state.second || ""}${value}` });
  //   }
  // };
  
  render() {
    return (
      <Panel>
        <Input />
        <Container>
        <Button value={'Start'} type='Start' onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
        <Button value={'Reset'} color={'blue'} onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
          </Container>
      </Panel>
    );
  }
}

export default Countdown;
