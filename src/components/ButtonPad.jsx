import React from 'react';

function ButtonPad(props) {
  return (
    <button onClick={props.clickSound} className="drum_pad" disabled={props.disabled}>
      {props.children}
    </button>
  );
}

export default ButtonPad;
