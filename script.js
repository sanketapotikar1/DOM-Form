let entry = document.getElementById("entry");
entry.addEventListener("click", displayDetails);

let row = 1;

function displayDetails() {
  let fname = document.getElementById("fname").value;
  let lname = document.getElementById("lname").value;
  let age = document.getElementById("age").value;
  let grade = document.getElementById("grade").value;
  let State = document.getElementById("State").value;
  let Country = document.getElementById("Country").value;

  if (!fname || !age || !grade || !lname || !State || !Country) {
    alert("Please fill all the boxes");
    return;
  }

  let display = document.getElementById("display");
  let newRow = display.insertRow(row);
  let cell1 = newRow.insertCell(0);
  let cell2 = newRow.insertCell(1);
  let cell3 = newRow.insertCell(2);
  let cell4 = newRow.insertCell(3);
  let cell5 = newRow.insertCell(4);
  let cell6 = newRow.insertCell(5);

  cell1.innerHTML = fname;
  cell2.innerHTML = lname;
  cell3.innerHTML = age;
  cell4.innerHTML = grade;
  cell5.innerHTML = State;
  cell6.innerHTML = Country;
  row++;
}
