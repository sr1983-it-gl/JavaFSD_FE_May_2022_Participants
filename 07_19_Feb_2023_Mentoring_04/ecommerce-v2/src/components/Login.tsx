
import {Form, Button, Card, Alert} from "react-bootstrap";

import {FormEvent, useRef, useState} from "react";
import {userData} from "../user-credentials";

import {useNavigate} from "react-router-dom"

const Login = () => {

  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const navigate = useNavigate();

  const [error, setError] = useState('');

  const doLogin = (event : FormEvent<HTMLFormElement>) => {

    event.preventDefault();

    // a.b.c.d
    // a?.b?.c?.d
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    const matchedUserData = userData.users.find( (userData) => {

      if (userData.username === username && 
        userData.password === password){
          return true;
        }
    })

    if (matchedUserData){
      
      navigate("/shopping")
    }else{

      setError("Invalid Username/password supplied.")
    }
  }


  return (
    <div>

<Card style={{width: "30%"}}>
	
  <Form onSubmit={doLogin}>

   <Form.Group className="mb-3" controlId="formBasicUsername">
   <Form.Label>Username</Form.Label>
   <Form.Control type="text" placeholder="Enter username" ref={usernameRef}/>
   </Form.Group>

   <Form.Group className="mb-3" controlId="formBasicPassword">
   <Form.Label>Password</Form.Label>
   <Form.Control type="password" placeholder="Password" ref={passwordRef} />
   </Form.Group>

   <Button variant="primary" type="submit">
   Submit
   </Button>

   {
    error && (
      <Alert key="danger" variant="danger">
          {error}      
      </Alert>
    )
   }

 </Form>
</Card>

      </div>
  );
}

export {Login};