import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import CategoriaNavbar from './CategoriaNavbar'
import { toast } from 'react-hot-toast';

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
    </div>
  )
}

export default MovieGallary
