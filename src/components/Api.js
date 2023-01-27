import { useEffect, useState } from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";

export default function Api() {
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  const [data, setData] = useState(
    JSON.parse(localStorage.getItem("data")) || null
  );

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
    <div>
      <div>
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <p>{value._id}</p>
            <p>{value.date}</p>
            <p>{value.header}</p>
            <p>{value.main_image}</p>
            <p>{value.text}</p>
            <p>{value.gallery}</p>
            <p>////////////////////////////////////////////</p>
          </div>
        ))}
      </div>
    </div>
  );
}
