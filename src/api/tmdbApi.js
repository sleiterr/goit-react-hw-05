// tmdbApi.js

import axios from 'axios';

const API_KEY = "ca82fe14c900979050efbda0f1b9589e";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export const fetchTrendingMovies = async () => {
  const { data } = await api.get('/trending/movie/day');
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await api.get('/search/movie', {
    params: { query },
  });
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await api.get(`/movie/${id}`);
  return data;
};

export const fetchMovieCredits = async (id) => {
  const { data } = await api.get(`/movie/${id}/credits`);
  return data.cast;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await api.get(`/movie/${id}/reviews`);
  return data.results;
};

