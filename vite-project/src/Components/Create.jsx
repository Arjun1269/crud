import React, { useState } from "react";
import Login from "../assets/Image/Login.png";
import axios from "axios";
import "./Create.css";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://6497e61b9543ce0f49e17b96.mockapi.io/Crud-Project", {
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
      <div className="opening">
        <img src={Login} alt="Login" />

        <div className="forms">
          <form action="/action_page.php">
            <label htmlFor="fname">First name:</label>
            <br />
            <br />
            <input
              className="firstname"
              type="text"
              name="fname"
              placeholder="Your name.."
              onChange={(e) => setName(e.target.value)}
            />
            <br /> <br />
            <label htmlFor="email">Email: </label> <br /> <br />
            <input
              className="emails"
              type="email"
              name="email"
              placeholder="Your Email.."
              onChange={(e) => setEmail(e.target.value)}
            />
            <br /> <br />
            <input
              className="button"
              type="submit"
              value="Submit"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default Create;
