function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (y > x) {
    return y;
  } else {
    return x;
  }
}
module.exports = obtenerMayor;