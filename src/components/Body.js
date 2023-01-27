import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Box from "@mui/material/Box";
import About from "./About";
import Contact from "./Contact";
import Article from "./Article";
import Stories from "./Stories";
import Home from "./Home";
import { flex } from "@mui/system";
import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function Layout() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || null
  );

  console.log(JSON.stringify(data));

  let username = "ignassimkunas";
  let password = "buldogas";

  useEffect(() => {
    getToken();
  }, []);

  // check if token exists. If true, then
  // check if it is expired. If true,
  // get another token, if not - get the data
  useEffect(() => {
    if (token) {
      const { exp } = jwtDecode(token);
      const currentTime = Date.now().valueOf() / 1000;
      if (currentTime > exp) {
        getToken();
      } else {
        getData();
      }
    }
  }, [token]);

  const getData = async () => {
    try {
      const res = await axios.get(
        "https://walrus-app-fxybp.ondigitalocean.app/posts/",
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      setData(res.data);
      //localStorage.setItem("data", JSON.stringify(res.data));
    } catch (err) {
      console.log("getData error");
      console.log(err);
    }
  };

  const getToken = () => {
    return fetch("https://walrus-app-fxybp.ondigitalocean.app/token", {
      method: "POST",
      headers: { "Content-type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        username: username,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((res) => setToken(res.access_token));
    //.then((res) => localStorage.setItem("token", res.access_token));
  };

  return (
    <Box className="Layout" sx={{ display: flex, height: "100%" }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/stories" element={<Stories  />} />
        <Route path="/stories/:article_id" element={<Article />} />
      </Routes>
    </Box>
  );
}
