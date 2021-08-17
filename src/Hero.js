import Date from './date';
import React, {useState} from 'react';


function Hero({handleLogout, email_id}) {
    const [room, setRoom] = useState('');

    return (
        <section className="hero">
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <nav>
                <h2>Welcome <span></span></h2>
                <button>Logout</button>
            </nav><br/>
            <div className="center">
                <input type="checkbox" id="click" />
                <label for="click" class="click-me">Click Me</label>
                <div className="contentlog">
                <div className="top">
                    <h2 className="succlog">Login Succesful</h2>
                </div>
                <label for="click" className="fas fa-check">✔</label>
                <p className="logedin">Welcome!, you are now available to check your schedule.</p>
                <div className="line"></div>
                <label for="click" className="close-btn">Close</label>
                </div>
            </div>
            <div className="body">
                <div className="header">
                    <h1>Your schedule for today</h1>
                    <Date />
                </div>
                <div className="roomcont">
                <div className="room" onClick={() => setRoom(38)}>
                    <h1>Room 38</h1>
                </div>
                <div className="room"  onClick={() => setRoom(39)}>
                    <h1>Room 39</h1>
                </div></div>
                {room===38 ?
                        <> 
                <h1 className="roomname">Room 38</h1>   
                <div className="content">
                    <h2>8:00 - 8:45</h2>
                    <h2 className="classT">Ownership</h2>
                    <h2><a href="https://meet.google.com/ytk-gwnu-wpu?authuser=0">Join</a></h2>
                </div>
                <div className="content">
                    <h2>9:00 - 8:45</h2>
                    <h2 className="classT">Work ethics</h2>
                    <h2><a href="https://meet.google.com/ung-ytan-wcr?hs=122&authuser=1">Join</a></h2>
                </div>
                <div className="content">
                    <h2>10:00 - 8:45</h2>
                    <h2 className="classT">Physics</h2>
                    <h2><a href="https://meet.google.com/ycc-jehz-fjd?authuser=0">Join</a></h2>
                </div>
                <div className="content1">
                    <h2 className="rest">REST SOME TIME</h2>
                </div>
                <div className="content">
                    <h2>11:15 - 12:00</h2>
                    <h2 className="classT">Math</h2>
                    <h2><a href="https://meet.google.com/ryd-khyn-eba?authuser=0">Join</a></h2>
                </div>
                <div className="content">
                    <h2>12:15 - 1:00</h2>
                    <h2 className="classT">TaV</h2>
                    <h2><a href="https://meet.google.com/cjb-byev-rra?authuser=0">Join</a></h2>
                </div>
                <div className="content">
                    <h2>1:15 - 2:00</h2>
                    <h2 className="classT">Calculus</h2>
                    <h2><a href="https://meet.google.com/ryd-khyn-eba?authuser=0">Join</a></h2>
                </div>
                        </>
                     : room===39 ?
                        <>
                            <h1 className="roomname">Room 39</h1>   
                <div className="content">
                    <h2>8:00 - 8:45</h2>
                    <h2 className="classT">Ownership</h2>
                    <h2><a href="https://meet.google.com/ytk-gwnu-wpu?authuser=0">Join</a></h2>
                </div>
                <div className="content">
                    <h2>9:00 - 8:45</h2>
                    <h2 className="classT">Work ethics</h2>
                    <h2><a href="https://meet.google.com/ung-ytan-wcr?hs=122&authuser=1">Join</a></h2>
                </div>
                <div className="content">
                    <h2>10:00 - 8:45</h2>
                    <h2 className="classT">Physics</h2>
                    <h2><a href="https://meet.google.com/ycc-jehz-fjd?authuser=0">Join</a></h2>
                </div>
                <div className="content1">
                    <h2 className="rest">REST SOME TIME</h2>
                </div>
                <div className="content">
                    <h2>11:15 - 12:00</h2>
                    <h2 className="classT">Math</h2>
                    <h2><a href="https://meet.google.com/ryd-khyn-eba?authuser=0">Join</a></h2>
                </div>
                <div className="content">
                    <h2>12:15 - 1:00</h2>
                    <h2 className="classT">TaV</h2>
                    <h2><a href="https://meet.google.com/cjb-byev-rra?authuser=0">Join</a></h2>
                </div>
                <div className="content">
                    <h2>1:15 - 2:00</h2>
                    <h2 className="classT">Calculus</h2>
                    <h2><a href="https://meet.google.com/ryd-khyn-eba?authuser=0">Join</a></h2>
                </div>
                        </>
                     : <h1 className="roomname">Please select a room</h1>   }
            </div>
        </section>
    )
}

export default Hero;
