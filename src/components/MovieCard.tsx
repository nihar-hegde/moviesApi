import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { EMPTY_MOVIE_URL, IMAGE_URL } from "@/lib/config";
import CriticScore from "./CriticScore";

export interface MovieCardInterface {
  id: number;
  title: string;
  poster_path: string;
  vote_average: number;
}

const MovieCard = ({ movie }: { movie: MovieCardInterface }) => {
  return (
    <>
      <Card className="w-full max-w-fit border-0 !bg-transparent sm:max-w-[356px]">
        <Link href={`/movie/${movie?.id}`}>
          <CardHeader className="flex-center flex-col gap-2.5 !p-0">
            <div className="h-fit w-full">
                <Image 
                src={
                    movie?.poster_path
                      ? `${IMAGE_URL}${movie?.poster_path}`
                      : `${EMPTY_MOVIE_URL}`
                  }
                  alt={movie?.title}
                  className="h-full rounded-md object-cover"
                  width={384}
                  height={440}
                />
            </div>
            <CardTitle className="text-white paragraph-semibold line-clamp-1 w-full text-left">{movie?.title}</CardTitle>
          </CardHeader>
        </Link>
        <CardContent className="flex-between mt-4 p-0">
          <CriticScore score={movie?.vote_average}/>
        </CardContent>
        
      </Card>
    </>
  );
};

export default MovieCard;
