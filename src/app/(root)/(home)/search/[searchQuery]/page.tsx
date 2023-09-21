import MovieCard, { MovieCardInterface } from "@/components/MovieCard";
import axios from "axios";

export default async function SearchPage({ params }: { params: { searchQuery: string } }) {
  try {
    // Encode the query parameter to handle spaces and special characters
    const encodedQuery = encodeURIComponent(params.searchQuery);

    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie`,
      {
        params: {
          api_key: process.env.API_KEY,
          query: encodedQuery, // Use the encoded query
          language: "en-US",
          include_adult: false,
        },
      }
    );

    const results = response.data.results;

    return (
      <>
        {results && results.length === 0 && (
          <h1 className="text-center pt-6">No results found</h1>
        )}
        {results && (
          <main className="mt-5 flex flex-col">
            <div className="w-[1300px] max-w-full px-4 mx-auto">
              <div className="flex flex-col">
                <h1 className="text-2xl font-medium">Popular Movies</h1>
              </div>
              <div className="grid grid-cols-4 mt-4 gap-4">
                {results.map((movie: MovieCardInterface) => (
                  <MovieCard key={movie?.id} movie={movie} />
                ))}
              </div>
            </div>
          </main>
        )}
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    throw new Error("Error fetching data");
  }
}
