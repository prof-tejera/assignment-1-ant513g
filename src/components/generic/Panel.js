import { Component } from "react";
import styled from 'styled-components';

const Container = styled.div`
    background-color: #0D1321;
    padding: 2rem;
`;

class Panel extends Component {
    render() {
      return <Container>{this.props.children}</Container>;
    }
  }
  
  export default Panel;

