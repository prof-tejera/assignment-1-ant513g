import { Component } from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
import DisplayTime from "./DisplayTime";
import Container from "./Container";

const BoxContainer = styled.div `
  text-align: center;
  margin: auto;
  padding: 1rem;
  border-radius: 8px;
  overflow: auto;
  box-sizing: border-box;
  border: none;
  display: block;
  font-size: 16px;
  vertical-align: baseline;
  cursor: pointer; 
`;
  
const Select = styled.select`
width: 68px;
display: block;
font-family: 'Courier Prime', monospace;
font-size: 16px;
color: white;
background-color: #3B4355;
border: none;
text-align: center;
`;


const Label = styled.label`
width: 68px;
display: block;
font-family: 'Courier Prime', monospace;
font-size: 16px;
color: white;
border: none;
text-align: center;
`;

const SelectContainer = styled.div`
display: block;
margin: 1rem;
`;

  
class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      click: false,
      type: 'Start',
      hh: 0,
      mm: 0,
      ss: 0,
      timer: false,
    };
    this.hhValue = this.hhValue.bind(this);
    this.mmValue = this.mmValue.bind(this);
    this.ssValue = this.ssValue.bind(this);
  }
  hhValue(event) {
    this.setState({ hh: event.target.value });
    console.log(event.target.value);
  
  }
  mmValue(event) {
    this.setState({ mm: event.target.value });
    console.log(event.target.value);
  }
  ssValue(event) {
    this.setState({ ss: event.target.value });
    console.log(event.target.value);
  }
 
  onClick = () => {
    this.setState({
      click: true,
    });
  }
  
  getSelected = () => {

  }
  render() {
    return (
      <BoxContainer>
        <DisplayTime hh={this.state.hh} mm={this.state.mm} ss={this.state.ss} ms='00' />
        <Container>
          <SelectContainer>
        <Label for="hh">Hours:</Label>
        <Select name="hh" size="5" value={this.state.hh} onChange={this.hhValue}>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
          <option value='32'>32</option>
          <option value='33'>33</option>
          <option value='34'>34</option>
          <option value='35'>35</option>
          <option value='36'>36</option>
          <option value='37'>37</option>
          <option value='38'>38</option>
          <option value='39'>39</option>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
          <option value='45'>45</option>
          <option value='46'>46</option>
          <option value='47'>47</option>
          <option value='48'>48</option>
          <option value='49'>49</option>
          <option value='50'>50</option>
          <option value='51'>51</option>
          <option value='52'>52</option>
          <option value='53'>53</option>
          <option value='54'>54</option>
          <option value='55'>55</option>
          <option value='56'>56</option>
          <option value='57'>57</option>
          <option value='58'>58</option>
          <option value='59'>59</option>
        </Select>
          </SelectContainer>
          <SelectContainer>
        <Label for="mm">Minutes:</Label>
        <Select name="mm" size="5" value={this.state.mm} onChange={this.mmValue} >
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
          <option value='32'>32</option>
          <option value='33'>33</option>
          <option value='34'>34</option>
          <option value='35'>35</option>
          <option value='36'>36</option>
          <option value='37'>37</option>
          <option value='38'>38</option>
          <option value='39'>39</option>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
          <option value='45'>45</option>
          <option value='46'>46</option>
          <option value='47'>47</option>
          <option value='48'>48</option>
          <option value='49'>49</option>
          <option value='50'>50</option>
          <option value='51'>51</option>
          <option value='52'>52</option>
          <option value='53'>53</option>
          <option value='54'>54</option>
          <option value='55'>55</option>
          <option value='56'>56</option>
          <option value='57'>57</option>
          <option value='58'>58</option>
          <option value='59'>59</option>
          </Select>
          </SelectContainer>
          <SelectContainer>
        <Label for="ss">Seconds:</Label>
        <Select name="ss" size="5" value={this.state.ss} onChange={this.ssValue}>
          <option value='0'>0</option>
          <option value='1'>1</option>
          <option value='2'>2</option>
          <option value='3'>3</option>
          <option value='4'>4</option>
          <option value='5'>5</option>
          <option value='6'>6</option>
          <option value='7'>7</option>
          <option value='8'>8</option>
          <option value='9'>9</option>
          <option value='10'>10</option>
          <option value='11'>11</option>
          <option value='12'>12</option>
          <option value='13'>13</option>
          <option value='14'>14</option>
          <option value='15'>15</option>
          <option value='16'>16</option>
          <option value='17'>17</option>
          <option value='18'>18</option>
          <option value='19'>19</option>
          <option value='20'>20</option>
          <option value='21'>21</option>
          <option value='22'>22</option>
          <option value='23'>23</option>
          <option value='24'>24</option>
          <option value='25'>25</option>
          <option value='26'>26</option>
          <option value='27'>27</option>
          <option value='28'>28</option>
          <option value='29'>29</option>
          <option value='30'>30</option>
          <option value='31'>31</option>
          <option value='32'>32</option>
          <option value='33'>33</option>
          <option value='34'>34</option>
          <option value='35'>35</option>
          <option value='36'>36</option>
          <option value='37'>37</option>
          <option value='38'>38</option>
          <option value='39'>39</option>
          <option value='40'>40</option>
          <option value='41'>41</option>
          <option value='42'>42</option>
          <option value='43'>43</option>
          <option value='44'>44</option>
          <option value='45'>45</option>
          <option value='46'>46</option>
          <option value='47'>47</option>
          <option value='48'>48</option>
          <option value='49'>49</option>
          <option value='50'>50</option>
          <option value='51'>51</option>
          <option value='52'>52</option>
          <option value='53'>53</option>
          <option value='54'>54</option>
          <option value='55'>55</option>
          <option value='56'>56</option>
          <option value='57'>57</option>
          <option value='58'>58</option>
          <option value='59'>59</option>
          </Select>
          </SelectContainer>
        </Container>
             </ BoxContainer>
       
      );
    }
}
Input.propTypes = {
    value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.node,
    ])
}
  
export default Input;