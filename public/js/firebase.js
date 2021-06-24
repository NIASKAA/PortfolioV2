const firebaseConfig = {
    apiKey: "AIzaSyBGEAr8IYNHtROyi1Bz-jyStsdeAhm_QWI",
    authDomain: "portfolio-ce7d7.firebaseapp.com",
    databaseURL: "https://portfolio-ce7d7-default-rtdb.firebaseio.com",
    projectId: "portfolio-ce7d7",
    storageBucket: "portfolio-ce7d7.appspot.com",
    messagingSenderId: "228109022513",
    appId: "1:228109022513:web:4dc6b6d9a99134c857ac10",
    measurementId: "G-GMC4KYPSFR"
  };


firebase.initializeApp(firebaseConfig);

const submitEmailForm = (test) => {
    test.preventDefault();

    let email = document.querySelector(".email").value;
    let name = document.querySelector(".name").value;
    let message = document.querySelector(".message").value;

    saveInfo(email, name, message);

    document.querySelector(".contact-form").reset();

    sendEmail(email, name, message);
}

const saveInfo = (email, name, message) => {
    let newContactInfo = contactInfo.push();

    newContactInfo.set({
        email: email,
        name: name,
        message: message
    });

    retrieveData();
}

const retrieveData = () => {
    let ref = firebase.database().ref("infos");
    ref.on("value", getData);
}

const getData = (data) => {
    let info = data.val();
    let keys = Object.keys(info);

    for(let i = 0; i < keys.length; i++) {
        let infoData = keys[i];
        let email = info[infoData].email;
        let name = info[infoData].name;
        let message = info[infoData].message;
        console.log(email, name, message);
    }
}

const sendEmail = (email, name, message) => {
    email.send({
        Host: "smtp.gmail.com",
        Username: "bingoverload@gmail.com",
        Passowrd: "pnbhhotqsolhsthp",
        To: "mkman751@yahoo.com",
        From: "bingoverlaod@gmail.com",
        Subject: `${name} <br/> Email: ${email} <br/> Message: ${message}`
    })
    .then((message) => alert("Mail has been sent"));
}

let contactInfo = firebase.database().ref("infos");

async function submitForm () {
    console.log("Working");
    let submit = document.querySelector(".contact-form");
    submit.addEventListener("submit", submitEmailForm);
};

submitForm();
