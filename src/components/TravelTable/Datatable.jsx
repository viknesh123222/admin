import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow, 
  Paper 
} from '@mui/material';

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('/confirmb/gettravel/travel');
          if (Array.isArray(response.data)) {
            setData(response.data);
            setLoading(false);
          } else {
            // Handle cases where the response is not an array
            console.error('Invalid data format received from API');
            console.log('Received data:', JSON.stringify(response.data));
            setLoading(false);
          }
        } catch (error) {
          console.error('Error fetching data: ', error);
          setLoading(false);
          // Handle error states (e.g., show error message)
        }
      };
  
      fetchData();
    }, []); 

  return (
    <div>
    
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Booking ID</TableCell>
                <TableCell>From Date</TableCell>
                <TableCell>To Date</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Room Number</TableCell>
                <TableCell>Hotel Name</TableCell>
                {/* Add more table headers based on your data */}
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.bid}</TableCell>
                  <TableCell>{item.sdate}</TableCell>
                  <TableCell>{item.edate}</TableCell>
                  <TableCell>{item.un}</TableCell>
                  <TableCell>{item.ue}</TableCell>
                  <TableCell>{item.rn}</TableCell>
                  <TableCell>{item.hn}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
     
    </div>
  );
};

export default DataTable;
