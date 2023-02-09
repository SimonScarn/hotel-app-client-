import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import BackBtn from "../BackBtn";

function ClientLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function login(e){ 
        e.preventDefault();
      console.log(username, password)
        axios
        .post(`/login`, {
          login: username,
          password: password
        })
        .then((res) =>  {
          if (res.data.isUser) {
            navigate('/panel/employee');
          } else {

          }
        })

    
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
    <div className="login login-client">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Login</Form.Label>
          <Form.Control onChange={(e) => setUsername(e.target.value)} value={username} type="email" placeholder="Login" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
        </Form.Group>
        <div className={`error ${error && 'active'}`}>wrong username/password</div>
        <Button onClick={login} variant="primary" type="submit">
        Login
      </Button>
      </Form>
      <div className="register">
            <span>Don't have an account?</span>
            <a onClick={() => navigate('/panel/client/register')}>
                <strong>Register</strong>
            </a>
        </div>

    <BackBtn/>
    </div>
  );
}

export default ClientLogin;
