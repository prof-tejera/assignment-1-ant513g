import { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  border: none;
  padding: 16px;
  margin: auto;
  height: auto;
  width: auto; 
  box-sizing: border-box;
  text-align: center;
  
`;
const Circle = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: auto;
    background-color: #394053;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    color: #EFF1F3;
    border: 2px dashed white;
    outline: 4px solid #394053;
`;


class DisplayTime extends Component {
    constructor() {
      super();
      this.state = {
        time: {
          hh: 10,
          mm: 10,
          ss: 10,
          ms: 10,
        },
      };
    }
    
    render() {
      return (
        <Circle><Container> {this.state.hh}:{this.state.mm}:{this.state.ss}.{this.state.ms}
          </Container>
          </Circle>
        );
    }
  }
  
  DisplayTime.propTypes = {
    hh: PropTypes.number,
      mm: PropTypes.number,
      ss: PropTypes.number,
      ms: PropTypes.number,
  }
  
  export default DisplayTime;

