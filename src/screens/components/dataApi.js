import React, { useState, useEffect } from "react";
import Axios from "axios";
import DataInformation from "../home_page/ArticlesSections";

function DataAPI({api}) {
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
    <div >
      <DataInformation data={data} />
    </div>
  );
  
}

export default DataAPI;
