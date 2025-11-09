import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import ImageCarousel from '../Components/ImageCarousel'
import MovieGallary from '../Components/MovieGallary'
import { Toaster } from 'react-hot-toast'
import TopRated from '../Components/TopRated'
import Footer from '../Components/Footer'

function Home() {
  const [searchText,setSearchText] = useState(" ")

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} ></Navbar>
      <ImageCarousel></ImageCarousel>
      <main>
        <MovieGallary></MovieGallary>
        <TopRated searchText={searchText}/>
        <Toaster position='top-right'></Toaster>
        <Footer></Footer>
      </main>
    </div>
  )
}

export default Home
