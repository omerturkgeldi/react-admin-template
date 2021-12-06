import React, { useEffect, useState } from "react";
import axios from "axios";

const baseURL = "https://gutendex.com/books/1998/";

const Profile = () => {
  const [post, setPost] = useState("");
  useEffect(() => {
    axios
      .get(baseURL)
      .then((res) => {
        console.log(res.data.formats["image/jpeg"]);
        setPost(res.data);
      })
      .catch(console.log("hata"));
  }, []);

  if (!post) return null;

  return (
    <div>
      <h2>{post.title}</h2>

      <div>
        <h4>{post.authors[0].name}</h4>
        <img src={post.formats["image/jpeg"]} />
        <h4>{post.authors[0].birth_year}</h4>
        <h4>{post.authors[0].death_year}</h4>
        <div>
          {post.subjects.map((text,index) => {
            return <h1 key={index}>{text}</h1>;
          })}
        </div>
      </div>

      <div className="card" style={{ width: "18rem" }}>
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
      </div>
    </div>
  );
};

export default Profile;
