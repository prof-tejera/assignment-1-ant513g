import { Component } from "react";
import styled from 'styled-components';

const Container = styled.div`
background: rgb(0,0,0);
background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(33,38,48,1) 49%, rgba(41,48,61,1) 100%);
    border-radius: 16px;
    padding: 2rem;
    display: flex;
    justify-content: space-evenly;
`;

class Panel extends Component {
    render() {
      return <Container>{this.props.children}</Container>;
    }
  }
  
  export default Panel;

