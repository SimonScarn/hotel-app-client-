import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import BackBtn from "../BackBtn";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import * as moment from 'moment'



function ReservationEditForm() {
  const location = useLocation();
  const [reservation, setReservation] = useState();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());


  useEffect(() => {
    axios
      .get(`/reservations/get/${location.pathname.split("/")[3]}`)
      .then((res) => {
        setReservation(res.data);
      })
      .catch(err => console.log(err));
  }, []);

  function updateDB(e) {
   e.preventDefault();
   console.log(location.pathname.split("/")[3]);
    axios
      .put(`/reservations/update/${location.pathname.split("/")[3]}`,{
        room: reservation.room
      })
      .catch(err => console.log(err));
  }

  return (
    <>
      <div>ReservationEditForm</div>
      <Form onSubmit={updateDB}>
        <div className="form-wrapper">
          <div className="form-left">
            <Form.Group >
              <Form.Label>First name</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Last name</Form.Label>
              <Form.Control/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Room</Form.Label>
              <Form.Control value={reservation?.room} onChange={e => setReservation(values => ({
                ...values, room: e.target.value
              }))}/>
            </Form.Group>
            <Form.Group >
              <Form.Label>Number of people</Form.Label>
              <Form.Control value={reservation?.people} onChange={e => setReservation(values => ({
                ...values, room: e.target.people
              }))}/>
            </Form.Group>
          </div>
          <div className="form-right">
            <div className="form-row">
              <label>From</label>
              <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={moment().toDate()}
              />
            </div>
            <div className="form-row">
              <label>To</label>
              <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
              />
            </div>
          </div>
        </div>
        <Button 
        style={{marginTop: '20px'}}
        variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      <BackBtn />
    </>
  );
}

export default ReservationEditForm;
