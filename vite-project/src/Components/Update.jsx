import React, { useEffect, useState } from "react";
import "./Update.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Update = () => {
  const [id, setId] = useState("0");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"));
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`https://6497e61b9543ce0f49e17b96.mockapi.io/Crud-Project/${id}`, {
        name: name,
        email: email,
      })
      .then(() => {
        navigate("/Clicking");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="formsupdate">
        <form action="/action_page.php">
          <label htmlFor="fname">First name:</label>
          <br />
          <br />
          <input
            className="firstname"
            type="text"
            name="fname"
            placeholder="Your name.."
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /> <br />
          <label htmlFor="email">Email: </label> <br /> <br />
          <input
            className="emails"
            type="email"
            name="email"
            placeholder="Your Email.."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /> <br />
          <input
            className="button"
            type="submit"
            value="Update"
            onClick={handleUpdate}
          />
        </form>
      </div>
    </>
  );
};

export default Update;
