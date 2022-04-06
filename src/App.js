import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { getAuth } from 'firebase/auth';
import app from './firebase.init';


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
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <input onBlur={handleEmailBlur} type="email" name="" id="" />
        <br />
        <input onBlur={handlePasswordBlur} type="password" name="" id="" />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default App;
