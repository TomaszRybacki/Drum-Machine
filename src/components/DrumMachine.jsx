import React from 'react';

import ControlPanel from './ControlPanel.jsx';
import DisplayPanel from './DisplayPanel.jsx';

class DrumMachine extends React.Component {
  render() {
    return (
      <div className="drum_machine" id="drum-machine">
        <DisplayPanel></DisplayPanel>
        <ControlPanel></ControlPanel>
      </div>
    );
  }
}

export default DrumMachine;
