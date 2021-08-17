import React from 'react'
import Welcome from 'react-welcome-page'


function Login(props) {

    const { email, setEmail, password, setPassword, handeLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            handeLogin();
        }
      }

    return (
        <section className="login">
            <Welcome 
        loopDuration={2500}
        data={[
          {
            image: 'https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png',
        imageAnimation: 'fadeInUp',
        textAnimation: 'fadeInUp',
        text: 'Developed by Carlos Veryan',
        backgroundColor: '#000',
        textColor: '#FFF'
        },
        ]}
      />
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="loginContainer">
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                <div class="square"></div>
                {hasAccount ? (
                        <>
                            <h1 className="title">Login</h1>
                        </>
                    ) : (
                        <>
                            <h1 className="title">Login</h1> {/*eliminar esto*/}
                            {/*<h1 className="title">Sign Up</h1>*/}
                        </> 
                    )}
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} onKeyPress={handleKeyPress}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handeLogin}>Login</button>
                            {/* <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)} >Sign up</span></p> */}
                        </> 
                    ) : (
                        <>
                            <button onClick={handeLogin}>Login</button> {/*eliminar esto*/}
                            {/*<button onClick={handleSignup}>Sign Up</button> */}
                            {/*<p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)} >Login</span></p> */}
                       </>  
                           
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
