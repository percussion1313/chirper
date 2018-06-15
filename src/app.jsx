import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultChirps: [
        {
          userId: '',
          name: '',
          text: '',
        },
        {
          userId: '',
          name: '',
          text: '',
        },
        {
          userId: '',
          name: '',
          text: '',
        }
      ]

    }
  }

  newChirp = (event) => {
    this.setState({text: event.target.value})
}

  render() {
    return (
      <div>
        <textarea className="form-control col-sm-8 center-block" rows="5" id="comment" onChange={this.newChirp}></textarea>
        <button type="submit" className="btn btn-success my-3">Chirp!</button>
      </div>
    );
  }
}

export default App;
