import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function Detail() {
  const location = useLocation();
  const id = location.pathname.split("/").pop();
  const [data, setData] = useState();
  const getData = async () => {
    const result = await axios.get(`http://localhost:9999/products/${id}`);
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
        <tr key={data?.id}>
          <td>{data?._id}</td>
          <td>{data?.name}</td>
          <td>{data?.price}</td>
          <td>{data?.description}</td>
          <td>{data?.category}</td>
        </tr>
      </table>
    </div>
  );
}
