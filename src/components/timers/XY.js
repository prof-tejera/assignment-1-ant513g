import React from "react";
import styled from 'styled-components';
import DisplayTime from "../generic/DisplayTime";
import Button from '../generic/Button';
import Panel from '../generic/Panel';

const Container = styled.div`
    background-color: #FF0000;
    padding: 2rem;
`;

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
      <Container>
        <DisplayTime />
        <Button value={'Start'} type={'Start'} onClick={this.handleNumberClick} />
        <Button value={'Reset'} type={'Reset'} onClick={this.handleNumberClick} />
      </Container>
    );
  }
}


export default XY;
