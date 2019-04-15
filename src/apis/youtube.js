import axios from 'axios';

const KEY = 'AIzaSyAgBDT5vzu7CFNw3_-nRyoiItaBLtH4g8o';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
