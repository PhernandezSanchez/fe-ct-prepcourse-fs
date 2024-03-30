function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  return array.reduce((count, element) => {
    if (element > 10) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
}

module.exports = contarElementosMayoresA10;
