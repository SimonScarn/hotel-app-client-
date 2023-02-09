import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button, IconButton } from "@mui/material";
import BackBtn from "../BackBtn";
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";
import * as moment from 'moment';


function ReservationEdit() {
  const [reservationsDb, setReservationsDb] = useState([]);
  const navigate = useNavigate();
 

  useEffect(() => {
    axios.get('/reservations/get').then(res => {
      setReservationsDb(res.data);
    })
  }, [])
  
  function deleteReservation(id) {
    axios.delete(`/reservations/delete/${id}`, {data: id}).then(res => {
        console.log('deleted');
    });
    }

    function editReservation(id) {
        navigate(`/reservations/edit/${id}`);
    }


  return (
    <>
        <div className="table-container">
          <div className="table">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>id</th>
                  <th>Room</th>
                  <th>No. of people</th>
                  <th>From/to</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {reservationsDb?.map((item) => {
                  return (
                    <tr key={item._id}>
                      <td>{item._id}</td>
                      <td>{item.room}</td>
                      <td>{item.people}</td>
                      <td>
                        <td>{moment(item.dateStart, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('DD-MM-YYYY')}/{moment(item.dateEnd, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('DD-MM-YYYY')}</td>
                      </td>
                      <td style={{display: 'flex', gap: '10px', justifyContent: 'center'}}>
                        <Button
                        style={{
                          width: '80px'
                        }}
                        onClick={() => editReservation(item._id)}
                        type="submit" variant="contained" color="success">Edit</Button>
               {/*          <Button
                        style={{
                          width: '80px'
                        }}
                        onClick={() => deleteReservation(item._id)}
                        type="submit" variant="contained" color="warning">DELETE</Button> */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <hr />
        </div>
          <BackBtn />
    </>

  );
}

export default ReservationEdit;
