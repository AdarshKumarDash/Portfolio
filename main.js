const options = {
    bottom: '100px',
    right: '2px',
    left: 'unset',
    time: '0.3s',
    mixColor: '#fff',
    backgroundColor: '#fff',
    buttonColorDark: '#100f2c',
    buttonColorLight: '#fff',
    saveInCookies: true,
    label: '🌓',
    autoMatchOsTheme: true
}

const darkmode = new Darkmode(options);

darkmode.showWidget();

var firebaseConfig = {
    apiKey: "AIzaSyAR3NRNXjn8mu2sXB2e3quo2xMBR59Ch-M",
    authDomain: "portfolio-31b2e.firebaseapp.com",
    databaseURL: "https://portfolio-31b2e-default-rtdb.firebaseio.com",
    projectId: "portfolio-31b2e",
    storageBucket: "portfolio-31b2e.appspot.com",
    messagingSenderId: "658947476276",
    appId: "1:658947476276:web:6e176c24cb8a006e0cf361",
    measurementId: "G-CXS68MMSVC"
};
firebase.initializeApp(firebaseConfig);

function send() {
    name = document.getElementById("name").value;
    num = document.getElementById("number").value;
    mail = document.getElementById("email").value;
    subject = document.getElementById("subject").value;
    msg = document.getElementById("msg").value;
    firebase.database().ref("/").child(name).update({
        Purpose: "Connect"
    });
    firebase.database().ref(name).push({
        name: name,
        number: num,
        email: mail,
        subject: subject,
        message: msg
    });
    window.alert = "You have successfully sent your message!";
}

/**/