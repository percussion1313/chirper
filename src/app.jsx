import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Cardlist from './components/Cardlist';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultChirps: [
        {
          username: "floppytaco",
          chirp: "I'll be your Santa Claus if you want, and I'll be every god damn elf you want.",
        },
        {
          username: 'anustart12',
          chirp: ' Michael, you are quite the cupid. You can stick an arrow in my buttocks any time.',
        },
        {
          username: 'titussss',
          chirp: "Pinot Noir Caviar, Myanmar Mid-sized car You don't have to be popu-lar Find out who your true friends are",
        }
      ]

    }
  }

  postChirp = (e) => {
    e.preventDefault();
    const defaultChirps = this.state;

    this.setState = ({
      defaultChirps: [this.state.defaultChirps]
    })
  }

  render() {
    return (
      <div>
        <Header />
        <Cardlist items={this.state.defaultChirps} />
        <textarea className="form-control col-sm-8 justify-content-center" rows="4" id="comment" onChange={this.newChirp}></textarea>
        <button type="submit" className="btn btn-primary my-3 inline" onSubmit={(e) => {this.postChirp[e]}} >Chirp!</button>
      </div>
    );
  }
}

export default App;
