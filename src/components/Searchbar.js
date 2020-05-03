import React, { Component } from 'react';
import styles from '../styles.module.css';
import PropTypes from 'prop-types';

export default class Searchbar extends Component {
  state = { query: '' };
  static propTypes = { onSubmit: PropTypes.func };
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  render() {
    const { query } = this.state;
    return (
      <div className={styles.buttonBorder}>
        <form onSubmit={this.handleSubmit} className={styles.form}>
          <button type="submit" className={styles.button}>
            <span
              className={styles.buttonLabel}
              role="img"
              aria-label="search"
            ></span>
          </button>
          <input
            onChange={this.handleChange}
            name="query"
            value={query}
            className={styles.input}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </div>
    );
  }
}
