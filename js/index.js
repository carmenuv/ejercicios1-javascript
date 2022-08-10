function callMenu (){
  let nro_ejercicio = parseInt(prompt("Ingresa el número de ejercicio que quiere ejecutar: \r\n 1. Suma. \r\n 2. Promedio. \r\n 3. Calcular el área de un rectángulo. \r\n 4. Calcular el área de un triángulo. \r\n 5. Calcular el área de un círculo. \r\n 6. Calcular salario semanal. \r\n 7. Convertir metros a pulgadas. \r\n 8. Convertir soles a dólares. \r\n 9. Determina tu edad \r\n 10. Persona de menor edad. \r\n 11. Bono por antigüedad a empleados. \r\n 12. Salario anual con incremento. \r\n 13. Cantidad de aprobados y desaprobados. \r\n 14. Cantidad de focos. \r\n 15. ¿Puedes votar?"))

  if(isNaN(nro_ejercicio)){
    alert("Por favor, ingresa valores numéricos.")
  } else{
    menuEjercicios(nro_ejercicio)
  }
}

function menuEjercicios(nro_ejercicio){
  switch(nro_ejercicio){
    case 1:
      let valor1 = parseFloat(prompt("Ingresa el valor 1 a sumar:"));
      let valor2 = parseFloat(prompt("Ingresa el valor 2 a sumar:"));
      alert(ej1_sumarValores(valor1,valor2));
      break;

    case 2:
      let ex1 = parseFloat(prompt("Ingresa la primera nota"));  
      let ex2 = parseFloat(prompt("Ingresa la segunda nota"));  
      let ex3 = parseFloat(prompt("Ingresa la tercera nota"));  
      let ex4 = parseFloat(prompt("Ingresa la cuarta nota"));
      alert(ej2_calcularPromedio(ex1,ex2,ex3,ex4))
      break;
    
    case 3:
      let base_rect = parseFloat(prompt("Ingresa base de rectángulo"));
      let alt_rect = parseFloat(prompt("Ingresa altura de rectángulo"));
      alert(ej3_areaRectangulo(base_rect,alt_rect));
      break;
    
    case 4:
      let base_trian = parseFloat(prompt("Ingresa base de triángulo"));
      let alt_trian = parseFloat(prompt("Ingresa altura de triángulo"));
      alert(ej4_areaTriangulo(base_trian,alt_trian));
      break;
    
    case 5:
      let radio = parseFloat(prompt("Ingresa el radio del círculo"));
      alert(ej5_radio(radio));
      break;

    case 6:
      let horas = parseFloat(prompt("Ingresa las horas trabajadas"));
      let salario_hora = parseFloat(prompt("Ingrese el salario por hora"));
      alert(ej6_salario(horas,salario_hora));
      break;

    case 7:
      let metros = parseFloat(prompt("Ingresa la cantidad en metros a convertir"));
      alert(ej7_pulgadas(metros));
      break;

    case 8:
      let sol = parseFloat(prompt("Ingresa la cantidad de soles a convertir"));
      alert(ej8_dolar(sol));
      break;
    
    case 9:
      let anio = parseInt(prompt("Ingresa el año en que naciste"));
      alert(ej9_edad(anio));
      break;

    case 10:
      let nombre1 = prompt("Ingresa el nombre de la 1ra persona");
      let edad1 = parseInt(prompt("Ingresa la edad de la 1ra persona"));
      let nombre2 = prompt("Ingresa el nombre de la 2da persona");
      let edad2 = parseInt(prompt("Ingresa la edad de la 2da persona"));
      let nombre3 = prompt("Ingresa el nombre de la 3ra persona");
      let edad3 = parseInt(prompt("Ingresa la edad de la 3ra persona"));
      alert(ej10_menor(nombre1,edad1,nombre2,edad2,nombre3,edad3));
      break;

    case 11:
      let tiemposervicio = parseInt(prompt("Ingresa la cantidad de años que se encuentra trabajando en la empresa"));
      alert(ej11_bono(tiemposervicio));
    break;

    case 12:
      alert(ej12_sueldoanual());
      break;

    case 13:
      let cantalumnos = parseInt(prompt("Ingresa la cantidad de alumnos"));
      let notaalumno = 0;
      let notas = [10,11];
      for(contador = 0; contador < cantalumnos; contador++)
        {
            notaalumno = parseInt(prompt(`Ingresa la nota del alumno ${contador+1}`));
            notas[contador] = notaalumno;
        }
      alert(ej13_notasalumnos(notas));
      break;
      
      case 14:
        let cantfocos = parseInt(prompt("Ingresa la cantidad total de focos a contabilizar"));
        if(isNaN(cantfocos) || cantfocos <= 0)
            {
                alert("No ingresaste una cantidad de focos.");
                return;
            }

        let colorfoco = " ";
        let colores = ["blanco","azul"];
        for(contador = 0; contador < cantfocos; contador++)
        {
          colorfoco = prompt(`Escribe si el color del foco ${contador+1} es rojo, verde o blanco `);
          colorfoco.toLowerCase();
          if(colorfoco !== "rojo"){
            if(colorfoco !== "verde"){
              if(colorfoco !== "blanco"){
                alert("no ingresaste un color válido");
                  return
                }
                else {
                      colores[contador] = colorfoco;
                    }
              } else {
                      colores[contador] = colorfoco;
                    }
            }
            else
            {
              colores[contador] = colorfoco;
            }
        }
        alert(ej14_contarlote(colores));
        break;
        
      case 15:
        let voto = parseInt(prompt("Ingresa tu edad"));
        alert(ej15_edad(voto));
      break;

      default:
        alert("No ingresó una opción válida");
  }
}

function ej1_sumarValores(a,b){
  if(isNaN(a) || isNaN(b)){
    return "Por favor, ingresa un valor válido.";
  } else{
    return `La suma es: ${a+b}`;
  }
}

function ej2_calcularPromedio(ex1,ex2,ex3,ex4){
  if(isNaN(ex1) || isNaN(ex2) || isNaN(ex3) || isNaN(ex4)){
    return "Por favor, ingresa un valor válido.";
  } else {
    return `El promedio es: ${(ex1 + ex2 + ex3 + ex4) / 4}`;
  }
}

function ej3_areaRectangulo(a,b){
  if(isNaN(a) || isNaN(b)){
    return "Por favor, ingresa un valor válido.";
  } else {
    return `El área del rectángulo es: ${a*b}`;
  }
}

function ej4_areaTriangulo(a,b){
  if(isNaN(a) || isNaN(b)){
    return "Por favor, ingresa un valor válido.";
  } else {
    return `El área del triángulo es: ${(a*b) / 2}`;
  }
}

function ej5_radio(a){
  if(isNaN(a)){
    return "Por favor, ingresa un valor válido.";
  } else {
    return `El área del círculo es: ${(Math.PI * Math.pow(a, 2)).toFixed(2)}`
  }
}

function ej6_salario(a,b){
  if(isNaN(a) || isNaN(b)){
    return "Por favor, ingresa un valor válido.";
  } else {
    return `El salario semanal es: ${a*b}`;
  }
}

function ej7_pulgadas(a){
  if(isNaN(a)){
    return "Por favor, ingresa valor";
  }else{
    return `${a} metros son ${(a*39.37).toFixed(2)} pulgadas.`;
  }
}

function ej8_dolar (a){
  if(isNaN(a)){
    return "por favor, ingresa valor";
  }else{
    return `S/${a} son US$${(a/3.9).toFixed(2)} al 5 de agosto del 2022.`;
  }
}

function ej9_edad (a){
  if(isNaN(a) || a > (new Date().getFullYear())-18){
    return "Por favor, ingresa valor";
  } else {
    return `Tu edad es: ${new Date().getFullYear() - a}`
  }
}


function ej10_menor(nombre1,edad1,nombre2,edad2,nombre3,edad3){
  if(nombre1 !== typeof "" || isNaN(edad1) || nombre2 !== typeof "" || isNaN(edad2) || nombre3 !== typeof "" || isNaN(edad3)){
    return "Por favor, ingresa un valor válido"
  } else {
    if(edad1 < edad2){
      if(edad1 < edad3)
      {
        return `${nombre1} con ${edad1} años es la persona con menor edad.`
      }
      else
      {
        return `${nombre3} con ${edad3} años es la persona con menor edad.`
      }
    }
    else
    {
      if(edad2 < edad3)
      {
        return `${nombre2} con ${edad2} años es la persona con menor edad.`
      }
      else
      {
        return `${nombre3} con ${edad3} años es la persona con menor edad.`
      }
    }
  }
}

function ej11_bono(tiemposervicio){
  if(isNaN(tiemposervicio))
  {
      return "Por favor, ingresa un valor válido.";
  }
  else
  {
      if(tiemposervicio > 0)
      {
          tiemposervicio = parseInt(tiemposervicio);
          switch (tiemposervicio) 
          {
              case 1:
              return `El bono que le corresponde es de: $${100}`;

          case 2:
              return `El bono que le corresponde es de: $${200}`;

          case 3:
              return `El bono que le corresponde es de: $${300}`;

          case 4:
              return `El bono que le corresponde es de: $${400}`;

          case 5:
              return `El bono que le corresponde es de: $${500}`;

          default:
              return `El bono que le corresponde es de: $${1000}`;
  }
      }
      else
      {
          return "No ha cumplido con el tiempo necesario para el bono";
      }
  }  
}

function ej12_sueldoanual()
{
    let texto = " ";
    let sueldo = 1500;
    for(contador = 0; contador < 6 ; contador++)
    {
        sueldo *= 1.10;
        texto += `El salario del profesor en el año ${contador+1} es: $${sueldo.toFixed(2)} \r\n `;
    }
    return texto;
}

function ej13_notasalumnos(listanotas){

  if(isNaN(listanotas)){
    return "Por favor, ingresa un valor válido.";
  } else {
    let arraynotas = [1,2];
    arraynotas = listanotas;
    let desaprobados = 0;
    let aprobados = 0;
    let contador = 0;

    while(contador < arraynotas.length)
    {
      if(arraynotas[contador] < 10)
      {
          desaprobados += 1;
      }
      else
      {
          aprobados += 1;
      }
      contador++;
    }

    return `El número de desaprobados es ${desaprobados} y el número de aprobados es ${aprobados}`;
  }
}

function ej14_contarlote(colores){

    let arraydecolores = ["blanco","azul"];
    arraydecolores = colores;
    let verde = 0;
    let blanco = 0;
    let rojo = 0;
    let contador = 0;

    while(contador < arraydecolores.length){
      if(arraydecolores[contador].toString() == "rojo")
      {
          rojo += 1;
      }
      else{
          if(arraydecolores[contador].toString() == "verde"){
              verde += 1;
          } else {
              blanco += 1;
          }
      }
      contador++;
    }

    return `El cantidad de focos en color verde es ${verde}, en blanco es ${blanco} y en rojo es ${rojo}`;
    
  }


function ej15_edad (a){
  if(isNaN(a))
  {
      return "Por favor, ingresa un valor válido.";
  }
  else
  {
      if(a > 17)
      {
          return "Puedes votar en las próximas elecciones.";
      }
      else
      {
          return "Lo siento, aún no tienes la edad suficiente para votar."
      }
  }
}