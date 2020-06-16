function togglePopup() {
  document.getElementById("popup-1").classList.toggle("active")
}

function checkParams() {
  var email = document.getElementById("email").value
  var password = document.getElementById("psw").value
  var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/

  if (reg.test(email) == false) {
    document.getElementById("submit").setAttribute("disabled", "disabled")
  } else {
    if (email.length > 4 && password.length > 9 && check12()) {
      document.getElementById("submit").removeAttribute("disabled")
    }
  }
}

function check12() {
  if (document.getElementById("check").checked) {
    return true
  } else {
    return false
  }
}

var myInput = document.getElementById("psw")
var letter = document.getElementById("letter")
var capital = document.getElementById("capital")
var number = document.getElementById("number")
var length = document.getElementById("length")

myInput.onfocus = function() {
  document.getElementById("message").style.display = "block"
}

myInput.onblur = function() {
  document.getElementById("message").style.display = "none"
}

myInput.onkeyup = function() {
  var lowerCaseLetters = /[a-z]/g
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid")
    letter.classList.add("valid")
  } else {
    letter.classList.remove("valid")
    letter.classList.add("invalid")
  }

  var upperCaseLetters = /[A-Z]/g
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid")
    capital.classList.add("valid")
  } else {
    capital.classList.remove("valid")
    capital.classList.add("invalid")
  }

  var numbers = /[0-9]/g
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid")
    number.classList.add("valid")
  } else {
    number.classList.remove("valid")
    number.classList.add("invalid")
  }

  if (myInput.value.length >= 8) {
    length.classList.remove("invalid")
    length.classList.add("valid")
  } else {
    length.classList.remove("valid")
    length.classList.add("invalid")
  }
}

document.addEventListener("DOMContentLoaded", function() {
  var submit = document.getElementById("submit")
  var hidden = document.getElementsByClassName("hidden")[0]
  var show = document.getElementsByClassName("show")[0]
  email.addEventListener("focus", (event) => {
    event.target.style.background = "pink"
  })
  submit.addEventListener("click", function(e) {
    e.preventDefault()
    hidden.classList.remove("hidden")
    show.classList.add("hidden")

    setTimeout(togglePopup, 3000)
  })
})
