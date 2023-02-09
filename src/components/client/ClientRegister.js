import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import BackBtn from "../BackBtn";
import { uuid } from 'uuidv4';

function ClientRegister() {
    const [username, setUsername] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    function login(e){ 
        e.preventDefault();
       

        if (password !== passwordConfirm) {
            setError(true);
        }
        axios.post('/register', {
            login: username,
            password: password,
            firstName: 'Jeff',
            lastName: 'Bezos',
            clientId: uuid()
        })
        .then((res) => {
            console.log('u', res.data)
        })

     /*    if (username == 'admin' && password == 'admin') {
            navigate('/panel/employee');
        } else {
            setError(true);
        } */
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
    <div className="login register-client">
      <Form>
        <Form.Group className="mb-3" >
          <Form.Label>Email</Form.Label>
          <Form.Control onChange={(e) => setUsername(e.target.value)} value={username} type="email" placeholder="Login" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password</Form.Label>
          <Form.Control onChange={(e) => setPassword(e.target.value)} value={password} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" >
          <Form.Label>Password confirm</Form.Label>
          <Form.Control onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm} type="password" placeholder="Password confirm" />
        </Form.Group>
        <div className={`error ${error && 'active'}`}>error</div>
        <Button onClick={login} variant="success" type="submit">
        Register
      </Button>
      </Form>
    <BackBtn/>
    </div>
  );
}

export default ClientRegister;
