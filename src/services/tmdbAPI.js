import axios from 'axios';

const API_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '468e3ef92bf536e06364f01be3648edc';

export const fetchTrendMovies = async () => {
  try {
    const { data } = await axios.get(
      `${API_URL}trending/movie/day?api_key=${API_KEY}`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMoviesByQueryName = async query => {
  try {
    const { data } = await axios.get(
      `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieDetailsById = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieCast = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}/credits?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const fetchMovieReviews = async movieId => {
  try {
    const { data } = await axios.get(
      `${API_URL}movie/${movieId}}/reviews?api_key=${API_KEY}&language=en-US&page=1`
    );

    return data;
  } catch (error) {
    throw new Error(error);
  }
};

// My API Key 468e3ef92bf536e06364f01be3648edc
//Global axios defaults

// axios.defaults.baseURL = `https://api.themoviedb.org/3`;
// axios.defaults.params = {
//   api_key: `468e3ef92bf536e06364f01be3648edc`,
//   include_adult: false,
// };

// //const { data } - деструктуризація response.data

// export const fetchTrendMovies = async (page = 1, language) => {
//   try {
//     const { data } = await axios.get('/trending/movie/day', {
//       params: {
//         page,
//         language,
//       },
//     });
//     return data;
//   } catch (error) {
//     throw new Error('Sory, there is no movies');
//   }
// };

// export const fetchMoviesByQueryName = async (
//   page = 1,
//   query = '',
//   language
// ) => {
//   try {
//     const urlParam = query
//       ? `/search/movie?page=${page}&query=${query}&language=${language}`
//       : `/movie/upcoming?page=${page}&language=${language}`;
//     const { data } = await axios.get(urlParam);
//     return data;
//   } catch (error) {
//     throw new Error('Sory, there is no movie');
//   }
// };

// export const fetchMoviesDetailsById = async (movieId, language) => {
//   try {
//     const { data } = await axios.get(`movie/${movieId}`, {
//       params: {
//         id: movieId,
//         language,
//       },
//     });
//     return data;
//   } catch (error) {
//     throw new Error('Sory, there is no movie with that name');
//   }
// };

// export const fetchMoviesCast = async (movieId, language) => {
//   try {
//     const { data } = await axios.get(`movie/${movieId}/credits`, {
//       params: {
//         id: movieId,
//         language,
//       },
//     });
//     return data.cast;
//   } catch (error) {
//     throw new Error('Sory, there is no cast movie');
//   }
// };

// export const fetchMoviesReviews = async (movieId, language) => {
//   try {
//     const { data } = await axios.get(`movie/${movieId}/reviews`, {
//       params: {
//         id: movieId,
//         language,
//       },
//     });
//     return data.results;
//   } catch (error) {
//     throw new Error('Sory, we don`t have any reviews for this movie');
//   }
// };
