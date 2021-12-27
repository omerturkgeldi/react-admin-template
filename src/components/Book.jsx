import React, { useEffect, useState } from "react";
import axios from "axios";


const baseURL = "https://www.gutenberg.org/cache/epub/1997/pg1997-images.html";
const Book = (props) => {


  const [book, setBook] = useState("");
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.formats["image/jpeg"]);
        setBook(res.data);
      })
      .catch(console.log("hata"));
  }, []);

  if (!book) return null;




  return (
    <div className="card" style={{ width: "18rem" }}>

    </div>
  )
}

export default Book
