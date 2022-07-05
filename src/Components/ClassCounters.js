import React, { Component } from 'react';

class ClassCounters extends Component {
  constructor(props) {
    super(props);
    //state 초깃값
    this.state = {
      number: 0,
      fixedNumber: 11,
    }
  }
  render() {
    const { number, fixedNumber } = this.state
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button onClick={() => this.setState({ number: number + 1 })} >+1</button>
      </div>
    );
  }
}

export default ClassCounters;