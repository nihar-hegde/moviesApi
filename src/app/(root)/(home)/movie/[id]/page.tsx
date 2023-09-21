import MovieCard, { MovieCardInterface } from '@/components/MovieCard';
import { getMovieCasts, getMovieDetails, getMovieRec } from '@/lib/getMovies';
import Link from 'next/link';
import React from 'react'
import Image from 'next/image'
import { EMPTY_MOVIE_URL, IMAGE_URL } from '@/lib/config';
import dayjs from 'dayjs'
import CastCard, { CastCardInterface } from '@/components/CastCard';


interface ParamsMovieDetails {
    params: {
      id: MovieCardInterface["id"];
    };
  }

  const page = async ({ params }: ParamsMovieDetails) => {
    const { id } = params;
    const movie = await getMovieDetails(id);
    const movieCast = await getMovieCasts(id);
    const recommendations = await getMovieRec(id);
  
    const durationHours = Math.round(movie?.runtime / 60);
    const durationMinutes = Math.round(movie?.runtime % 60);
  
    return (
      <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
        <div className="w-[1000px] max-w-full px-4 mx-auto">
          <div className="flex flex-col mt-6">
            <div className="flex gap-7">
              <div className="flex relative">
                <div className="w-[270px] h-[400px] relative">
                  <Image
                    src={
                      movie?.poster_path
                        ? `${IMAGE_URL}${movie?.poster_path}`
                        : `${EMPTY_MOVIE_URL}`
                    }
                    alt={movie?.title}
                    fill={true}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                  <h2 className="text-xl font-medium text-white">{movie?.title}</h2>
                  <span
                    className={`flex flex-col p-2 text-white rounded-md ${
                      movie?.vote_average < 5
                        ? `bg-red-700`
                        : movie?.vote_average == 5
                        ? `bg-orange-700`
                        : `bg-green-700`
                    }`}
                  >
                    {movie?.vote_average}
                  </span>
                </div>
                <div className="flex gap-4 items-center mt-4">
                  <h5 className="text-md font-medium text-white">
                    {dayjs(movie?.release_date).format("MMM DD YYYY")}
                  </h5>
                  <h5 className='text-white'> | </h5>
                  {movie?.runtime > 0 && (
                    <>
                      <h5 className="text-md text-white font-medium">{`${durationHours}h ${durationMinutes}m`}</h5>
                      <h5 className='text-white'> | </h5>
                    </>
                  )}
                  <h5 className="text-md text-white font-medium">
                    {movie?.genres?.map((genre: any) => genre?.name).join(", ")}
                  </h5>
                </div>
                <div className="flex flex-col mt-5">
                  <p className="text-md text-white font-normal">{movie?.overview}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[1200px] max-w-full px-4 mx-auto">
          <div className="flex flex-col mb-6 mt-6">
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-2xl text-white font-medium">Top Cast</h1>
              <Link
                href={`/movie/${id}/casts`}
                className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-4 mt-4 gap-4">
              {movieCast?.cast?.slice(0, 4).map((cast: CastCardInterface) => (
                <CastCard key={cast?.id} cast={cast} />
              ))}
            </div>
          </div>
          <div className="flex flex-col mb-6 mt-6">
            <div className="flex justify-between items-center mt-4">
              <h1 className="text-2xl text-white font-medium">Top Recommendations</h1>
              <Link
                href={`/movie/${id}/recommendations`}
                className="py-2 px-5 bg-slate-800 text-md font-normal text-white"
              >
                See all
              </Link>
            </div>
            <div className="grid grid-cols-4 mt-4 gap-4">
              {recommendations?.results?.slice(0, 4).map((movie: MovieCardInterface) => (
                <MovieCard key={movie?.id} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </main>
    );
  };
  
  export default page;