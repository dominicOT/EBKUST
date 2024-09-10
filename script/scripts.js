const firebaseConfig = {
  apiKey: "AIzaSyC7Wc36v9OdLsv_XUu2XfNKvUHRkfkBsnQ",
  authDomain: "ebkust-sys.firebaseapp.com",
  databaseURL: "https://ebkust-sys-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ebkust-sys",
  storageBucket: "ebkust-sys.appspot.com",
  messagingSenderId: "934475456486",
  appId: "1:934475456486:web:67d1177b22d5e72a730027",
  measurementId: "G-9C26VG4Y8K"
};

firebase.initializeApp(firebaseConfig);

var regDB = firebase.database().ref('registrationForm');

document.getElementById('registrationForm').addEventListener('submit', submitForm);

function submitForm(event) {
  event.preventDefault();

  var id_num = document.getElementById('id_num').value.trim();
  var firstName = document.getElementById('firstName').value.trim();
  var middleName = document.getElementById('middleName').value.trim();
  var lastName = document.getElementById('lastName').value.trim();
  var phone = document.getElementById('phone').value.trim();
  var email = document.getElementById('email').value.trim();
  var address = document.getElementById('address').value.trim();
  var program = document.getElementById('program').value.trim();
  var department = document.getElementById('department').value;
  var year = document.getElementById('year').value;
  var semester = document.getElementById('semester').value;
  var fees = document.getElementById('fees').value;
  var parentFirstName = document.getElementById('parentFirstName').value.trim();
  var parentLastName = document.getElementById('parentLastName').value.trim();
  var parentPhone = document.getElementById('parentPhone').value.trim();
  var parentEmail = document.getElementById('parentEmail').value.trim();

  saveMessages(id_num, firstName, middleName, lastName, phone, email, address, department, program, year, semester, fees, parentFirstName, parentLastName, parentPhone, parentEmail);

  document.querySelector('.alert').style.display = 'block';

  setTimeout(() => {
      document.querySelector('.alert').style.display = 'none';
  }, 5000);

  redirectToSuccessPage();

  document.getElementById('registrationForm').reset();
}

function redirectToSuccessPage() {
  window.location.href = "success.html";
}

const saveMessages = (id_num, firstName, middleName, lastName, phone, email, address, department, program, year, semester, fees, parentFirstName, parentLastName, parentPhone, parentEmail) => {
  var newRegDB = regDB.push();
  newRegDB.set({
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
  });
};

const getElementValue = (id) => {
  return document.getElementById(id).value;
};
