import React from "react";
import styled from 'styled-components';
// import DisplayTime from '../generic/DisplayTime';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Input from "../generic/Input";
import Container from "../generic/Container";


//  XY
//  A timer that counts down from X time per round, 
//  for Y number of rounds
//  (e.g. 1 minute for 10 minutes would count down from 1 minute to 0, 
//  then start another countdown, etc, 10 times )                                                                                                   |




class XY extends React.Component {
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
        <Button value={'Start'} type={'Start'} onClick={this.handleNumberClick} />
          <Button value={'Reset'} type={'Reset'} onClick={this.handleNumberClick} />
          <Button value={'Lap'} type={'Lap'} onClick={this.handleNumberClick} />
        </Container>
        </Panel>
    );
  }
}


export default XY;
