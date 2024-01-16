/*  ===========typing animation========= */
var typed = new Typed(".typing", {
    strings:["Web Designer", "Web Developer","Graphic Designer"],
    typeSpeed: 100,
    Backspeed:60,
    loop:true
})
const form = document.querySelector('.contact-form'); 
function sendEmail() {
    Email.send({
        Host: "smtp.elasticemail.com",
        Username: "myportfolio991@gmail.com",
        Password: "561AF4BE0C48DB7D4ADDCC6300C2A6214E32",
        To: 'myportfolio991@gmail.com',
        From: "myportfolio991@gmail.com",
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    sendEmail();
});