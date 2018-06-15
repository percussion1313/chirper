import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      defaultChirps: [
        {
          userId: "floppytaco",
          name: "Fred Armisen",
          text: "I'll be your Santa Claus if you want, and I'll be every god damn elf you want.",
        },
        {
          userId: 'anustart12',
          name: 'Tobias Funke',
          text: ' Michael, you are quite the cupid. You can stick an arrow in my buttocks any time.',
        },
        {
          userId: 'titussss',
          name: 'Titus Andromedon',
          text: "Pinot Noir Caviar, Myanmar Mid-sized car You don't have to be popu-lar Find out who your true friends are",
        }
      ]

    }
  }

  newChirp = (event) => {
    this.setState({ text: event.target.value })
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
