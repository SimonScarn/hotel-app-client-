import React from 'react'
import { useNavigate } from "react-router-dom";
import { IconButton } from '@mui/material';
import PageviewIcon from '@mui/icons-material/Pageview';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import BackBtn from '../BackBtn';
import EditIcon from '@mui/icons-material/Edit';

function EmployeePanel() {
  const navigate = useNavigate();

  return (
    <div className="panel">
      <h2 className="panel-title">Employee Panel</h2>
      <div className="panel-actions">
          <div className="panel-action" onClick={() => navigate('/reservations/all')}><PageviewIcon/><span>View reservations</span></div>
          <div className="panel-action" onClick={() => navigate('/reservations/edit')}><EditIcon/><span>Edit reservation</span></div>
        </div>
        <BackBtn/>
    </div>
  )
}

export default EmployeePanel