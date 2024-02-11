export const userColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img || "https://i.ibb.co/MBtjqXQ/no-avatar.gif"} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },

  {
    field: "country",
    headerName: "Country",
    width: 100,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 100,
  },
];

export const hotelColumns = [
  { field: "_id", headerName: "ID", width: 250 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
  },
  {
    field: "type",
    headerName: "Type",
    width: 100,
  },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "city",
    headerName: "City",
    width: 100,
  },
];

export const roomColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  {
    field: "title",
    headerName: "Title",
    width: 230,
  },
  {
    field: "desc",
    headerName: "Description",
    width: 200,
  },
  {
    field: "price",
    headerName: "Price",
    width: 100,
  },
  {
    field: "maxPeople",
    headerName: "Max People",
    width: 100,
  },
];
export const confirmbColumns = [
  { field: "_id", headerName: "ID", width: 70 },
  
  {
    field: "bid",
    headerName: "Bookind Id",
    width: 230,
  },

  {
    field: "sdate",
    headerName: "To Date",
    width: 150,
  },
  {
    field: "edate",
    headerName: "From Date",
    width: 150,
  },{
    field: "un",
    headerName: "User Name",
    width: 150,
  },{
    field: "ue",
    headerName: "Email",
    width: 150,
  },{
    field: "rn",
    headerName: "Mobile number",
    width: 150,
  }
  ,{
    field: "hn",
    headerName: "type of booking",
    width: 150,
  }
  ,{
    field: "transactionid",
    headerName: "Transaction Id",
    width: 150,
  }
  
  
];