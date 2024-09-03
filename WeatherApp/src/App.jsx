import React, { useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { MdDeleteForever } from "react-icons/md";
import './App.css';

const city = [
  { id: 1, name: "New York", value: false },
  { id: 2, name: "Las Vegas", value: false },
  { id: 3, name: "Los Angeles", value: false },
  { id: 4, name: "London", value: false },
];

function App() {
  const [citydata, setCityData] = useState(city);
  const [data, setData] = useState([]);
  const [cityName, setCityName] = useState("");
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, [cityName]);

  useEffect(() => {
    const id = setTimeout(() => {
      let new_arr = [...data];
      new_arr.map((e) => {
        if (e.cityName === search) {
          e.search = false;
        }
      });
      setData([...data]);
    }, 3000);
    return () => {
      clearTimeout(id);
    };
  }, [data]);

  async function fetchData() {
    if (cityName === "") {
      return;
    }
    const response = await fetch(
      `https://python3-dot-parul-arena-2.appspot.com/test?cityname=${cityName}`
    );
    const result = await response.json();
    let new_result = { ...result, cityName: cityName, search: false };
    setData([...data, new_result]);
  }

  function getWeather() {
    let new_arr = [...citydata];
    let find = new_arr.find((ele) => ele.value === false);
    if (find === undefined) {
      return;
    }
    setCityName(find.name);
    new_arr.map((e) => {
      if (e.id === find.id) {
        e.value = true;
      }
    });
    setCityData(new_arr);
  }

  function setBackground() {
    let new_arr = [...data];
    new_arr.map((e) => {
      if (e.cityName === search) {
        e.search = true;
      }
    });
    setData([...data]);
  }

  return (
    <div className="app-container">
      <div className="header">
        <h1>Abhinandan's Weather App</h1>
      </div>

      <div className="main-content">
        <div className="left-panel">
          <button className="get-weather-btn" onClick={getWeather}>
            Get Weather
          </button>
          <div className="city-list">
            <li className="city-list-header">City</li>
            {citydata.map((data, index) => (
              <li
                key={index}
                className={`city-item ${data.value ? "active-city" : ""}`}
              >
                {data.name}
              </li>
            ))}
          </div>
        </div>

        <div className="separator"></div>

        <div className="right-panel">
          <div className="search-bar">
            <input
              type="text"
              placeholder="City Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={setBackground} className="search-btn">
              <IoSearch className="icon" />
            </button>
          </div>
          <div className="weather-data">
            <New
              data={data}
              setData={setData}
              cityName={cityName}
              setCityData={setCityData}
              citydata={citydata}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

function New({ data, setData, setCityData, citydata }) {
  function del(index, city) {
    let new_arr = [...data];
    setData(
      new_arr.filter((_, ind) => ind !== index)
    );

    let new_data = [...citydata];
    new_data.map((ele) => {
      if (ele.name === city) {
        ele.value = false;
      }
    });
    setCityData(new_data);
  }

  return (
    <div className="weather-table-container">
      <table className="weather-table">
        <thead>
          <tr>
            <th>City</th>
            <th>Description</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Data age(hrs)</th>
            <th>
              <MdDeleteForever />
            </th>
          </tr>
        </thead>

        {data.map((e, index) => {
          let date = new Date(e.date_and_time);
          let duration = Date.now() - date;
          let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
          return (
            <tbody key={index}>
              <tr className={e.search ? "highlight-row" : ""}>
                <td>{e.cityName}</td>
                <td>{e.description}</td>
                <td>{e.temp_in_celsius}</td>
                <td>{e.pressure_in_hPa}</td>
                <td>{hours}</td>
                <td>
                  <button onClick={() => del(index, e.cityName)}>
                    <MdDeleteForever className="delete-icon" />
                  </button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>

      {data.length === 0 && <h1 className="no-data">No Data</h1>}
    </div>
  );
}
