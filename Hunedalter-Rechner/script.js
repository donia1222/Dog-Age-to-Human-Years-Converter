function calculate() {
  // Obtener los valores de la edad y tamaño del perro
  const age = document.getElementById("age").value;
  const size = document.getElementById("size").value;

  // Verificar si la edad del perro es mayor que 0
  if (age > 0) {
    // Calcular la edad del perro en años humanos
    let humanAge;
    if (size === "small") {
      humanAge = age * 5;
    } else if (size === "medium") {
      humanAge = age * 6;
    } else {
      humanAge = age * 7;
    }

    // Mostrar el resultado en la página
    const result = document.getElementById("result");
    result.textContent = `Das Alter des Hundes in Menschenjahren ist ${humanAge}`;
  } else {
    // Mostrar un mensaje de error si la edad del perro es 0 o negativa
    const result = document.getElementById("result");
    result.textContent = "La edad del perro debe ser mayor que 0";
  }
}
