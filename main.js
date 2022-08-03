let myEmail = document.querySelector('#email');
let emailMsg = document.querySelector('#emailMsg');
function remove() {
     if (myEmail.value == "Enter Your Email") {
          myEmail.value = "";
     }
}

function check(inp) {
     if (myEmail.value.length < 3) {
          emailMsg.innerHTML = "Email Not Valid";
          emailMsg.style.color = "red"
          inp.focus()
     } else {
          emailMsg.innerHTML = ""
     }
}