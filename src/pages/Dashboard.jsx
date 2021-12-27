import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {

  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("charles");

  const handleChange = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };

  useEffect(() => {
    axios
      .get(
        'https://gutendex.com/books/?search='+ search
      )
      .then((res) => {
        setBooks(res.data);
        console.log(res.data);
      })
      .catch((error) => alert("Hata!"));
  }, []);




  // useEffect(() => {
  //   axios.get(`https://gutendex.com/books/?search=dickens%20great`)
  //     .then((response) => {
  //       console.log(response.data);
  //       setAPIData(response.data);
  //     })
  // }, [])

  return (
    <div>
      <h2>Dashboard</h2>

      <br></br>

      <h4>Search books...</h4>

      <form>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="mb-3">
                <input
                  onChange={handleChange}
                  type="text"
                  className="form-control"
                  name="value"
                //   value={searchValue.value}
                //   onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
      </form>



      {books.map((coin) => {
        return (
          <div>
            {coin}
          </div>
        );
      })}
    






    </div>
  );
};

export default Dashboard;
