import React, { Component, createRef } from 'react';
import styles from '../styles.module.css';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  backDropRef = createRef();
  static propTypes = {
    item: PropTypes.objectOf(PropTypes.string),
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handlePress);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePress);
  }
  handlePress = e => {
    if (e.code !== 'Escape') return;
    this.props.toggleModal();
  };

  handleBackDropClick = e => {
    const { current } = this.backDropRef;
    if (current && current !== e.target) return;
    this.props.toggleModal();
  };

  render() {
    const { item } = this.props;
    return (
      <div
        ref={this.backDropRef}
        className={styles.overlay}
        onClick={this.handleBackDropClick}
      >
        <div className={styles.modal}>
          <img src={item.largeImageURL} alt={item.tags} />
        </div>
      </div>
    );
  }
}
