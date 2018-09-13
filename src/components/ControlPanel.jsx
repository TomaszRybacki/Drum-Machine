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

    const soundName = audioElement.getAttribute('sound-name');
    this.props.setActiveSound(soundName);
  }

  handleKeyDown = (event) => {
    let audioElement;
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

    if (!this.props.power) {
      switch (event.keyCode) {
        case china.keyCode: {
          audioElement = document.querySelector(`#${china.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(china.soundName);
          break;
        }
        case crash.keyCode: {
          audioElement = document.querySelector(`#${crash.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(crash.soundName);
          break;
        }
        case hhopen.keyCode: {
          audioElement = document.querySelector(`#${hhopen.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(hhopen.soundName);
          break;
        }
        case ridecup.keyCode: {
          audioElement = document.querySelector(`#${ridecup.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(ridecup.soundName);
          break;
        }
        case rideedge.keyCode: {
          audioElement = document.querySelector(`#${rideedge.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(rideedge.soundName);
          break;
        }
        case ridemid.keyCode: {
          audioElement = document.querySelector(`#${ridemid.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(ridemid.soundName);
          break;
        }
        case tomhi.keyCode: {
          audioElement = document.querySelector(`#${tomhi.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(tomhi.soundName);
          break;
        }
        case tomlow.keyCode: {
          audioElement = document.querySelector(`#${tomlow.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(tomlow.soundName);
          break;
        }
        case bdrum.keyCode: {
          audioElement = document.querySelector(`#${bdrum.keyboardKey}`);
          this.playSound(audioElement);
          this.props.setActiveSound(bdrum.soundName);
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
          <audio id={china.keyboardKey} sound-name={china.soundName} src={china.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{crash.keyboardKey}</div>
          <div className="sound-name">{crash.soundName}</div>
          <audio id={crash.keyboardKey} sound-name={crash.soundName} src={crash.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{hhopen.keyboardKey}</div>
          <div className="sound-name">{hhopen.soundName}</div>
          <audio id={hhopen.keyboardKey} sound-name={hhopen.soundName} src={hhopen.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{ridecup.keyboardKey}</div>
          <div className="sound-name">{ridecup.soundName}</div>
          <audio id={ridecup.keyboardKey} sound-name={ridecup.soundName} src={ridecup.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{rideedge.keyboardKey}</div>
          <div className="sound-name">{rideedge.soundName}</div>
          <audio id={rideedge.keyboardKey} sound-name={rideedge.soundName} src={rideedge.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{ridemid.keyboardKey}</div>
          <div className="sound-name">{ridemid.soundName}</div>
          <audio id={ridemid.keyboardKey} sound-name={ridemid.soundName} src={ridemid.src}><track kind="captions" /></audio>
        </ButtonPad>

        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{tomhi.keyboardKey}</div>
          <div className="sound-name">{tomhi.soundName}</div>
          <audio id={tomhi.keyboardKey} sound-name={tomhi.soundName} src={tomhi.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{tomlow.keyboardKey}</div>
          <div className="sound-name">{tomlow.soundName}</div>
          <audio id={tomlow.keyboardKey} sound-name={tomlow.soundName} src={tomlow.src}><track kind="captions" /></audio>
        </ButtonPad>
        <ButtonPad clickSound={this.handleClick} disabled={this.props.power}>
          <div className="keyboard-key">{bdrum.keyboardKey}</div>
          <div className="sound-name">{bdrum.soundName}</div>
          <audio id={bdrum.keyboardKey} sound-name={bdrum.soundName} src={bdrum.src}><track kind="captions" /></audio>
        </ButtonPad>
      </div>
    );
  }
}

ControlPanel.propTypes = {
  power: PropTypes.bool.isRequired,
  setActiveSound: PropTypes.func.isRequired,
  sounds: PropTypes.objectOf(PropTypes.object).isRequired
};

export default ControlPanel;
