import axios from 'axios';

const KEY = '15565961-5e85110a0724a211af2dbcdb2';
const FetchArticles = async (query, page = 1) => {
  const response = await axios.get(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
  );
  return response.data.hits;
};
export default { FetchArticles };
