import React, { useState } from "react";
import axios from "axios";
import { Link } from "@reach/router";
import '../style/style.css';


const Main = (props) => {
  const {articles, setArticles} = props;
  const [searchQ, setSearchQ] = useState("");
  const [lodaed, setLoaded] = useState(false);
  const apiToken = "dcf7da283849fb8a15da3a8d83fcb8a6";

  const handelSearch = (e) => {
    e.preventDefault();
    axios
      .get(`https://gnews.io/api/v4/search?q=${searchQ}&token=${apiToken}`)
      .then((res) => {
        setArticles(res.data.articles);
        setLoaded(true);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
     
      <form onSubmit={handelSearch}>
        <div className="active-pink-3 active-pink-4 mb-4">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onChange={(e) => setSearchQ(e.target.value)}/>
            <button className="btn-hover color-9" >Search</button>
        </div>
      </form>
      {lodaed &&
        articles.map((art, idx) => {
          return (
            <div key={idx}>
              <div >
                <p className= "title">{art.title}</p>
                <p className="desc"> {art.description}</p>
                <Link className="link" to={`/view/${idx}`}>View Details</Link>
              </div>
            </div>
          );
        })}
      <div>
       
      </div>
    </div>
  );
};

export default Main;
