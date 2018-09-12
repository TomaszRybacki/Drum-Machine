import React from 'react';
import PropTypes from 'prop-types';

function DisplayPanel(props) {
  return (
    <div className="display_panel" id="display-panel">
      <button className={(props.power ? 'power-button isOn' : 'power-button')} onClick={props.powerSwitch}>ON / OFF</button>
      <h1 className="signature">The Drum Machine</h1>
      <div className="display" />
    </div>
  );
}

DisplayPanel.propTypes = {
  power: PropTypes.bool.isRequired,
  powerSwitch: PropTypes.func.isRequired
};

export default DisplayPanel;
