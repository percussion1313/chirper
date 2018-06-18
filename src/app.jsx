import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import Cardlist from './components/Cardlist';
import Submitform from './components/Submitform';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultChirps: [
        {
          username: "chrundlethegreat",
          chirp: "Yes, my good man, I'll have the milk steak, boiled over hard, and your finest jelly beans...raw.",
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

    this.postChirp = (event) => {
      let newChirp = {
        username: document.getElementById("username").value,
        chirp: document.getElementById("chirp").value
      };
      this.setState({
        defaultChirps: this.state.defaultChirps.concat([newChirp])
      });
    }
  }




  render() {
    return (
      <div>
        <Header />
        <Cardlist items = {this.state.defaultChirps} />
        <Submitform postChirp = {this.postChirp}/>
      </div>
    );
  }
}

export default App;
