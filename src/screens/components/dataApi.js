import React, { useState, useEffect } from "react";
import Axios from "axios";
import DataInformation from "../home_page/ArticlesSections";
import SearchInput from "./searchInput";
import TopSection from "./topSection";
import NavBar from "./navBarSection";

function DataAPI({ apiKey, apiEndpoint }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Axios.get(apiEndpoint, {
          headers: {
            "x-api-key": apiKey,
            "Content-Type": "application/json",
          },
        });
        setData(res.data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, [apiKey, apiEndpoint]);

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
    <div>
      <TopSection/>
      <SearchInput data={data}/>
      <NavBar/>
      <DataInformation data={data} />
    </div>
  );
}

export default DataAPI;
