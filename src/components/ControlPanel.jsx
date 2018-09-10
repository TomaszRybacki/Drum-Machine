import React from 'react';

import sounds from './../sounds.js';
import ButtonPad from './ButtonPad.jsx';

class ControlPanel extends React.Component {
  handleSound = (event) => {
    event.target.children[2].play();
  }

  render() {
    return (
      <div className="control_panel" id="control-panel">
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.china.keyboardKey}</div>
          <div className="sound-name">{sounds.china.soundName}</div>
          <audio src={sounds.china.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.crash.keyboardKey}</div>
          <div className="sound-name">{sounds.crash.soundName}</div>
          <audio src={sounds.crash.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.hhopen.keyboardKey}</div>
          <div className="sound-name">{sounds.hhopen.soundName}</div>
          <audio src={sounds.hhopen.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.ridecup.keyboardKey}</div>
          <div className="sound-name">{sounds.ridecup.soundName}</div>
          <audio src={sounds.ridecup.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.rideedge.keyboardKey}</div>
          <div className="sound-name">{sounds.rideedge.soundName}</div>
          <audio src={sounds.rideedge.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.ridemid.keyboardKey}</div>
          <div className="sound-name">{sounds.ridemid.soundName}</div>
          <audio src={sounds.ridemid.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.tomhi.keyboardKey}</div>
          <div className="sound-name">{sounds.tomhi.soundName}</div>
          <audio src={sounds.tomhi.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.tomlow.keyboardKey}</div>
          <div className="sound-name">{sounds.tomlow.soundName}</div>
          <audio src={sounds.tomlow.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad playSound={this.handleSound}>
          <div className="keyboard-key">{sounds.bdrum.keyboardKey}</div>
          <div className="sound-name">{sounds.bdrum.soundName}</div>
          <audio src={sounds.bdrum.src}><track kind="captions" /></audio>
        </ButtonPad>
      </div>
    );
  }
}

export default ControlPanel;
