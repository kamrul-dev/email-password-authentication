import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase.init';
import { Button, Form } from 'react-bootstrap';


const auth = getAuth(app);

function App() {

  const handleEmailBlur = event => {
    console.log(event.target.value);
  }

  const handlePasswordBlur = event => {
    console.log(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log('form submitted');
    event.preventDefault();
  }

  return (
    <div>
      <div className="registration w-50 mx-auto mt-5">
        <h2 className='text-info'> Please Register Yourself!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="info" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
