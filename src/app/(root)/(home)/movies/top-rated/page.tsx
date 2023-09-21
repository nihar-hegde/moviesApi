import MovieCard, { MovieCardInterface } from "@/components/MovieCard";
import Paginate from "@/components/Pageinate";
import {  getTopRatedMovies } from "@/lib/getMovies";


type SearchProps = {
  searchParams?: {
    page?: number;
  };
};



const page = async ({ searchParams }: SearchProps) => {
  const page = searchParams?.page || 1;

  const topRatedMovies = await getTopRatedMovies(page);

  return (
    <main className="mt-5 flex flex-col">
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <div className="flex flex-col">
          <h1 className="text-2xl font-medium">Popular Movies</h1>
        </div>
        <div className="grid grid-cols-4 mt-4 gap-4">
          {topRatedMovies.results.map((movie: MovieCardInterface) => (
            <MovieCard key={movie?.id} movie={movie} />
          ))}
        </div>
        <Paginate
          currentPage={page < 1 || page > topRatedMovies.total_pages ? 1 : page}
          totalPages={topRatedMovies.total_pages}
          pageType="top-rated"
        />
      </div>
    </main>
  );
};

export default page;