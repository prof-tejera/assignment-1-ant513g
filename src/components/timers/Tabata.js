import React from "react";
import styled from 'styled-components';
// import DisplayTime from '../generic/DisplayTime';
import Button from '../generic/Button';
import Panel from '../generic/Panel';
import Input from "../generic/Input";
import Container from "../generic/Container";
import DisplayRounds from "../generic/DisplayRounds";


//  TABATA
//  An interval timer with work / rest periods.
//  Example: 20s / 10s, 8 rounds, would count down from 20 seconds to 0, 
//  then count down from 10 seconds to 0, then from 20, 
//  then from 10, etc, for 8 rounds.A full round includes both the work and rest.
//  In this case, 20 + 10=30 seconds per round. 

class Tabata extends React.Component {
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
        <DisplayRounds />
        <Input />
        <Container>
        <Button value={'Start'} onClick={this.handleNumberClick} />
        <Button value={'Reset'} onClick={this.handleNumberClick} />
        </Container>
        </Panel>
    );
  }
}


export default Tabata;
