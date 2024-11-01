import React from 'react'


export default function MovieCard(props) {
  return (
    <>
      <div className="container" style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
        <div className="card mb-3 my-2" style={{}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src= {props.moviePoster} className="img-fluid rounded-start" alt="..." style={{ width: "100%" ,height: "100%" }} />
            </div>
            <div className="col-md-8" >
              <div className="card-body" >
                <h5 className="card-title">{props.titleToCard}</h5>
                <p className="card-text">{props.moviePlot}</p>
                <p className="card-text"><small className="text-body-secondary">Year: {props.Year}</small></p>
                <p className="card-text"><small className="text-body-secondary">Runtime: {props.Runtime}</small></p>
                <p className="card-text"><small className="text-body-secondary">Released: {props.Released}</small></p>
                <p className="card-text"><small className="text-body-secondary">Genre: {props.Genre}</small></p>
                <p className="card-text"><small className="text-body-secondary">Director: {props.Director}</small></p>
                <p className="card-text"><small className="text-body-secondary">Writer: {props.Writer} </small></p>
                <p className="card-text"><small className="text-body-secondary">Actors: {props.Actors} </small></p>
                <p className="card-text"><small className="text-body-secondary">Language: {props.Language} </small></p>
                <p className="card-text"><small className="text-body-secondary">ImdbRating: {props.imdbRating} </small></p>
                <p className="card-text"><small className="text-body-secondary">BoxOffice: {props.BoxOffice} </small></p>
              </div>
            </div>
          </div>
        </div>        
      </div>
    </>
  )
}
