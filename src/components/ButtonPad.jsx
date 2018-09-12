import React from 'react';
import PropTypes from 'prop-types';

function ButtonPad(props) {
  return (
    <button onClick={props.clickSound} className="drum_pad" disabled={props.disabled}>
      {props.children}
    </button>
  );
}

ButtonPad.propTypes = {
  clickSound: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired
};

export default ButtonPad;
