import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
export default function Home() {
  const [data, setData] = useState();
  const getData = async () => {
    const result = await axios.get("http://localhost:9999/products");
    setData(result?.data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log("🚀 ========= result:", data);
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Category</th>
        </tr>
        {data?.map((item) => (
          <tr key={item?._id}>
            <td>
              <Link to={`detail/${item?._id}`}>{item?._id}</Link>
            </td>
            <td>{item?.name}</td>
            <td>{item?.price}</td>
            <td>{item?.description}</td>
            <td>{item?.category}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
