function calculate() {
  var value1 = document.getElementById("age").value;
  var value2 = document.getElementById("weight").value;

  if (value1 < 5 || value1 > 21 || value2 < 15 || value2 > 40) {
    document.getElementById("output").innerHTML =
      "Please enter value in given range!!";
  }

  if (value1 >= 5 && value1 <= 7) {
    if (value2 >= 15 && value2 <= 20) {
      document.getElementById("output").innerHTML = "Your Weight is Perfect :)";
    } else if (value2 < 15) {
      document.getElementById("output").innerHTML = "Under Weight";
    } else if (value2 > 20) {
      document.getElementById("output").innerHTML = "Over Weight";
    }
  }

  if (value1 >= 8 && value1 <= 10) {
    if (value2 >= 21 && value2 <= 25) {
      document.getElementById("output").innerHTML = "Your Weight is Perfect :)";
    } else if (value2 < 21) {
      document.getElementById("output").innerHTML = "Under Weight";
    } else if (value2 > 25) {
      document.getElementById("output").innerHTML = "Over Weight";
    }
  }

  if (value1 >= 11 && value1 <= 15) {
    if (value2 >= 26 && value2 <= 30) {
      document.getElementById("output").innerHTML = "Your Weight is Perfect :)";
    } else if (value2 < 26) {
      document.getElementById("output").innerHTML = "Under Weight";
    } else if (value2 > 30) {
      document.getElementById("output").innerHTML = "Over Weight";
    }
  }

  if (value1 >= 16 && value1 <= 20) {
    if (value2 >= 31 && value2 <= 40) {
      document.getElementById("output").innerHTML = "Your Weight is Perfect :)";
    } else if (value2 < 31) {
      document.getElementById("output").innerHTML = "Under Weight";
    } else if (value2 > 40) {
      document.getElementById("output").innerHTML = "Over Weight";
    }
  }
}
