import React, { useState, useEffect } from "react";
import axios from "axios";
import { success } from 'tata-js/src/tata'


const Dashboard = () => {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("charles%20dickens");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get("https://gutendex.com/books/?search=" + search)
      .then((res) => {
        setBooks(res.data.results);
        console.log(res.data);
      })
      .catch((error) => alert("Hata!"));
  }, [search]);


  const getButtonId = (e) => {
    var params = { bookId: parseInt(e.currentTarget.id) , userId : 3, currentPage: 0};
    axios
      .post("https://localhost:5001/api/books", params)
      .then((res) => {
          success('Başarılı', 'Kitap, kitaplığınıza başarıyla eklendi')
      })
      .catch(console.log("hata"));
  };

  return (
    <div>
      <h2>Ana Sayfa</h2>

      <br></br>

      <h4>Kitap ara</h4>

      <form>
        <div className="row">
          <div className="col-md-12">
            <div className="mb-3">
              <input
                onChange={handleChange}
                type="text"
                className="form-control"
                name="value"
              />
            </div>
          </div>
        </div>
      </form>

      <div className="col-md-12 d-flex flex-column justify-content-center">
        {books &&
          books.map((book) => {
            return (
              //     <div key={book.id} className="card" style={{ width: "18rem" }}>
              //   <img
              //     src={book.formats["image/jpeg"]}
              //     className="card-img-top"
              //     alt="..."
              //   />
              //   <div className="card-body">
              //     <h5 className="card-title">{book.title}</h5>
              //     {/* <p className="card-text">{book.authors[0].name}</p> */}
              //     <a href="#" className="btn btn-primary">
              //       Go somewhere
              //     </a>
              //   </div>
              // </div>

              // <div key={book.id} className="card mb-3" style={{maxWidth:'540px'}}>
              //   <img
              //     src={book.formats["image/jpeg"]}
              //     className="img-fluid rounded-start"
              //     alt="..."
              //   />
              // </div>

              <div
                key={book.id}
                className="card mb-3 d-flex justify-content-center"
                style={{ maxWidth: "540px" }}
              >
                <div className="row g-0">
                  <div className="col-md-4">
                    <img
                      src={book.formats["image/jpeg"]}
                      className="img-fluid rounded-start"
                      alt="..."
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{book.title}</h5>
                      <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </p>
                      <p className="card-text">
                        <button
                          id={book.id}
                          onClick={getButtonId}
                          type="button"
                          class="btn btn-info"
                        >
                          Kitaplığıma Ekle
                        </button>
                        <small className="text-muted"></small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Dashboard;
