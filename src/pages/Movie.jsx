import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Movie = () => {
  const [name, setName] = useState("");
  const [genre, setGenre] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const [movies, setMovies] = useState([]);
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editingId) {
      setMovies((prev) =>
        prev.map((movie) =>
          movie.id === editingId ? { ...movie, name, genre, rating } : movie
        )
      );
      setEditingId(null);
    } else {
      const newMovie = { id: Date.now(), name, genre, rating };
      setMovies([...movies, newMovie]);
    }

    setName("");
    setGenre("");
    setRating(0);
  };

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleEdit = (movie) => {
    setEditingId(movie.id);
    setName(movie.name);
    setGenre(movie.genre);
    setRating(movie.rating);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
          {editingId ? "Update Movie " : "Add a Movie "}
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
            {editingId ? "Update Movie" : "Add Movie"}
          </button>
        </form>
      </div>

      {movies.length > 0 && (
        <div className="max-w-3xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="bg-white border rounded shadow-md p-4 space-y-2"
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
              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(movie)}
                  className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
                >
                  Update
                </button>
                <button
                  onClick={() => handleDelete(movie.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default React.memo(Movie);
