import React, { useState, useEffect } from "react";
import Axios from "axios";

function SearchInput({api}) {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const res = await Axios.get(api);
      setData(res.data.articles);
    };
    getData();
  }, []);

  if (data.length === 0) {
    return (
      <div className="lds-spinner">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  }
  return (
    <div className="div-right-icons">
      <div className="search-input-div">
        <input
          type="text"
          placeholder="Recherche"
          className="input-search"
          id="search-input"
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      <div className="template_Container">
          {
            data
              .filter((val) => {
                if(searchTerm == ""){
                 
                }else if(val.title.toLowerCase().includes(searchTerm.toLowerCase())){
                  return val;
                }
              })
              .map((val) => {
                return(
                  <a href={val.url}>
                  <div className="template" key={val.id}>
                      <h3>{val.title}</h3>
                  </div>
                  </a> 
                )
              })
          }
        </div>
    </div>
  );
}
export default SearchInput;
