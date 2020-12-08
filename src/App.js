import React, { Component } from 'react';
import Home from './Home';
import Homeext from './Homeext';
import Footer from './Footer'

class App extends Component {
  constructor() {
    super();
    this.state = {
      home: true
    }
  }

  toggle_home = () => {
    this.setState({
      home: false
    });
  }

  render() {
    return (
      <div>
        {
          this.state.home ? <Home toggle_home={this.toggle_home} />
            : <Homeext />
        }
        <Footer />
      </div>

    );
  }
}

export default App;
