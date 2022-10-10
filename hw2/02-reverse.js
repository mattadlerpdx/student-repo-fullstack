/** Exercise 02 - Reverse **/

// Add your code here
document.querySelector("#reverse").onclick = function () {
  //get main so we can append to main div
  var main = document.querySelector("main");
  //get input value, use parseFloat bc we only want float if negative number
  var number = parseFloat(document.getElementById("input").value);

  //stringify so we can reverse it
  number = number.toString();

  //get size of number to check correct input
  if (number.length === 8) {
    const numberElement = document.createElement("numberElement");
    //setAttribute(name,value)
    numberElement.setAttribute("id", "number");

    //reverse our number
    let number = number.split("");
    number = number.reverse();
    number = number.join("");

    main.append(numberElement);
    document.getElementById("number").style.color = "green";
    document.getElementById("number").innerHTML = number;
    console.log(number);
  } else {
    const numberElement = document.createElement("numberElement");
    numberElement.setAttribute("id", "number");
    main.append(numberElement);
    document.getElementById("number").style.color = "red";
    document.getElementById("number").innerHTML =
      "error, must be 8 digits long";
  }
};
