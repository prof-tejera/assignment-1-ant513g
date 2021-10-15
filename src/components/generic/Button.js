import { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div`
  text-align: center;
  border: none;
  display: flex;
  margin: auto;
  padding: auto;
  align-content: center;
  overflow: auto;
  box-sizing: border-box;
  text-size: 0.5rem;
 
  
`;

const Circle = styled.div`
    display: flex;
    margin: 0.5rem;
    align-content: center;
    justify-content: center;
    overflow: auto;
    background-color: #1D2D44;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    box-shadow: inset  ${props => (props.pressed ? '0 0 16px rgba(0, 0, 0, 0.9)' : '0 0 0px rgba(0, 0, 0, 0.5)')};
    background-color: ${props => (props.pressed ? '#1D2D44' : '#3E5C76') || (props.type ? '#FFFF00' : '#FF0000')};

    color: #EFF1F3;
    border: 1px solid white;
    outline: 4px solid #3E5C76;
`;

class Button extends Component {
    constructor() {
      super();
      this.state = {
          pressed: false,
          type: 'Start',
      };
    }
    
    
    onMouseDown = () => {
      this.setState({
          pressed: true,
      });
      this.props.onClick(this.props.value);
    }
    onMouseUp = () => {
      this.setState({
            pressed: false,
      });
    }
    render() {
        return (
            <Circle>
        <Container
                pressed={this.state.pressed}
                type={this.state.type}
          onMouseDown={this.onMouseDown}
          onMouseUp={this.onMouseUp}
        > 
          {this.props.value}
        </Container></Circle>
        );
    }
  }
  
  Button.propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ])
  }
  
  export default Button;

