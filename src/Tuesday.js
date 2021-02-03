import React from 'react';
import Date from './date';
import swal from 'sweetalert';

function Hero({handleLogout, email_id}) {

      swal("Good job!", "You clicked the button!", "success");

    return (
        <section className="hero">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <nav>
                <h2>Welcome <span>{email_id}</span></h2>
                <button onClick={handleLogout}>Logout</button>
            </nav><br/>
            <div className="body">
                <div className="header">
                    <h1>Your schedule for today</h1>
                    <Date />
                </div>
                <div className="content">
                    <h2>08:00 - 08:45</h2>
                    <h2 className="classT">Ciencias S.</h2>
                    <h2><a href="https://meet.google.com/uzq-pbgb-coc?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
                <div className="content">
                    <h2>09:00 - 09:45</h2>
                    <h2 className="classT">TOEFL</h2>
                    <h2><a href="https://meet.google.com/nmi-wcsw-keq?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
                <div className="content">
                    <h2>10:00 - 10:45</h2>
                    <h2 className="classT">Cálculo</h2>
                    <h2><a href="https://meet.google.com/ryd-khyn-eba?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
                <div className="content1">
                    <h2 className="rest">REST</h2>
                </div>
                <div className="content">
                    <h2>11:15 - 12:00</h2>
                    <h2 className="classT">Filosofía</h2>
                    <h2><a href="https://meet.google.com/ypg-rsbj-mqp?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
                <div className="content">
                    <h2>12:15 - 13:00</h2>
                    <h2 className="classT">FyV</h2>
                    <h2><a href="https://meet.google.com/cjb-byev-rra?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
                <div className="content">
                    <h2>13:15 - 14:00</h2>
                    <h2 className="classT">TSMII</h2>
                    <h2><a href="https://meet.google.com/ryd-khyn-eba?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
            </div>
        </section>
    )
}

export default Hero;