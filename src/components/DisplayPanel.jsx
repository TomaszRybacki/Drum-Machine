import React from 'react';

function DisplayPanel() {
  return (
    <div className="display_panel" id="display-panel">
      <button className="power-button">ON / OFF</button>
      <h1 className="signature">The Drum Machine</h1>
      <div className="display"></div>
    </div>
  );
}

export default DisplayPanel;
