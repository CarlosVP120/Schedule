import firebase from "firebase";
  
var firebaseConfig = {
  apiKey: "AIzaSyCr3kzNaVG13l13u58iaMT-MQxIrKeK9IY",
  authDomain: "videochat-b3bea.firebaseapp.com",
  projectId: "videochat-b3bea",
  storageBucket: "videochat-b3bea.appspot.com",
  messagingSenderId: "126758824926",
  appId: "1:126758824926:web:bd337bbd05f5c5dc3bcb4f",
  measurementId: "G-G3XJNNFM73"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
