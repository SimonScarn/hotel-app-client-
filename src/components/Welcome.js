import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Welcome() {
    const navigate = useNavigate();
  return (
    <div className="welcome">
        <h2>Choose your role</h2>
        <div className="roles">
            <div className="role" onClick={() => navigate('/panel/client')}>Client</div>
            <div className="role" onClick={() => navigate('/panel/employee/login')}>Employee</div>
        </div>
    </div>
  )
}

export default Welcome