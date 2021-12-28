import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "../components/Book";
import "../pages/bookshelf.css";
import BookshelfBook from "./BookshelfBook";
import { NavLink } from "react-router-dom";

const baseURL = "https://gutendex.com/books/1997/";
// const baseURL = "https://gutendex.com/books/";

const books = [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999];

// https://localhost:5001/api/books/user/{id}
// "https://www.gutenberg.org/cache/epub/1999/pg1999.cover.medium.jpg"
const Profile = () => {
  const [post, setPost] = useState("");
  const [books, setBooks] = useState("");
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.formats["image/jpeg"]);
        console.log(res.data);
        setPost(res.data);
      })
      .catch(console.log("hata"));
  }, []);

  useEffect(() => {
    axios
      .get("https://localhost:5001/api/books/user/" + parseInt(3))
      .then((res) => {
        console.log(res.data);

        var inputArray = res.data;
        var perChunk = 3;

        var result = inputArray.reduce((resultArray, item, index) => {
          const chunkIndex = Math.floor(index / perChunk);

          if (!resultArray[chunkIndex]) {
            resultArray[chunkIndex] = []; // start a new chunk
          }

          resultArray[chunkIndex].push(item);

          return resultArray;
        }, []);

        console.log(result);
        setBooks(result);
      })
      .catch((error) => alert("Hata!"));
  }, []);

  if (!post) return null;

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center">Kitaplığım</h1>
      {/* <h2>{post.title}</h2> */}

      {/* <div>
        <h4>{post.authors[0].name}</h4>
        <img src={post.formats["image/jpeg"]} />
        <h4>{post.authors[0].birth_year}</h4>
        <h4>{post.authors[0].death_year}</h4>
        <div>
          {post.subjects.map((text, index) => {
            return <h1 key={index}>{text}</h1>;
          })}
        </div>
      </div> */}

      {books &&
        books.map((book, index) => {
          var iii = 0;
          if (index % 3 == 0 && index != 0) {
            iii++;
            return (
              <div className="bookshelf">
                <div className="book-grid">
                  <ul id={`ulid${iii}`}></ul>
                </div>
                <div className="shelf-shadows"></div>
                <div className="shelf"></div>
              </div>
            );
          }
        })}

      {books &&
        books.map((bookArray, index) => {
          return (
            <div className="bookshelf">
              <div className="book-grid">
                <ul>
                  {bookArray &&
                    bookArray.map((book) => {
                      return (
                        <NavLink to={`/bookPage/${book.bookId}`}>
                          <li className="book">
                            <img
                              src={`https://www.gutenberg.org/cache/epub/${book.bookId}/pg${book.bookId}.cover.medium.jpg`}
                            />
                          </li>
                        </NavLink>
                      );
                    })}
                </ul>
              </div>
              <div className="shelf-shadows"></div>
              <div className="shelf"></div>
            </div>
          );
        })}

      {/* 
      <div className="bookshelf">
        <div className="book-grid">
          <ul>
            <li className="book">
              <img src={post.formats["image/jpeg"]} alt="" />
            </li>
            <li className="book">
              <img src={post.formats["image/jpeg"]} alt="" />
            </li>
            <li className="book">
              <img src={post.formats["image/jpeg"]} alt="" />
            </li>
          </ul>
        </div>
        <div className="shelf-shadows"></div>
        <div className="shelf"></div>
      </div> */}

      {/* 


      <div className="row">
        <div className="col">
          <Book title={post.title} img={post.formats["image/jpeg"]} authorName={post.authors[0].name} />
        </div>
        <div className="col">
          <Book title={post.title} img={post.formats["image/jpeg"]} authorName={post.authors[0].name} />
        </div>
        <div className="col">
          <Book title={post.title} img={post.formats["image/jpeg"]} authorName={post.authors[0].name} />
        </div>
      </div>

      <Book title={post.title} img={post.formats["image/jpeg"]} authorName={post.authors[0].name} />
      <Book title={post.title} img={post.formats["image/jpeg"]} authorName={post.authors[0].name} />
      <Book title={post.title} img={post.formats["image/jpeg"]} authorName={post.authors[0].name} /> */}

      {/* <div className="card" style={{ width: "18rem" }}>
        <img
          src={post.formats["image/jpeg"]}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text">{post.authors[0].name}</p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Profile;
