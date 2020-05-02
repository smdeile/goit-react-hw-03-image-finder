/* eslint-disable */
import React, { Component, createRef } from 'react';
import Searchbar from './components/Searchbar';
import articlesApi from './services/articlesApi';
import ImageGallery from './components/ImageGallery';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from 'react-loader-spinner';

export default class App extends Component {
  state = {
    articles: [],
    error: null,
    loading: 'false',
    page: 1,
    isLoading: false,
    query: '',
  };

  componentDidMount() {
    this.fetchArticles();
  }
  fetchArticles = query => {
    if (query !== undefined) {
      this.setState({ isLoading: true });

      articlesApi
        .FetchArticles(query)
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
  handleClick = async () => {
    // e.preventDefault();
    const { query, page } = this.state;

    await articlesApi
      .FetchArticles(query, page)
      .then(articles =>
        this.setState(prevState => ({
          articles: [...prevState.articles, ...articles],
          page: prevState.page + 1,
        })),
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        this.setState({ isLoading: false });
      });
    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  };
  listRef = createRef();

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
      <div ref={this.listRef}>
        {this.state.isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
        )}
        <Searchbar onSubmit={this.fetchArticles} />
        <ImageGallery articleList={this.state.articles} />
        {this.state.articles.length > 0 && (
          <Button tittle="Load more" onClick={this.handleClick} />
        )}
        {this.state.isModalOpen && (
          <Modal
            onClick={onClick}
            largeImageURL={largeImageURL}
            state={state}
            onSelect={onSelect}
          />
        )}
      </div>
    );
  }
}
