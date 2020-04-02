import React from 'react';
//import logo from './logo.svg';
import './App.css';

// function Helloworld(props) {
//   return (
//   <div id="hello">{props.mytext}</div>
//   )
// }

class Helloworld extends React.Component {
  state = {
    show: true
  }
  cambiarEstado = () =>  {
    this.setState({ show: !this.state.show })
  }
  render() {
    if(this.state.show) {
      return (
        <div id="hello">
          { this.props.mytext }
          <button onClick={ this.cambiarEstado }>Estado show</button>
        </div>
        
      )
    } else {
      return (
        <div>
          No hay elementos
          <button onClick={ this.cambiarEstado }>Estado show</button>
        </div>
      )
    }
    
  }
}

function App() {
  return (
    <div className="App">
      Este es mi componente <Helloworld mytext="Hola props" />
    </div>
  );
}

export default App;
