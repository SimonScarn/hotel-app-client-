import React, { useEffect, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import{ useNavigate } from "react-router-dom";
import BackBtn from "../BackBtn";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import Form from 'react-bootstrap/Form';
import * as moment from 'moment';

function ReservationsList() {
const navigate = useNavigate();
const [reservationsDb, setReservationsDb] = useState([]);

useEffect(() => {
  axios.get('/reservations/get').then(res => {
    console.log(res.data)
    setReservationsDb(res.data);
  })
}, [])



  function sortRecords(value) {
    axios.
      get(`/reservations/get/sort/${value}`)
      .then(res => {
        setReservationsDb(res.data);
      })
      .catch(err => console.log(err))
  }
 
  return (
    <>
      <div className="table-container">
        <h2>Reservation List</h2>
        <Form.Select onChange={e => sortRecords(e.target.value)}>
          <option>Sort by</option>
          <option value="client-asc">Client lastname (ascending)</option>
          <option value="client-desc">Client lastname (descending)</option>
          <option value="created-asc">Date created (ascending)</option>
          <option value="created-desc">Date created (descending)</option>
        </Form.Select>
        <hr/>
        <div className="table">
          <Table striped bordered hover>
          <thead>
            <tr>
              <th>Client lastname</th>
              <th>Room</th>
              <th>No. of people</th>
              <th>From/to</th>
              <th>Created at</th>
            </tr>
          </thead>
          <tbody>
          {reservationsDb?.map(item => {
            return (<tr key={item._id}>
              <td>{item.client_id}</td>
              <td>{item.room}</td>
              <td>{item.people}</td>
              <td>{moment(item.dateStart, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('DD-MM-YYYY')}/{moment(item.dateEnd, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('DD-MM-YYYY')}</td>
              <td>{moment(item.createdAt, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('HH:mm:ss DD-MM-YYYY')}</td>
            </tr>)
          })}
          </tbody>
              </Table>
        </div>
        <hr/>
      </div>
        <BackBtn/>
    </>

  );
}

export default ReservationsList;
