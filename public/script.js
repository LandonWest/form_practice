var windowLoaded = function() {
  var form = document.forms[0];
  // if (form) {
  //   form.onsubmit = formValidator;
  // }
};

// var formValidator = function() {
//  var ageInput = this.querySelector('input[name=age']);
//  var age = parseInt(ageInput.value);
//
//  if (age < 18) {
//    alert("You're too young to use the internet");
//    return false;
//  } else if (age > 100) {
//    alert("You're too old to use the internet");
//    return false;
//  } else if (age.toString() == "NaN") {
//    alert("You have to enter an actual number");
//    return false;
//  }
//
//    return true;
// };


window.onload = windowLoaded;
