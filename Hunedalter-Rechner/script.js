function calculate() {
  // Get the values of the dog's age and size
  const age = document.getElementById("age").value;
  const size = document.getElementById("size").value;

  // Check if the dog's age is greater than 0
  if (age > 0) {
    // Calculate the dog's age in human years
    let humanAge;
    if (size === "small") {
      humanAge = age * 5;
    } else if (size === "medium") {
      humanAge = age * 6;
    } else {
      humanAge = age * 7;
    }

    // Display the result on the page
    const result = document.getElementById("result");
    result.textContent = `The dog's age in human years is ${humanAge}`;
  } else {
    // Display an error message if the dog's age is 0 or negative
    const result = document.getElementById("result");
    result.textContent = "The dog's age must be greater than 0";
  }
}
