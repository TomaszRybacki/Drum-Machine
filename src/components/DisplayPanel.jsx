import React from 'react';

function DisplayPanel(props) {
  return (
    <div className="display_panel" id="display-panel">
      <button className={(props.power ? 'power-button isOn' : 'power-button')} onClick={props.powerSwitch}>ON / OFF</button>
      <h1 className="signature">The Drum Machine</h1>
      <div className="display"></div>
    </div>
  );
}

export default DisplayPanel;

// className={"btn-group pull-right " + (this.props.showBulkActions ? 'show' : 'hidden')}
