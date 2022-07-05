import './App.css';
import ClassCounters from './Components/ClassCounters';
import Say from './Components/Say';
import LifeCycleSample from './Components/LifeCycleSample';
import { Component } from 'react';
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16)
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: '#000000'
    }
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    })
  }
  render() {
    return (
      <div className="App" >
        <h1>클래스형 컴포넌트</h1>
        <ClassCounters />
        <br />
        <h1>함수 컴포넌트</h1>
        <Say />
        <h1>컴포넌트 라이프  사이클</h1>
        <button onClick={this.handleClick}>랜덤 색상</button>
        <LifeCycleSample color={this.state.color} />
      </div>
    );
  }

}

export default App;
