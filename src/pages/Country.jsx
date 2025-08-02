import React, { Component } from "react";

export default class Country extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      capital: "",
      population: "",
      area: "",
      data: [],
      editingItemId: null,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { editingItemId, name, capital, population, area, data } = this.state;

    if (editingItemId) {
      const updateData = data.map((country) =>
        country.id === editingItemId
          ? { id: editingItemId, name, capital, population, area }
          : country
      );
      this.setState({
        data: updateData,
        name: "",
        capital: "",
        population: "",
        area: "",
        editingItemId: null,
      });
    } else {
      const country = {
        id: Date.now(),
        name,
        capital,
        population,
        area,
      };
      this.setState({
        data: [...data, country],
        name: "",
        capital: "",
        population: "",
        area: "",
      });
    }
  };

  handleDelete = (id) => {
    this.setState({
      data: this.state.data.filter((country) => country.id !== id),
    });
  };

  handleUpdate = (country) => {
    this.setState({
      name: country.name,
      capital: country.capital,
      population: country.population,
      area: country.area,
      editingItemId: country.id,
    });
  };

  render() {
    const { data, name, capital, population, area } = this.state;

    return (
      <div className="min-h-screen bg-gray-100 flex justify-center items-start py-10 px-4">
        <div className="w-full max-w-4xl">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Country CRUD</h1>

          <form
            onSubmit={this.handleSubmit}
            className="bg-white rounded-lg shadow-md p-6 grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
          >
            <input
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Name"
            />
            <input
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={capital}
              onChange={(e) => this.setState({ capital: e.target.value })}
              type="text"
              placeholder="Capital"
            />
            <input
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={population}
              onChange={(e) => this.setState({ population: e.target.value })}
              type="text"
              placeholder="Population"
            />
            <input
              className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={area}
              onChange={(e) => this.setState({ area: e.target.value })}
              type="text"
              placeholder="Area"
            />
            <button
              className="bg-blue-600 text-white rounded-md px-4 py-2 font-semibold hover:bg-blue-700 transition col-span-full"
            >
              {this.state.editingItemId ? "Update" : "Submit"}
            </button>
          </form>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((country) => (
              <div
                className="bg-white border border-gray-200 rounded-lg shadow p-5"
                key={country.id}
              >
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Name:</strong> {country.name}
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Capital:</strong> {country.capital}
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Population:</strong> {country.population}
                </p>
                <p className="text-sm text-gray-700">
                  <strong className="text-gray-900">Area:</strong> {country.area}
                </p>
                <div className="mt-4 flex gap-2">
                  <button
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                    onClick={() => this.handleDelete(country.id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
                    onClick={() => this.handleUpdate(country)}
                  >
                    Update
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
