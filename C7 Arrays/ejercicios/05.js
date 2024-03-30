function agregarItemAlComienzoDelArray(array, elemento) {
  // Agrega el "elemento" al comienzo del arreglo recibido.
  // Retorna el arreglo.
  // Tu código: 
    let newArray = array.slice();
    newArray.unshift(elemento);
    return newArray;
}
module.exports = agregarItemAlComienzoDelArray;
