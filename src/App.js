import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login/Login";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useFormik } from "formik";

function App() {
  const [token, setToken] = useState();
  const [userId, setUserId] = useState();

  const { handleSubmit, handleChange, handleBlur, values, errors, touched } =
    useFormik({
      initialValues: {
        username: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        console.log(values.username);
        console.log(values.password);

        axios
          .get("https://localhost:5001/api/users")
          .then((res) => {
            console.log(res.data);
            console.log("valuesssss", values);

            res.data.map((user) => {
              console.log("user.username", user.username)
              console.log("values.username", values.username)
              console.log("user.password", user.password)
              console.log("values.password", values.password)
              if (user.username == values.username && String(user.password) == String(values.password)) {
                console.log(user.id)
                setUserId(user.id);
                setToken(true)
              }
              console.log(user);
            });

            console.log();
          })
          .catch(console.log("hata"));
      },
      // validationSchema: validations.foodValidations,
    });

  const [user, setUser] = useState("");
  // useEffect(() => {
  //   axios
  //     .get("https://localhost:5001/api/users")
  //     .then((res) => {
  //       console.log(res.data);
  //       console.log("valuesssss", values);

  //       res.data.map((user) => {
  //         console.log(user);
  //       });

  //       console.log();
  //     })
  //     .catch(console.log("hata"));
  // }, []);

  // setToken(true);

  if (!token) {
    return (
      <div className="d-lg-flex half">
        <div
          className="bg order-1 order-md-2"
          style={{
            backgroundImage:
              "url(https://cdn.pixabay.com/photo/2015/07/31/11/45/library-869061_960_720.jpg)",
          }}
        ></div>

        <div className="contents order-2 order-md-1">
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-md-7">
                <h3>
                  Hoşgeldiniz <strong>Gutenberg Bookshelf</strong>
                </h3>

                <form onSubmit={handleSubmit}>
                  <div className="form-group first">
                    <label htmlFor="username">Kullanıcı Adı</label>
                    <input
                      name="username"
                      type="text"
                      className="form-control"
                      placeholder="Kullanıcı Adı"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label htmlFor="password">Şifre</label>
                    <input
                      name="password"
                      type="password"
                      className="form-control"
                      placeholder="Şifre"
                      value={values.password}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                  </div>

                  <button
                    type="submit"
                    // onClick={() => myFunc()}
                    className="btn btn-danger btn-sm btn-raudus"
                  >
                    Giriş Yap
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router >
      <div className="App">
        <Sidebar />
        <div id="bodyId" style={{ marginTop: "130px" }}>
          <Layout />
        </div>
      </div>
    </Router>
  );
}
export default App;
