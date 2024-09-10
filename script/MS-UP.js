
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

console.log("Script ready");

const firebaseConfig = {
    apiKey: "AIzaSyBH3g4_qjCwfrWsbMsLNq2r2bcplhMiWPE",
    authDomain: "ebkust-semester-registration.firebaseapp.com",
    databaseURL: "https://ebkust-semester-registration-default-rtdb.firebaseio.com",
    projectId: "ebkust-semester-registration",
    storageBucket: "ebkust-semester-registration.appspot.com",
    messagingSenderId: "953606997349",
    appId: "1:953606997349:web:199fe4f144929fe66ccd8c",
    measurementId: "G-V67VFHQNY3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);
const regDB = ref(database, 'registrationForm');

document.getElementById('registrationForm').addEventListener('submit', submitForm);


function redirectToSuccessPage() {
    window.location.href = "success.html";
}


function submitForm(event) {
    event.preventDefault();

    // Get form data
    const id_num = document.getElementById('id_num').value.trim();
    const firstName = document.getElementById('firstName').value.trim();
    const middleName = document.getElementById('middleName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const email = document.getElementById('email').value.trim();
    const address = document.getElementById('address').value.trim();
    const department = document.getElementById('department').value;
    const program = document.getElementById('program').value;
    const year = document.getElementById('year').value;
    const semester = document.getElementById('semester').value;
    const fees = document.getElementById('fees').value;
    const parentFirstName = document.getElementById('parentFirstName').value.trim();
    const parentLastName = document.getElementById('parentLastName').value.trim();
    const parentPhone = document.getElementById('parentPhone').value.trim();
    const parentEmail = document.getElementById('parentEmail').value.trim();

    saveMessages(id_num, firstName, middleName, lastName, phone, email, address, department, program, year, semester, fees, parentFirstName, parentLastName, parentPhone, parentEmail);

    // Enable alert
    document.querySelector('.alert').style.display = 'block';

    // Remove the alert after 5 seconds
    setTimeout(() => {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);

    redirectToSuccessPage();

    // Reset form
    document.getElementById('registrationForm').reset();
}


function saveMessages(id_num, firstName, middleName, lastName, phone, email, address, department, program, year, semester, fees, parentFirstName, parentLastName, parentPhone, parentEmail) {
    const newRegDB = push(regDB);

    set(newRegDB, {
        id_num: id_num,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        phone: phone,
        email: email,
        address: address,
        department: department,
        program: program,
        year: year,
        semester: semester,
        fees: fees,
        parentFirstName: parentFirstName,
        parentLastName: parentLastName,
        parentPhone: parentPhone,
        parentEmail: parentEmail
    }).catch(error => {
        console.error("Error saving message to database: ", error);
    });
}
