
import './App.css';
import React, { Component } from 'react'
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Routes from './routes'

class App extends Component {

  render() {
    return (
      <div className="App">

        <Menu></Menu>
        <header className="App-header">
          <Routes></Routes>
        </header>
      </div>
    )
  }
}
export default App;
