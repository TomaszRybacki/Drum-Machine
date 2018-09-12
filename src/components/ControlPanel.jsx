import React from 'react';
import PropTypes from 'prop-types';

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
    const {
      china,
      crash,
      hhopen,
      ridecup,
      rideedge,
      ridemid,
      tomhi,
      tomlow,
      bdrum
    } = this.props.sounds;

    return (
      <div className="control_panel" id="control-panel">
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{china.keyboardKey}</div>
          <div className="sound-name">{china.soundName}</div>
          <audio id={china.keyboardKey} src={china.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{crash.keyboardKey}</div>
          <div className="sound-name">{crash.soundName}</div>
          <audio id={crash.keyboardKey} src={crash.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{hhopen.keyboardKey}</div>
          <div className="sound-name">{hhopen.soundName}</div>
          <audio id={hhopen.keyboardKey} src={hhopen.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{ridecup.keyboardKey}</div>
          <div className="sound-name">{ridecup.soundName}</div>
          <audio id={ridecup.keyboardKey} src={ridecup.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{rideedge.keyboardKey}</div>
          <div className="sound-name">{rideedge.soundName}</div>
          <audio id={rideedge.keyboardKey} src={rideedge.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{ridemid.keyboardKey}</div>
          <div className="sound-name">{ridemid.soundName}</div>
          <audio id={ridemid.keyboardKey} src={ridemid.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{tomhi.keyboardKey}</div>
          <div className="sound-name">{tomhi.soundName}</div>
          <audio id={tomhi.keyboardKey} src={tomhi.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{tomlow.keyboardKey}</div>
          <div className="sound-name">{tomlow.soundName}</div>
          <audio id={tomlow.keyboardKey} src={tomlow.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{bdrum.keyboardKey}</div>
          <div className="sound-name">{bdrum.soundName}</div>
          <audio id={bdrum.keyboardKey} src={bdrum.src}><track kind="captions" /></audio>
        </ButtonPad>
      </div>
    );
  }
}

ControlPanel.propTypes = {
  power: PropTypes.bool.isRequired,
  sounds: PropTypes.objectOf(PropTypes.object).isRequired
};

export default ControlPanel;
