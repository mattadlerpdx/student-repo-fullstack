/** Exercise 03 - Form **/

// Add your code here
function handlerSubmit(event) {
  console.group("Form Submission");
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const text = document.getElementById("message").value;

  if (name === "") {
    console.log("no name entered");
  } else {
    console.log("Name: ", name);
  }

  if (email === "") {
    console.log("no email enterd");
  } else {
    console.log("Email: ", email);
  }

  if (message === null) {
    console.log("Feedback: Not Entered");
  } else {
    console.log("Feedback: ", text);
  }

  if (document.getElementById("check1").checked) {
    console.log("yes, sign me up.");
  } else {
    console.log("no, thanks.");
  }
  console.groupEnd();
  event.preventDefault();
}
const form = document.getElementById("form");
form.addEventListener("submit", handlerSubmit);
