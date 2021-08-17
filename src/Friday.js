import React from "react";
import Time from "./date";
import Swal from "sweetalert2";

function Hero({ handleLogout, email_id }) {

  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Login Successful',
    showConfirmButton: false,
    timer: 1500
  })
  
  return (
    <section className="hero">
      <div className="color"></div>
      <div className="color"></div>
      <div className="color"></div>
      <nav>
        <h2>
          Welcome <span>{email_id}</span>
        </h2>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <br />
      <div className="body">
        <div className="header">
          <h1>Your schedule for today</h1>
          <Time />
        </div>
        <div className="content">
          <h2>08:00 - 08:45</h2>
          <h2 className="classT">Física</h2>
          <h2>
            <a
              href="https://meet.google.com/frc-gvej-tnb?authuser=1"
              target="_blank"
              rel="noreferrer"
            >
              Join
            </a>
          </h2>
        </div>
        <div className="content">
          <h2>09:00 - 09:45</h2>
          <h2 className="classT">FyV</h2>
          <h2>
            <a
              href="https://meet.google.com/cjb-byev-rra?authuser=1"
              target="_blank"
              rel="noreferrer"
            >
              Join
            </a>
          </h2>
        </div>
        <div className="content">
          <h2>10:00 - 10:45</h2>
          <h2 className="classT">Filosofía</h2>
          <h2>
            <a
              href="https://meet.google.com/ypg-rsbj-mqp?authuser=1"
              target="_blank"
              rel="noreferrer"
            >
              Join
            </a>
          </h2>
        </div>
        <div className="content1">
          <h2 className="rest">REST</h2>
        </div>
        <div className="content">
          <h2>11:15 - 12:00</h2>
          <h2 className="classT">Ecología</h2>
          <h2>
            <a
              href="https://meet.google.com/vdv-tcws-sff?authuser=1"
              target="_blank"
              rel="noreferrer"
            >
              Join
            </a>
          </h2>
        </div>
        <div className="content">
          <h2>12:15 - 13:00</h2>
          <h2 className="classT">Ética</h2>
          <h2>
            <a
              href="https://meet.google.com/gca-dbna-giq?authuser=1"
              target="_blank"
              rel="noreferrer"
            >
              Join
            </a>
          </h2>
        </div>
        <div className="content">
          <h2>13:15 - 14:00</h2>
          <h2 className="classT">Cálculo</h2>
          <h2>
            <a
              href="https://meet.google.com/ryd-khyn-eba?authuser=1"
              target="_blank"
              rel="noreferrer"
            >
              Join
            </a>
          </h2>
        </div>
      </div>
    </section>
  );
}

export default Hero;
