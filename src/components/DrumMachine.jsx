import React from 'react';

import sounds from './../sounds.js';

import ControlPanel from './ControlPanel.jsx';
import DisplayPanel from './DisplayPanel.jsx';

class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOff: true
    };
  }

  turnOn = () => {
    this.setState({
      isOff: !this.state.isOff
    });
  }

  render() {
    return (
      <div className="drum_machine" id="drum-machine">
        <DisplayPanel power={this.state.isOff} powerSwitch={this.turnOn} />
        <ControlPanel power={this.state.isOff} sounds={sounds} />
      </div>
    );
  }
}

export default DrumMachine;
