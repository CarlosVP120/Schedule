import React from 'react';
import Date from './date';
import Swal from 'sweetalert2';

function Hero({handleLogout, email_id}) {

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
                <h2>Welcome <span>{email_id}</span></h2>
                <div className="headButtons">
                    <div className="links">
                        <a href='https://experiencia21.tec.mx' target="_blank" rel="noreferrer" className='canvas'>Canvas</a>
                        <a href='https://mitec.itesm.mx/' target="_blank" rel="noreferrer" className='mitec'>MiTec</a>
                    </div>
                <button onClick={handleLogout}>Logout</button>
                </div>
            </nav><br/>
            <div className="body">
                <div className="header">
                    <h1>Your schedule for today</h1>
                    <Date />
                </div>
                <div className="content">
                    <h2>07:00 - 11:00</h2>
                    <h2 className="classT">Modelación de la ingeniería y ciencias (Gpo 6)</h2>
                    <h2><a href="https://meet.google.com/uzq-pbgb-coc?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
                <div className="content1">
                    <h2 className="rest">REST</h2>
                </div>
                <div className="content">
                    <h2>13:00 - 14:50</h2>
                    <h2 className="classT">Modelación de la ingeniería y ciencias (Gpo 6)</h2>
                    <h2><a href="https://meet.google.com/uzq-pbgb-coc?authuser=1" target="_blank" rel="noreferrer">Join</a></h2>
                </div>
                
            </div>
        </section>
    )
}

export default Hero;