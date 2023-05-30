

export function ListMoviesComponent ({ movie }) {
  
  return (
    <li className="movie-item">
      <div className="movie-item-body">
        <h3>{movie.title}</h3>
        <p>{movie.year}</p>
      </div>
      <img
        className="movie-item-img"
        src={movie.poster}
        alt={movie.title}
      />
    </li>
  )
}