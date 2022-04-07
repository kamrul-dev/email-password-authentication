import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from './firebase.init';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';


const auth = getAuth(app);

function App() {
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
      // return;
    }
    setValidated(true);

    if (form.checkValidity() === true) {
      if (!/(?=.*?[#?!@$%^&*-])/.test(password)) {
        setError('password should contain at least one special character');
        return;
      }
      setError('');
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          console.error(error);
        })
    }
    event.preventDefault();
  }

  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <h2 className='text-info'> Please Register Yourself!</h2>
        <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email!
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid password !
            </Form.Control.Feedback>
          </Form.Group>
          <p className='text-danger'>{error}</p>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
