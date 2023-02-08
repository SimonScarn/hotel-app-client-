import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Input from "@mui/material/Input";
import { Button } from "@mui/material";
import BackBtn from "../BackBtn";
import Slider from "@mui/material/Slider";
import * as moment from 'moment'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const marks = [
  {
    value: 1,
    label: 1,
    rooms: [1, 2, 3, 4],
  },
  {
    value: 2,
    label: 2,
    rooms: [5, 6, 7, 8],
  },
  {
    value: 3,
    label: 3,
    rooms: [9, 10, 11, 12],
  },
  {
    value: 4,
    label: 4,
    rooms: [13, 14, 15, 16],
  },
  {
    value: 5,
    label: 5,
    rooms: [17, 18, 19, 20],
  },
];

function valuetext(value) {
  return `${value}`;
}

function ReservationCreate() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [peopleNum, setPeopleNum] = useState(1);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [unavailableRooms, setUnavailableRooms] = useState([]);

  function submitForm(e) {
    e.preventDefault();
    //! move to employee
    axios.post('/reservations/create', {
      client_id: 1,
      people: Number(peopleNum),
      room: Number(selectedRoom),
      dateStart: startDate,
      dateEnd: endDate
    })
    .then(function (response) {
      console.log(response);
    })
    .then(() => {
      navigate('/panel/employee');
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(() => {
    axios.get('/reservations/get').then(res => {
        setUnavailableRooms(() => res.data.map(e => e.room));
    })

  }, [])
  


  return (
    <div className="form-create">
      <form onSubmit={submitForm}>
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
        <div className="form-row">
          <label>Number of people</label>
          <Slider
            aria-label="Always visible"
            defaultValue={1}
            getAriaValueText={valuetext}
            step={1}
            marks={marks}
            min={1}
            max={5}
            onChange={(e) => setPeopleNum(e.target.value)}
          />
        </div>
        <div className="form-row">
          <label>Available rooms</label>
          <div className="rooms-container">
          
              <div className="rooms">
                {marks[peopleNum-1].rooms.map((room,id) => {
                  return <div className={`room room-available ${room == selectedRoom && 'room-selected'} ${unavailableRooms.includes(room) && 'room-unavailable'}`}
                    onClick={() => setSelectedRoom(room)}
                  key={id}>{room}.</div>
                } )}
              </div>;
          
          </div>
        </div>
        <Button
          type="submit"
          style={{ marginTop: "32px" }}
          variant="contained"
          color="success"
        >
          Submit
        </Button>
      </form>
      <BackBtn />
    </div>
  );
}

export default ReservationCreate;
