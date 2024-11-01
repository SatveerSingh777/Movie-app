import React, { useState, useEffect, useCallback } from 'react'
import MovieCard from './MovieCard'
import Loading from './Loading';
import Alert from './Alert';
import Photo from './Assists/movies.png'


export default function Movies(props) {

  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)

  const handleFetchApi = useCallback(async () => {
    setLoading(true);
    setError(false);
    setAlert(false);
    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${props.titleFromApp}&apikey=d131f4ca`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      if (data.Response === 'False') {
        throw new Error(data.Error || 'Movie not found');
      }
      setMovie(data);
    } catch (error) {
      console.error("Error fetching movie data:", error);
      setError(true);
      setMovie(null);
      setAlert(true);
    } finally {
      setLoading(false);
    }
  }, [props.titleFromApp]);

  useEffect(() => {
    if (props.titleFromApp) {
      handleFetchApi();
    }
  }, [props.titleFromApp, handleFetchApi]);

  return (
    <div>
      {loading && <Loading />}
      {error && alert && <Alert alert="Enter correct movie name" />}
      {!loading && !error && movie && <MovieCard 
      titleToCard ={movie.Title ? movie.Title : "N/A"} 
      moviePlot ={movie.Plot ? movie.Plot : "Sorry! We don't have the plot of this movie. please check another details"}
      moviePoster ={movie.Poster ? movie.Poster : Photo}
      Released = {movie.Released ? movie.Released : "N/A"}
      Genre = {movie.Genre ? movie.Genre : "N/A"}
      Director = {movie.Director ? movie.Director : "N/A"}
      Writer = {movie.Writer ? movie.Writer : "N/A"}
      Actors = {movie.Actors ? movie.Actors : "N/A"}
      Language = {movie.Language ? movie.Language : "N/A"}
      imdbRating = {movie.imdbRating ? movie.imdbRating : "N/A"}
      BoxOffice = {movie.BoxOffice ? movie.BoxOffice : "N/A"}
      Year = {movie.Year ? movie.Year : "N/A"}
      Runtime = {movie.Runtime ? movie.Runtime : "N/A"}
      />}

      {!loading && !error && !movie && <MovieCard 
      titleToCard ={ "Movie Name"} 
      moviePlot ={ "Plot of the movie "}
      moviePoster ={Photo}
      Released = { "N/A"}
      Genre = {"N/A"}
      Director = { "N/A"}
      Writer = { "N/A"}
      Actors = {"N/A"}
      Language = {"N/A"}
      imdbRating = { "N/A"}
      BoxOffice = {"N/A"}
      Year = { "N/A"}
      Runtime = {"N/A"}
      />}
    </div>
  )
}
