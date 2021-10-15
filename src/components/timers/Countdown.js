import React from "react";
import styled from 'styled-components';

import DisplayTime from "../generic/DisplayTime";
import Button from '../generic/Button'
import Panel from '../generic/Panel'




const Align = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

class Countdown extends React.Component {
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
        <Align>
        <Button value={'Start'} onClick={this.handleNumberClick} />
        <Button value={'Reset'} onClick={this.handleNumberClick} />
        </Align>
        </Panel>
    );
  }
}

export default Countdown;
