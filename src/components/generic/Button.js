import {
  Component
} from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Container = styled.div `
text-align: center;
  margin: auto;
  padding: 1rem;
  border-radius: 8px;
  width: 80px;
  height: 50px;
  overflow: auto;
  box-sizing: border-box;
  border: none;
  display: flex;
  align-content: center;
  justify-content: center;
  font-size: 16px;
  background-color: ${props => (props.click ? '#499247' : '#847E89') || (props.value ? '#ff0000' : '#ffff00')};
  vertical-align: baseline;
  
`;

const Circle = styled.div `
    display: flex;
    margin: 0.5rem;
    align-content: center;
    overflow: auto;
    color: #EFF1F3;
    cursor: pointer;
`;

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      value: 'Start',
    };
    
  }


  onClick={() => {
    this.setState(
      oldState => {
        // State changes are asynchronous so instead of using
        // this.state, use the function
        const { current: oldCurrent } = oldState;

        return {
          current: oldCurrent + 1,
        };
      },
      () => {
        // Here we have the new state
        console.log(this.state);
      },
    );
  }}


  onClick = () => {
    if (this.state.click) {
      this.setState({
        click: false,
        value: 'Start',
      });
    } else {
      this.setState({
        click: true,
        value: 'Stop',
      });
    }
      
    }
      
      
    // this.props.onClick(this.props.value);
  

  render() {
    return ( 
    <Circle >
      <Container click = {this.state.click}
          type={this.state.type}
          value={this.state.value}
      onClick = { this.onClick }
        // onMouseUp={this.onMouseUp} 
        >
          {this.props.value}
        </ Container>
      </Circle >
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