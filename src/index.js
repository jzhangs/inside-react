import React from './react'
import ReactDOM from './react-dom'

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 1
    }
  }

  onClick() {
    this.setState({ num: this.state.num + 1 });
  }

  componentDidUpdate() {
    console.log(`update ${this.state.num}`);
  }

  componentDidMount() {
    console.log('mount');
  }

  render() {
    return (
      <div>
        <h1>count: {this.state.num}</h1>
        <button onClick={() => this.onClick()}>add</button>
      </div>
    );
  }
}

// const Welcome = ({ name }) => <h1>Hello, {name}</h1>

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <Welcome name="Sara" />
//         <Welcome name="Cahal" />
//         <Welcome name="Edite" />
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       num: 0
//     }
//   }

//   componentDidMount() {
//     for (let i = 0; i < 100; i++) {
//       this.setState({ num: this.state.num + 1 });
//       console.log(this.state.num);
//     }
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>{this.state.num}</h1>
//       </div>
//     );
//   }
// }

ReactDOM.render(
  <Counter />,
  document.getElementById('root')
);
