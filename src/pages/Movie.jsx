import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Movie = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [movies, setMovies] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = { id: Date.now(), name, genre, rating };
    setMovies([...movies, newMovie]);

    setName("");
    setGenre("");
    setRating(0);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          Add a Movie 🎬
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Movie name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="text"
            placeholder="Movie genre"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                size={30}
                color={star <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                style={{ cursor: "pointer" }}
                onClick={() => setRating(star)}
                onMouseEnter={() => setHover(star)}
                onMouseLeave={() => setHover(null)}
              />
            ))}
            <span className="ml-3 text-gray-600">Rating: {rating}</span>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Add Movie
          </button>
        </form>
      </div>

      {movies.length > 0 && (
        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white border rounded shadow-md p-4"
            >
              <p>
                <strong className="text-gray-700">Name:</strong> {movie.name}
              </p>
              <p>
                <strong className="text-gray-700">Genre:</strong> {movie.genre}
              </p>
              <p>
                <strong className="text-gray-700">Rating:</strong> {movie.rating}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Movie;
