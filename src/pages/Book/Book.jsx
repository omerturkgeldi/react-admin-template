import React, { useEffect, useState } from "react";
import axios from "axios";

const Book = () => {
  // https://www.gutenberg.org/cache/epub/1997/pg1997-images.html
  const baseURL = "https://gutendex.com/books/";

  console.log(window.location.href);
    var xxx = window.location.href.split("/");
    console.log("xxx[0]",xxx[0]);
    console.log("xxx[3]",xxx[4]);
    console.log("xxx",xxx[1])
    var bookId = xxx[4];

  const [books, setBooks] = useState("");
  useEffect(() => {

  



    axios
      .get(baseURL + bookId)
      .then((res) => {
        console.log(res.data.formats["text/plain"]);
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(console.log("hata"));
  }, []);

  return (
    <div className="container">
      {/* <h1>{bookId}</h1> */}

      <a target='_blank' >{books && books.formats["text/html"]}</a>

      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <img src={books && books.formats["image/jpeg"]} />
          </div>
          <div className="col-lg-8">
            <h1>{books && books.title}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Book;
