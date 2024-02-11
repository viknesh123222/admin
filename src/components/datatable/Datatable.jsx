import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";
import PropTypes from 'prop-types';
import { userColumns } from "../../datatablesource"; 

import "./datatable.scss"; 

const Datatable = ({ columns }) => {
  const location = useLocation();
  const path = location.pathname.split("/")[1];
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/${path}`);
        setList(response.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [path]);

  

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/${path}/${id}`);
      setList((prevList) => prevList.filter((item) => item._id !== id));
    } catch (err) {
      console.error("Error deleting item:", err);
    }
  };
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);


  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 200,
    renderCell: (params) => (
      <div className="cellAction">
        {/* <Link to={`/users/${params.row._id}`} style={{ textDecoration: "none" }}>
          <div className="viewButton">View</div>
        </Link> */}
        <div
          className="deleteButton"
          onClick={() => handleDelete(params.row._id)}
        >
          Delete
        </div>
      </div>
    ),
  };

  return (
    <div className="datatable">
      <div className="datatableTitle">
        {path}
        <Link to={`/${path}/new`} className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat([actionColumn])}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};


Datatable.propTypes = {
  columns: PropTypes.array.isRequired,
};

export default Datatable;
