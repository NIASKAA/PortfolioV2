require('dotenv').config();

let firebaseConfig = {

}

firebase.initialize(firebaseConfig);

let contactInfo = firebase.database().ref("infos");
document.querySelector(".emailForm").addEventListener("submit", submitEmailForm);

const submitEmailForm = (test) => {
    test.preventDefault();

    let email = document.querySelector(".email").value;
    let name = document.querySelector(".name").value;
    let message = document.querySelector(".message").value;

    saveInfo(email, name, message);

    document.querySelector(".emailForm").reset();

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