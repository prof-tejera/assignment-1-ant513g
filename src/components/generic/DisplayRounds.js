import { Component } from "react";
import styled from 'styled-components';
import DisplayTime from "./DisplayTime";


class DisplayRounds extends Component {
    render() {
        return (
          <>
          <DisplayTime />
          <DisplayTime />
          <DisplayTime />
                <DisplayTime />
                </>
        );
      };
  
}
  // DisplayTime.propTypes = {
  //   hh: PropTypes.number,
  //     mm: PropTypes.number,
  //     ss: PropTypes.number,
  //     ms: PropTypes.number,
 
  
export default DisplayRounds;
