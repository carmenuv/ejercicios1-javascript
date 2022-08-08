//Implementar un algoritmo que reciba 2 argumentos y los sume, el resultado se deberá imprimir en pantalla.
function addition(a,b){
  return a + b
}
document.write("La suma es: " + addition(8,6))

//Registrar el ingreso de notas de 4 examenes y calcular el promedio de estos.
let note1 = prompt("Ingrese 1ra nota");
let note2 = prompt("Ingrese 2da nota");
let note3 = prompt("Ingrese 3ra nota");
let note4 = prompt("Ingrese 4ta nota");

average = (+note1 + +note2 + +note3 + +note4) / 4;
console.log("El promedio es:", average)

//Calcular el área de un rectángulo
function rectangleArea(a,b){
  return a * b
}
console.log("El área del rectángulo es:", rectangleArea(8,5))

//Calcular el área de un triángulo
function triangleArea(a,b){
  return a * b / 2
}
console.log("El área del triángulo es:", triangleArea(5,3))

//Calcular el área de una circunferencia
const pi = 3.1416;

let r = parseFloat(prompt("Ingrese el radio de la circunferencia"));
let a = pi*r*r;

console.log("El área de la circunferencia es:", a)

//Determinar el sueldo semanal de un trabajador basándose en sus horas trabajadas y su salario de hora hombre
let hours = parseFloat(prompt("Ingrese las horas trabajadas"));
let salaryH = parseFloat(prompt("Ingrese salario por hora"));

function weeklySalary (){
  payment = hours * salaryH
  console.log("El sueldo semanal es:", payment)
}

weeklySalary();

//Una modista, para realizar sus prendas de vestir, encarga las telas al extranjero. Para cada pedido, tiene que proporcionar las medidas de la tela en pulgadas, pero ella generalmente las tiene en metros. Realice un algoritmo para ayudar a resolver el problema, determinando cuantas pulgadas debe pedir con base en los metros que requiere. (1 pulgada = 0.0254 m).
let meters = parseFloat(prompt("Ingrese cantidad en metros"));

function convertToInch(){
  metersToInch = 0.0254 * meters
  console.log("La cantidad en pulgadas que debe solicitar es:", metersToInch);
}

convertToInch();

//Una empresa importadora desea determinar cuántos dólares puede adquirir con equis cantidad de dinero peruano.
let sol = parseFloat(prompt("Ingrese la cantidad de soles a convertir"));

function convertToDollar(){
  solToDollar = sol / 3.90 
  console.log("La cantidad en dólares que vas a adquirir es", solToDollar);
}

convertToDollar();
