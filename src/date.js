import React from 'react';
import './App.css';
import Swal from "sweetalert2";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        time: new Date().toLocaleString()
      };
    }
    componentDidMount() {
      this.intervalID = setInterval(
        () => this.tick(),
        1000
      );
    }
    componentWillUnmount() {
      clearInterval(this.intervalID);
    }
    tick() {
      this.setState({
        time: new Date().toLocaleString()
      });
      Notification.requestPermission();
      if (this.state.time.includes(" 7:50:00")) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Your first class starts at 8:00AM",
            showConfirmButton: false,
            timer: 600000,
        }); if (Notification.permission === 'granted') {
          new Notification('Your ' + this.day() + ' Schedule', {
            body: 'Your first class starts at 8:00AM',
            icon: 'https://img.icons8.com/bubbles/2x/school.png'
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission();
        };
      } else if (this.state.time.includes(" 8:50:00")) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Your next class starts at 9:00AM",
            showConfirmButton: false,
            timer: 600000,
        }); if (Notification.permission === 'granted') {
          new Notification('Your ' + this.day() + ' Schedule', {
            body: 'Your next class starts at 9:00AM',
            icon: 'https://img.icons8.com/bubbles/2x/school.png'
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission();
        };
      } else if (this.state.time.includes(" 9:50:00")) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Your next class starts at 10:00AM",
            showConfirmButton: false,
            timer: 600000,
        }); if (Notification.permission === 'granted') {
          new Notification('Your ' + this.day() + ' Schedule', {
            body: 'Your next class starts at 10:00AM',
            icon: 'https://img.icons8.com/bubbles/2x/school.png'
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission();
        };
      } else if (this.state.time.includes(" 11:05:00")) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Your next class starts at 11:15AM",
            showConfirmButton: false,
            timer: 600000,
        }); if (Notification.permission === 'granted') {
          new Notification('Your ' + this.day() + ' Schedule', {
            body: 'Your next class starts at 11:15AM',
            icon: 'https://img.icons8.com/bubbles/2x/school.png'
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission();
        };
      } else if (this.state.time.includes(" 12:05:00")) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Your next class starts at 12:15PM",
            showConfirmButton: false,
            timer: 600000,
        }); if (Notification.permission === 'granted') {
          new Notification('Your ' + this.day() + ' Schedule', {
            body: 'Your next class starts at 12:15AM',
            icon: 'https://img.icons8.com/bubbles/2x/school.png'
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission();
        };
      } else if (this.state.time.includes(" 13:05:00")) {
        Swal.fire({
            position: "top-end",
            icon: "warning",
            title: "Your last class starts at 13:15PM",
            showConfirmButton: false,
            timer: 600000,
        }); if (Notification.permission === 'granted') {
          new Notification('Your ' + this.day() + ' Schedule', {
            body: 'Your last class starts at 13:15AM',
            icon: 'https://img.icons8.com/bubbles/2x/school.png'
          });
        } else if (Notification.permission !== 'denied') {
          Notification.requestPermission();
        };
      }
    }
    day() {
      var d = new Date();
      var dayWeek = d.getDay();
      if (dayWeek===1) {
        dayWeek = "Monday"
      } else if (dayWeek===2) {
        dayWeek = "Tuesday"
      } else if (dayWeek===3) {
        dayWeek = "Wednesday"
      } else if (dayWeek===4) {
        dayWeek = "Thursday"
      } else if (dayWeek===5) {
        dayWeek = "Friday"
      } else {
        dayWeek = "Weekend"
      }
      return dayWeek
    }
    render() {
      return (
        <p className="App-clock">
          {this.day()} {this.state.time}
        </p>
      );
    }
  }

export default Clock;