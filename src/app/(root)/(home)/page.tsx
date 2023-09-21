import Filters from '@/components/Filters'
import PopularMovies from '@/components/PopularMovies'
import SearchForm from '@/components/SearchForm'
import TopRatedMovies from '@/components/TopRatedMovies'
import UpcomingMovies from '@/components/UpcomingMovies'
import { getMovies } from '@/lib/getMovies'

import axios from 'axios'
import React from 'react'


const Page = async () => {
  // teting to be deleted
  const popularMovies = await getMovies("popular");
  const topRatedMovies = await getMovies("top_rated");
  const upcomingMovies = await getMovies("upcoming");
  // Testing to be deleted
  
  return (
    <>
    <main className='flex-center paddings mx-auto w-full max-w-screen-2xl flex-col'>
      <section className='nav-padding w-full'>
        <div className='flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-cover bg-center text-center'>
          <h1 className='sm:heading1 heading2 mb-6 text-center text-white'>Movies</h1>
        </div>
        <SearchForm/>
      </section>
      <Filters/>
      {/* Testing to be deleted */}
      <div className="w-[1300px] max-w-full px-4 mx-auto">
        <UpcomingMovies upcomingMovies={upcomingMovies} />
        <PopularMovies popularMovies={popularMovies} />
        <TopRatedMovies topRatedMovies={topRatedMovies} />
      </div>
      {/* Testing to be deleted */}
    </main>
    </>
  )
}

export default Page