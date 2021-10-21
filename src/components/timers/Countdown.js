import React from "react";
import styled from 'styled-components';

import DisplayTime from '../generic/DisplayTime';
import Input from '../generic/Input';
import Button from '../generic/Button';
import Panel from '../generic/Panel';



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
        <DisplayTime />
        <Input />
        <Button value={'Start'} type='Start' onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
        <Button value={'Reset'} onClick = { this.onMouseDown }
          onMouseUp={this.onMouseUp} />
        </Panel>
    );
  }
}

export default Countdown;
