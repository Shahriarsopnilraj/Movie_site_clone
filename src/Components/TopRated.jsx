import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import MovieCard from './MovieCard';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TopRated = ({searchText}) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/Movies.json")
      .then((res) => res.json())
      .then((data) => {
        setMovies(data);
        setLoading(false);
        toast.success(`Loaded ${data.length} movies successfully`);
      })
      .catch((err) => {
        console.log(`Error loading movies:`, err);
        setLoading(false);
        toast.error("Failed to load movies. Please try again later!");
      });
  }, []);

  const filteredMovies = movies
    .filter((movie) => movie.rating > 7)
    .filter((movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase())
    );

  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  if (loading) return <p className="text-center py-10">Loading...</p>;

  return (
    <div className="py-16 container mx-auto">
      {filteredMovies.length > 0 ? (
        <Carousel
          responsive={responsive}
          autoPlay
          infinite
          arrows
          autoPlaySpeed={2500}
          pauseOnHover
          containerClass="px-2"
        >
          {filteredMovies.map((movie) => (
            <div key={movie.id} className="px-2">
              <MovieCard movie={movie} />
            </div>
          ))}
        </Carousel>
      ) : (
        <p className="text-center">No movies found!</p>
      )}
    </div>
  );
};

export default TopRated;
