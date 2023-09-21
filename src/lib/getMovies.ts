// export async function getMovies(type: string) {
//     const res = await fetch(
//       `https://api.themoviedb.org/3/movie/${type}?api_key=${process.env.API_KEY}&language=en-US`
//     );
//     return res.json();
//   }

import { MovieCardInterface } from '@/components/MovieCard';
import axios from 'axios';

export async function getMovies(type: string) {
  try {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${type}`, {
      params: {
        api_key: process.env.API_KEY,
        language: 'en-US',
      },
    });

    return response.data;
  } catch (error) {
    console.log("GetMovies",error);
    throw error;
  }
}
//Todo get popular movies 

export async function getPopularMovies(page: number) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular`,
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
          page: page,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

//get top rated movies


export async function getTopRatedMovies(page: number) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated`,
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
          page: page,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

//get upcoming moveis
export async function getUpcomingMovies(page: number) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/upcoming`,
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
          page: page,
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}


//TODO get moives in individual movies page

export async function getMovieDetails(id: MovieCardInterface["id"]) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieRec(id: MovieCardInterface["id"]) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/recommendations`,
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function getMovieCasts(id: MovieCardInterface["id"]) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits`,
      {
        params: {
          api_key: process.env.API_KEY,
          language: 'en-US',
        },
      }
    );

    return response.data;
  } catch (error) {
    throw error;
  }
}


//TODO Search Movies
export async function getSearchMovies(searchQuery:string){
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/search/movie',
      {
        params:{
          api_key:process.env.API_KEY,
          query:searchQuery,
          language: 'en-US',
        }
      }
    )
    return response.data;
  } catch (error) {
    throw error;
  }
}
