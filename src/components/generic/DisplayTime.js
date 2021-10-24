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
    box-sizing: border-box;
    margin: auto;
    padding: 1rem;
    width: 100%;
    height: 100px;
    display: flex;
    align-content: center;
    justify-content: center;
    overflow: auto;
    border-radius: 16px;
    background-color: #3B4355;
    outline: 4px solid #394053;
    color: #EF5B5B;
    font-family: 'Courier Prime', monospace;
    font-size: 24px;
    font-weight: 400;
`;


class DisplayTime extends Component {
    render() {
      return (
        <Circle>
          <Container>
          {this.props.hh}:
          {this.props.mm}:
          {this.props.ss}.
          {this.props.ms}
          </Container>
          </Circle>
        );
      };
  
}
  // DisplayTime.propTypes = {
  //   hh: PropTypes.number,
  //     mm: PropTypes.number,
  //     ss: PropTypes.number,
  //     ms: PropTypes.number,
 
  
export default DisplayTime;

