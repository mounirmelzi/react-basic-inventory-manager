import React from "react";
import { useState, useEffect } from "react";
import SearchBar from "./Components/SearchBar";
import AddItem from "./Components/AddItem";
import ItemsDisplay from "./Components/ItemsDisplay";
import axios from "axios";

function App() {
  const [filters, setFilters] = useState({});
  const [data, setData] = useState({ items: [] });

  useEffect(() => {
    fetch("http://localhost:4000/items")
      .then((response) => response.json())
      .then((data) => {
        setData({ items: data });
      });
  }, []);

  const updateFilters = (searchParams) => {
    setFilters(searchParams);
  };

  const addItemToData = (item) => {
    if (!item.name) {
      alert("[WARNING] You can't add empty name !");
      return;
    }

    let items = data["items"];

    /** http requests: [the server contain database]
     * get: read data from the server (default)
     * post: send data to the server
     * put: apdate date on the server
     * delete: delete data from the server
     **/
    axios.post("http://localhost:4000/items", item).then((response) => {
      items.push(response.data);
      setData({ items: items });
    });
  };

  const filterData = (data) => {
    if (!filters.name) return data;

    const filteredData = [];
    for (const item of data) {
      if (filters.name !== "" && item.name !== filters.name) continue;
      if (filters.price !== 0 && item.price > filters.price) continue;
      if (filters.type !== "" && item.type !== filters.type) continue;
      if (filters.brand !== "" && item.brand !== filters.brand) continue;
      filteredData.push(item);
    }

    return filteredData;
  };

  const deleteItem = (item) => {
    const items = data["items"];

    const requestOptions = {
      method: "DELETE",
    };

    fetch(`http://localhost:4000/items/${item.id}`, requestOptions).then(
      (response) => {
        if (response.ok) {
          items.splice(items.indexOf(item), 1);
          setData({ items: items });
        }
      }
    );
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <ItemsDisplay
          deleteItem={deleteItem}
          items={filterData(data["items"])}
        />
      </div>
      <div className="row mt-3">
        <SearchBar updateSearchParams={updateFilters} />
      </div>
      <div className="row mt-3 mb-3">
        <AddItem addItem={addItemToData} />
      </div>
    </div>
  );
}

export default App;
