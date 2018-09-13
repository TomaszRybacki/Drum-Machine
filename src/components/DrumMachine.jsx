import React from 'react';

import sounds from './../sounds.js';

import ControlPanel from './ControlPanel.jsx';
import DisplayPanel from './DisplayPanel.jsx';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOff: true,
      activeSound: null,
      activeGraph: './img/sound-0.jpg'
    };
  }

  setActiveSound = (currentSound) => {
    this.setState({
      activeSound: currentSound
    });
  }

  setActiveGraph = (graphUrl) => {
    this.setState({
      activeGraph: graphUrl
    });
  }

  turnOn = () => {
    this.setState({
      isOff: !this.state.isOff,
      activeSound: null,
      activeGraph: './img/sound-0.jpg'
    });
  }

  render() {
    return (
      <div className="drum_machine" id="drum-machine">
        <DisplayPanel
          power={this.state.isOff}
          powerSwitch={this.turnOn}
          activeSound={this.state.activeSound}
          activeGraph={this.state.activeGraph}
        />
        <ControlPanel
          power={this.state.isOff}
          sounds={sounds}
          setActiveSound={this.setActiveSound}
          setActiveGraph={this.setActiveGraph}
        />
      </div>
    );
  }
}

export default DrumMachine;
