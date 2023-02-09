import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import BackBtn from "../BackBtn";

function EmployeeLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function login(e){ 
        e.preventDefault();

        if (username == 'admin' && password == 'admin') {
            navigate('/panel/employee');
        } else {
            setError(true);
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  

  return (
    <div className="login login-employee">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Login</Form.Label>
          <Form.Control autoComplete="off" onChange={(e) => setUsername(e.target.value)} value={username} type="email" placeholder="Login" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control autoComplete="off" onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
        </Form.Group>
        <div className={`error ${error && 'active'}`}>wrong username/password</div>
        <Button onClick={login} variant="primary" type="submit">
        Login
      </Button>
      </Form>
    <BackBtn/>
    </div>
  );
}

export default EmployeeLogin;
