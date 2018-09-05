import React from 'react';

import ButtonPad from './ButtonPad.jsx';

class ControlPanel extends React.Component {
  handleSound = (event) => {
    const soundtrack = event.target.children[1].textContent.toLowerCase();
    sounds[soundtrack].play();
  }

  render() {
    return (
      <div className="control_panel" id="control-panel">
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">Q</div><div className="sound-name">CHINA</div>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">W</div><div className="sound-name">CRASH</div>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">E</div><div className="sound-name">HHOPEN</div>
        </ButtonPad>

        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">A</div><div className="sound-name">RIDECUP</div>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">S</div><div className="sound-name">RIDEEDGE</div>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">D</div><div className="sound-name">RIDEMID</div>
        </ButtonPad>

        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">Z</div><div className="sound-name">TOMHI</div>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">X</div><div className="sound-name">TOMLOW</div>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">C</div><div className="sound-name">BDRUM</div>
        </ButtonPad>
      </div>
    );
  }
}

export default ControlPanel;

const sounds = {
  china: document.createElement('audio'),
  crash: document.createElement('audio'),
  hhopen: document.createElement('audio'),
  ridecup: document.createElement('audio'),
  rideedge: document.createElement('audio'),
  ridemid: document.createElement('audio'),
  tomhi: document.createElement('audio'),
  tomlow: document.createElement('audio'),
  bdrum: document.createElement('audio')
};

sounds.china.setAttribute('src', './../sounds/CHINA.wav');
sounds.crash.setAttribute('src', './../sounds/CRASH.wav');
sounds.hhopen.setAttribute('src', './../sounds/HHOPEN.wav');

sounds.ridecup.setAttribute('src', './../sounds/RIDECUP.wav');
sounds.rideedge.setAttribute('src', './../sounds/RIDEEDGE.wav');
sounds.ridemid.setAttribute('src', './../sounds/RIDEMID.wav');

sounds.tomhi.setAttribute('src', './../sounds/TOMHI.wav');
sounds.tomlow.setAttribute('src', './../sounds/TOMLOW.wav');
sounds.bdrum.setAttribute('src', './../sounds/BDRUM.wav');

