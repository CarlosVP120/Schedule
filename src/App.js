import './App.css';
import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import Monday from './planilla';
import Tuesday from "./Tuesday";
import Wednesday from "./Wednesday";
import Thursday from "./Thursday";
import Friday from "./Friday";

function App() {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);
  const email_id = user.email;


  const myFunction = () => {
    var d = new Date();
    var dayWeek = d.getDay();
    return dayWeek
  }

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handeLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case 'auth/invalid-email':
          case 'auth/user-disabled':
          case 'auth/user-not-found':
            setEmailError(err.message);
            break;
            case 'auth/wrong-password':
              setPasswordError(err.message);
              break;
        default:
            // do nothing
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch(err.code) {
          case 'auth/email-already-in-use':
          case 'auth/invalid-email':
            setEmailError(err.message);
            break;
          case 'auth/weak-password':
            setPasswordError(err.message);
            break;
        default:
              // do nothing
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user) {
        clearInputs();
        setUser(user);

      } else {
        setUser('');
      }
    });
  };

  useEffect(() => {
    authListener();
  })

  return (
    <div className="App">
      { user && myFunction()===1 ? 
        <Monday handleLogout={handleLogout} email_id={email_id}/>
      : user && myFunction()===2 ?
        <Tuesday handleLogout={handleLogout} email_id={email_id}/> 
      : user && myFunction()===3 ?
        <Wednesday handleLogout={handleLogout} email_id={email_id}/> 
      : user && myFunction()===4 ?
        <Thursday handleLogout={handleLogout} email_id={email_id}/>
      : user && myFunction()===5 ?
        <Friday handleLogout={handleLogout} email_id={email_id}/>
      : <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} handeLogin={handeLogin} handleSignup={handleSignup} hasAccount={hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError} />
      }
    </div>
  );
} 

 

export default App;
