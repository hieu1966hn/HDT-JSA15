// store.
function store() {
  let name = document.getElementById("name");
  let pw = document.getElementById("pw");

  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;

  let numbers = /[0-9]/g;



  if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password")
  }
  else if (name.value.length == 0) {
    alert("Please fill your email");
  }
  else if (pw.value.length == 0) {
    alert("Please fill your password")
  }
  else if (pw.value.length < 8) {
    alert("Password Must be at least 8 characters long")
  }
  else if (!pw.value.match(lowerCaseLetters)) {
    alert("Please add 1 lowercase letter");
  }
  else if (!pw.value.match(upperCaseLetters)) {
    alert("Please add 1 uppercase letter");
  }
  else if (!pw.value.match(numbers)) {
    alert("Please add 1 number")
  }
  else {
    alert("nothing")
  }


}