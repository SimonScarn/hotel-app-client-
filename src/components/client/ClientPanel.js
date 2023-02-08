import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackBtn from "../BackBtn";
import BookIcon from '@mui/icons-material/Book';
import EditIcon from '@mui/icons-material/Edit';

function ClientPanel() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  function viewReservations(){
    if (user) {
      navigate('/reservations/view');
    } else {
      navigate('/panel/client/login');
    }
  }


  return (
    <div className="panel">
    <h2 className="panel-title">Client Panel</h2>
    <div className="panel-actions">
        <div className="panel-action" onClick={() => navigate('/reservations/create')}><BookIcon/><span>Add reservation</span></div>
        <div className="panel-action" onClick={viewReservations}><EditIcon/><span>My reservations</span></div>
      </div>
      <BackBtn/>
  </div>
  );
}

export default ClientPanel;
