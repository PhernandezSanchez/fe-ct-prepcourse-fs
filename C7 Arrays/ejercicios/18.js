function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  if (resultadosTest.length === 0) {
    return 0;
  }

  const sumaNotas = resultadosTest.reduce((total, nota) => total + nota, 0);
  return sumaNotas / resultadosTest.length;
}

module.exports = promedioResultadosTest;