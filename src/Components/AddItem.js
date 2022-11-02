import React from "react";
import { useState } from "react";

export default function AddItem(props) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [type, setType] = useState("");
  const [brand, setBrand] = useState("");

  function resetAllStates() {
    setName("");
    setPrice(0);
    setType("");
    setBrand("");
  }

  const addItemButtonPressed = () => {
    props.addItem({
      name: name,
      price: price,
      type: type,
      brand: brand,
    });

    resetAllStates();
  };

  return (
    <div className="container">
      <div className="row">
        <h2>Add an Item</h2>
      </div>

      <div className="row">
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          className="form-control"
          value={name}
          onChange={(event) => setName(event.target.value)}
        ></input>

        <label htmlFor="price-field">Price:</label>
        <input
          id="price-field"
          type="number"
          className="form-control"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        ></input>

        <label htmlFor="type-field">Type:</label>
        <input
          id="type-field"
          type="text"
          className="form-control"
          value={type}
          onChange={(event) => setType(event.target.value)}
        ></input>

        <label htmlFor="brand-field">Brand:</label>
        <input
          id="brand-field"
          type="text"
          className="form-control"
          value={brand}
          onChange={(event) => setBrand(event.target.value)}
        ></input>
      </div>

      <div className="row mt-3">
        <button
          type="button"
          className="btn btn-primary"
          onClick={addItemButtonPressed}
        >
          Add Item
        </button>
      </div>
    </div>
  );
}
