import React from "react";
import './MovieDetails.css';

const MovieDetails = (props) => {
  return (
    <section>
      <section>
        <button>Back to Main</button>
        <img className='movie-backdrop' src={props.selectedMovie.backdrop_path} alt={props.selectedMovie.title} />
        <h2>{props.selectedMovie.title}</h2>
      </section>
      <section>
        <section>
          <div>
            <p>{props.selectedMovie.average_rating}</p>
            <p>{props.selectedMovie.release_date}</p>
            <p>1 hour 20 minutes</p>
          </div>
          <div>
            <p>This movie is about blah blah blah.</p>
          </div>
        </section>
        <section>
          <p>Tagline</p>
          <p>Genres</p>
          <p>Revenue</p>
          <p>Budge</p>
        </section>
      </section>
    </section>
    )

  }
  
  export default MovieDetails;
