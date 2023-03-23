var firebaseConfig = {
    apiKey: "AIzaSyBU2NeLFZY0cV9OS6cCBp967FW8kGQyHZM",
    authDomain: "iotbutton-5fe72.firebaseapp.com",
    databaseURL: "https://iotbutton-5fe72-default-rtdb.firebaseio.com",
    projectId: "iotbutton-5fe72",
    storageBucket: "iotbutton-5fe72.appspot.com",
    messagingSenderId: "760007007882",
    appId: "1:760007007882:web:4b40e11c8a413b34be1773",
    measurementId: "G-NP8EZM2C0B"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

$(document).ready(function(){
	var database = firebase.database();
	var Led1Status;
	var Led2Status;
	var Led3Status;
	var Led4Status;
	database.ref().on("value", function(snap){
		Led1Status = snap.val().Led1Status;
		Led2Status = snap.val().Led2Status;
		Led3Status = snap.val().Led3Status;
		Led4Status = snap.val().Led4Status;
		Led5Status = snap.val().Led5Status;
		if(Led1Status == "1"){
			document.getElementById("unact").style.display = "none";
			document.getElementById("act").style.display = "block";
		} else {
			document.getElementById("unact").style.display = "block";
			document.getElementById("act").style.display = "none";
		}
		if(Led2Status == "1"){
			document.getElementById("unact1").style.display = "none";
			document.getElementById("act1").style.display = "block";
		} else {
			document.getElementById("unact1").style.display = "block";
			document.getElementById("act1").style.display = "none";
		}
		if(Led3Status == "1"){
			document.getElementById("unact2").style.display = "none";
			document.getElementById("act2").style.display = "block";
		} else {
			document.getElementById("unact2").style.display = "block";
			document.getElementById("act2").style.display = "none";
		}
		if(Led4Status == "1"){
			document.getElementById("unact3").style.display = "none";
			document.getElementById("act3").style.display = "block";
		} else {
			document.getElementById("unact3").style.display = "block";
			document.getElementById("act3").style.display = "none";
		}
		if(Led5Status == "1"){
			document.getElementById("unact4").style.display = "none";
			document.getElementById("act4").style.display = "block";
		} else {
			document.getElementById("unact4").style.display = "block";
			document.getElementById("act4").style.display = "none";
		}
	});

	$(".toggle-btn").click(function(){
		var firebaseRef = firebase.database().ref().child("Led1Status");
		if(Led1Status == "1"){
			firebaseRef.set("0");
			Led1Status = "0";
		} else {
			firebaseRef.set("1");
			Led1Status = "1";
		}
	})
	$(".toggle-btn1").click(function(){
		var firebaseRef = firebase.database().ref().child("Led2Status");
		if(Led2Status == "1"){
			firebaseRef.set("0");
			Led2Status = "0";
		} else {
			firebaseRef.set("1");
			Led2Status = "1";
		}
	})
	$(".toggle-btn2").click(function(){
		var firebaseRef = firebase.database().ref().child("Led3Status");
		if(Led3Status == "1"){
			firebaseRef.set("0");
			Led3Status = "0";
		} else {
			firebaseRef.set("1");
			Led3Status = "1";
		}
	})
	$(".toggle-btn3").click(function(){
		var firebaseRef = firebase.database().ref().child("Led4Status");
		if(Led4Status == "1"){
			firebaseRef.set("0");
			Led4Status = "0";
		} else {
			firebaseRef.set("1");
			Led4Status = "1";
		}
	})
	$(".toggle-btn4").click(function(){
		var firebaseRef = firebase.database().ref().child("Led5Status");
		if(Led5Status == "1"){
			firebaseRef.set("0");
			Led5Status = "0";
		} else {
			firebaseRef.set("1");
			Led5Status = "1";
		}
	})
});