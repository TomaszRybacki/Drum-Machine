import React from 'react';

import sounds from './../sounds.js';
import ButtonPad from './ButtonPad.jsx';

class ControlPanel extends React.Component {
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }

  playSound = (audio) => {
    audio.parentElement.focus();
    audio.currentTime = 0;
    audio.play();
  }

  handleClick = (event) => {
    const audioElement = event.target.children[2];
    this.playSound(audioElement);
  }

  handleKeyDown = (event) => {
    let audioElement;
    if (!this.props.power) {
      switch (event.key) {
        case 'q': {
          audioElement = document.querySelector('#Q');
          this.playSound(audioElement);
          break;
        }
        case 'w': {
          audioElement = document.querySelector('#W');
          this.playSound(audioElement);
          break;
        }
        case 'e': {
          audioElement = document.querySelector('#E');
          this.playSound(audioElement);
          break;
        }
        case 'a': {
          audioElement = document.querySelector('#A');
          this.playSound(audioElement);
          break;
        }
        case 's': {
          audioElement = document.querySelector('#S');
          this.playSound(audioElement);
          break;
        }
        case 'd': {
          audioElement = document.querySelector('#D');
          this.playSound(audioElement);
          break;
        }
        case 'z': {
          audioElement = document.querySelector('#Z');
          this.playSound(audioElement);
          break;
        }
        case 'x': {
          audioElement = document.querySelector('#X');
          this.playSound(audioElement);
          break;
        }
        case 'c': {
          audioElement = document.querySelector('#C');
          this.playSound(audioElement);
          break;
        }
        default: // do nothing
      }
    }
  }

  render() {
    return (
      <div className="control_panel" id="control-panel">
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.china.keyboardKey}</div>
          <div className="sound-name">{sounds.china.soundName}</div>
          <audio id={sounds.china.keyboardKey} src={sounds.china.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.crash.keyboardKey}</div>
          <div className="sound-name">{sounds.crash.soundName}</div>
          <audio id={sounds.crash.keyboardKey} src={sounds.crash.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.hhopen.keyboardKey}</div>
          <div className="sound-name">{sounds.hhopen.soundName}</div>
          <audio id={sounds.hhopen.keyboardKey} src={sounds.hhopen.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.ridecup.keyboardKey}</div>
          <div className="sound-name">{sounds.ridecup.soundName}</div>
          <audio id={sounds.ridecup.keyboardKey} src={sounds.ridecup.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.rideedge.keyboardKey}</div>
          <div className="sound-name">{sounds.rideedge.soundName}</div>
          <audio id={sounds.rideedge.keyboardKey} src={sounds.rideedge.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.ridemid.keyboardKey}</div>
          <div className="sound-name">{sounds.ridemid.soundName}</div>
          <audio id={sounds.ridemid.keyboardKey} src={sounds.ridemid.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.tomhi.keyboardKey}</div>
          <div className="sound-name">{sounds.tomhi.soundName}</div>
          <audio id={sounds.tomhi.keyboardKey} src={sounds.tomhi.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.tomlow.keyboardKey}</div>
          <div className="sound-name">{sounds.tomlow.soundName}</div>
          <audio id={sounds.tomlow.keyboardKey} src={sounds.tomlow.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{sounds.bdrum.keyboardKey}</div>
          <div className="sound-name">{sounds.bdrum.soundName}</div>
          <audio id={sounds.bdrum.keyboardKey} src={sounds.bdrum.src}><track kind="captions" /></audio>
        </ButtonPad>
      </div>
    );
  }
}

export default ControlPanel;
