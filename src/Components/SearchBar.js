import React from "react";
import { useState } from "react";

export default function SearchBar(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  const searchButtonPressed = () => {
    props.updateSearchParams({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Search for an Item</h2>
      </div>

      <div className="row">
        <div className="col">
          <label className="row" htmlFor="name-field">
            Name:
          </label>
          <input
            id="name-field"
            type="text"
            className="form-control row"
            value={name}
            onChange={(event) => setName(event.target.value)}
          ></input>
        </div>

        <div className="col">
          <label className="row" htmlFor="price-field">
            Max Price:
          </label>
          <input
            id="price-field"
            type="number"
            className="form-control row"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          ></input>
        </div>

        <div className="col">
          <label className="row" htmlFor="type-field">
            Type:
          </label>
          <input
            id="type-field"
            type="text"
            className="form-control row"
            value={type}
            onChange={(event) => setType(event.target.value)}
          ></input>
        </div>

        <div className="col">
          <label className="row" htmlFor="brand-field">
            Brand:
          </label>
          <input
            id="brand-field"
            type="text"
            className="form-control row"
            value={brand}
            onChange={(event) => setBrand(event.target.value)}
          ></input>
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-4" />
        <button
          type="button"
          className="col-4 btn btn-primary"
          onClick={searchButtonPressed}
        >
          Search
        </button>
      </div>
    </div>
  );
}
