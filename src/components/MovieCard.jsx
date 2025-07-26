import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div>
      <Link to={`/movie/${movie.id}`}>
        <h3>{movie.title}</h3>
      </Link>
    </div>
  );
}

export default MovieCard;