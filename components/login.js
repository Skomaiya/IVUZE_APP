let hospital = document.querySelector(".hospital-type");
let patient = document.querySelector(".patient-form");

function remHospital() {
    hospital.style.display = "none";
    patient.style.marginTop = "-150px";
}

function addHospital() {
    hospital.style.display = "block";
    patient.style.marginTop = "-20px";
}



const scriptURL = 'https://script.google.com/macros/s/AKfycbz05j6HesrxaFEaCVx6OXx70w8WtQ5nSTAhy27bl0qFKvccHl6BGQDzxyvY_ULDt0-k/exec';
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message sent successfully"
        setTimeout(function(){
            msg.innerHTML =""
        }, 5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))
});

const hamburger = document.querySelector('.open');
const close = document.querySelector('.close');

close.onclick = () => {
    document.querySelector('.nav-menu ul').classList.remove('active');
    close.style.display = 'none';
    hamburger.style.display = 'block';
}

hamburger.onclick = () => {
    document.querySelector('.nav-menu ul').classList.toggle('active');
    close.style.display = 'block';
    hamburger.style.display = 'none';
};




