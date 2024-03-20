function esFechaValida ( fecha ) {
  //  La funcion recibe un argumento " fecha "
  //  Comprueba si este argumento corresponde a una fecha valida
  //  Si es asi; retorna true, sino retorna false
  //  Tu codigo
var hoy = new Date();
if (hoy >= fecha) return true;
else return false;
}