/* eslint-disable */
import React, { Component, createRef } from 'react';
import Searchbar from './components/Searchbar';
import articlesApi from './services/articlesApi';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import styles from './styles.module.css';

import Loader from 'react-loader-spinner';

export default class App extends Component {
  state = {
    articles: [],
    error: null,
    page: 1,
    isLoading: false,
    query: '',
    isModalOpen: false,
    modalItem: [],
  };

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = (query, page) => {
    if (query !== undefined) {
      this.setState({ isLoading: true });

      articlesApi
        .FetchArticles(query, page)
        .then(articles =>
          this.setState(prevState => ({
            articles: [...prevState.articles, ...articles],
            page: prevState.page + 1,
            query: query,
          })),
        )
        .catch(error => this.setState({ error }))
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  };
  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });
  onSelect = async id => {
    await this.setState(state => ({
      modalItem: state.articles.filter(image => image.id === id),
      isModalOpen: !this.state.isModalOpen,
    }));
  };
  handleClick = async () => {
    const { query, page } = this.state;
    this.fetchArticles(query, page);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.articles !== this.state.articles) {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  render() {
    return (
      <div className={styles.app}>
        <Searchbar onSubmit={this.fetchArticles} />
        <div className={styles.loadMoreBlock}>
          {this.state.isLoading && (
            <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
          )}
        </div>
        <ImageGallery
          articleList={this.state.articles}
          onSelect={this.onSelect}
        />
        <div className={styles.loadMoreBlock}>
          {this.state.articles.length > 0 && (
            <Button tittle="Load more" onClick={this.handleClick} />
          )}
        </div>
        {this.state.isModalOpen && (
          <Modal
            item={this.state.modalItem[0]}
            toggleModal={this.toggleModal}
          />
        )}
      </div>
    );
  }
}
