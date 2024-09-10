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

  var studentInfo = {
      id_num: document.getElementById('id_num').value.trim(),
      firstName: document.getElementById('firstName').value.trim(),
      middleName: document.getElementById('middleName').value.trim(),
      lastName: document.getElementById('lastName').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      email: document.getElementById('email').value.trim(),
      address: document.getElementById('address').value.trim(),
  };

  var academicInfo = {
      department: document.getElementById('department').value,
      program: document.getElementById('program').value.trim(),
      year: document.getElementById('year').value,
      semester: document.getElementById('semester').value,
      feesStatus: document.getElementById('fees').value
  };

  var parentInfo = {
      firstName: document.getElementById('parentFirstName').value.trim(),
      lastName: document.getElementById('parentLastName').value.trim(),
      phone: document.getElementById('parentPhone').value.trim(),
      email: document.getElementById('parentEmail').value.trim()
  };


  saveMessages(studentInfo, academicInfo, parentInfo);


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

const saveMessages = (studentInfo, academicInfo, parentInfo) => {
  var newRegDB = regDB.push();
  newRegDB.set({
      studentInfo: studentInfo,
      academicInfo: academicInfo,
      parentInfo: parentInfo
  });
};
