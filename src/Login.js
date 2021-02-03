import React from 'react'

function Login(props) {
    const { email, setEmail, password, setPassword, handeLogin, handleSignup, hasAccount, setHasAccount, emailError, passwordError } = props;

    return (
        <section className="login">
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
                            <h1 className="title">Sign Up</h1>
                        </>
                    )}
                <label>Username</label>
                <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
                <p className="errorMsg">{emailError}</p>
                <label>Password</label>
                <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
                <p className="errorMsg">{passwordError}</p>
                <div className="btnContainer">
                    {hasAccount ? (
                        <>
                            <button onClick={handeLogin}>Sign In</button>
                            <p>Don't have an account ? <span onClick={() => setHasAccount(!hasAccount)} >Sign up</span></p>
                        </>
                    ) : (
                        <>
                            <button onClick={handleSignup}>Sign Up</button>
                            <p>Have an account ? <span onClick={() => setHasAccount(!hasAccount)} >Login</span></p>
                        </>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Login;
