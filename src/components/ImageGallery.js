import React, { Component } from 'react';
import styles from '../styles.module.css';
import ImageGalleryItem from './ImageGalleryItem';

export default class ImageGallery extends Component {
  state = { isModalOpen: false };
  toggleModal = () => this.setState({ isModalOpen: !this.state.isModalOpen });

  // listRef = createRef();

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps !== this.props) {
  //     console.dir(prevProps.articleList.length);
  //     console.log(this.props);
  //     // this.listRef.current.scrollTo({
  //     //   top: this.listRef.current.scrollHeight,
  //     //   behavior: 'smooth',
  //     // });
  //     console.dir(this.listRef.current.scrollTop);
  //     console.log(this.listRef.current.scrollHeight);
  //     this.listRef.current.scrollTop = this.listRef.current.scrollHeight;
  //     console.log('must');
  //     this.listRef.current.scrollTop = this.listRef.current.scrollHeight;
  //   }
  // }

  render() {
    const { articleList } = this.props;

    return (
      <ul className={styles.list}>
        {articleList.map(article => (
          <ImageGalleryItem
            onClick={this.toggleModal}
            key={article.id}
            webformatURL={article.webformatURL}
            alt={article.tags}
            largeImageURL={article.largeImageURL}
            state={this.state}
          />
        ))}
      </ul>
    );
  }
}
