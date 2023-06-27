import React, { useEffect, useState } from "react";
import "./Clicking.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Clicking = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://6497e61b9543ce0f49e17b96.mockapi.io/Crud-Project")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  const settolocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://6497e61b9543ce0f49e17b96.mockapi.io/Crud-Project/${id}`)
      .then(() => {
        getData();
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((eachData) => {
            return (
              <tr key={eachData.id}>
                <td>{eachData.id}</td>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to="/Update">
                    <button
                      onClick={() =>
                        settolocalStorage(
                          eachData.id,
                          eachData.name,
                          eachData.email
                        )
                      }
                    >
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button onClick={() => handleDelete(eachData.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
export default Clicking;
