import React, { Component, createRef } from 'react';
import styles from '../styles.module.css';

export default class Modal extends Component {
  backDropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handlePress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePress);
  }
  handlePress = e => {
    if (e.code !== 'Escape') return;
    this.props.onClick();
  };
  handleBackDropClick = e => {
    const { current } = this.backDropRef;
    console.log(current);
    if (current && current !== e.target) return;
    this.props.onClick();
  };
  render() {
    const { largeImageURL } = this.props;
    return (
      <div
        ref={this.backDropRef}
        className={styles.overlay}
        onClick={this.handleBackDropClick}
      >
        <div className={styles.modal}>
          <img src={largeImageURL} alt="" />
        </div>
      </div>
    );
  }
}
