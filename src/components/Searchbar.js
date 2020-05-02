import React, { Component } from 'react';
import styles from '../styles.module.css';

export default class Searchbar extends Component {
  state = { query: '' };

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
            <span role="img" aria-label="search">
              &#128269;
            </span>
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
