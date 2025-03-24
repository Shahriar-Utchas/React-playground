export default function Movie({ movie }) {
  return (
    <div>
      <h3>Title: {movie.name}</h3>
      <p>Release: {movie.year}</p>
    </div>
  );
}
