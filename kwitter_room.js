// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDWOXmPQBL_yyv4Jw92y1B83f5YiFYv1Lo",
  authDomain: "project-94-f7455.firebaseapp.com",
  databaseURL: "https://project-94-f7455-default-rtdb.firebaseio.com",
  projectId: "project-94-f7455",
  storageBucket: "project-94-f7455.appspot.com",
  messagingSenderId: "565449485918",
  appId: "1:565449485918:web:3a86b2b6033d0c67a44ecf"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function addRoom() {
  user_name= document.getElementById("room_name").value;
  localStorage.setItem("room_name", user_name);  
  firebase.database().ref("/").child(user_name).update({
purpose : "adding user"
  });
}