import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import KeyIcon from '@mui/icons-material/Key';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { Button, IconButton } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import axios from 'axios';
import BackBtn from '../BackBtn';
import { useNavigate } from 'react-router-dom';

function ReservationAdd() {
  const navigate = useNavigate();
    const item =  
        {
          "client_id": "232",
          "room": "45",
          "people": "2",
          "dateStart": "6.02.2023 ",
          "dateEnd": "14.02.2023 ",
        };

        function addReservation(){
      

          axios.post('/reservations/create', {
            client_id: Number(item.client_id),
            people: Number(item.people),
            room: Number(item.room),
            dateStart: item.dateEnd,
            dateEnd: item.dateEnd,
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

  return (
    <div className="widget-container">
        <div className="widget">
            <div className="name"><AccountCircleIcon/>John Doe</div>
            <div className="room"><KeyIcon/>Room No. <strong>{item.room}</strong></div>
            <div className="people"><PeopleAltIcon/><strong>{item.people}</strong> people</div>
            <div className="date"><CalendarMonthIcon/><div className="date-info"><span>From <strong>{item.dateStart}</strong></span><span>to<strong>{item.dateEnd}</strong></span></div></div>
        </div>
        <div>
            <Button  type="submit"
          style={{ marginTop: "32px" }}
          variant="contained"
          color="success" onClick={addReservation}>Accept</Button>
        </div>
        <BackBtn/>
    </div>
  )
}

export default ReservationAdd