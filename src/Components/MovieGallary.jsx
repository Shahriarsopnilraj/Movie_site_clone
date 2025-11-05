import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CategoriaNavbar from './CategoriaNavbar'
import { toast } from 'react-hot-toast';
import MovieCard from './MovieCard';
import TopRated from './TopRated';
import Footer from './Footer';

function MovieGallary() {
    const [movies,setMovies] = useState([])
    const [loading,setLoading]=useState(true);
    const[selectCategory,setSelectCategory]=useState("All")
    const[showAll,setShowAll] =useState(false)
    useEffect(()=>{
        fetch("../public/Movies.json")
        .then(res=>res.json())
        .then(data=> setMovies(data))
        .catch((error)=>{
          console.log(error);
          toast.error("Failed to load movie data!!")
        })
        .finally(()=>setLoading(false))
    },[])
    const catagories = ["All", ...new Set(movies.map(m=> m.category))]
    const filterMovies = selectCategory==="All"?movies:movies.filter(m=>m.category===selectCategory)
    const visivbleMovies = showAll?filterMovies : filterMovies.slice(0,8);
  return (

    <div className='w-11/12 mx-auto py-10'>
      <h1 className='lext-lg lg:text-xl'>RECOMENDED FOR YOU</h1>
      <CategoriaNavbar catagories={catagories} selectCategory={selectCategory} setSelectCategory={setSelectCategory}></CategoriaNavbar>
      {
        loading?
        (<div className='flex justify-center items-center h-64'>
          <span className="loading loading-dots loading-xl text-yellow-500"></span>
        </div>)
        : filterMovies.length>0 ?
        (
          <>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
            {
              visivbleMovies.map(movie =>(
                <MovieCard 
                key={movie.id} 
                movie = {movie}
                ></MovieCard>
              ))
            }
          </div>

          {
            filterMovies.length>8 && (
              <div className='flex justify-center mt-10'>
                <button
                className='px-6 py-2 bg-yellow-500 text-black font-semibold rounded-full hover:bg-yellow-300 transition-all duration-300'
                onClick={()=> setShowAll(!showAll)}>{showAll?"Show Less":"Show More"}</button>
              </div>
            )
          }
          </>
        ): (
          <p className='text-gray-400 text-center'>No Movies Data Found</p>
        )
      }
      {/* <TopRated movies={movies}></TopRated> */}
      <Footer></Footer>
    </div>
  )
}

export default MovieGallary
