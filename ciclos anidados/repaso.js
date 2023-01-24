/*//ciclo for 
//paso1 empieza,       paso2 final ciclo,        paso3 intervalos 
for( var x = 1; x<=30; x++){
   document.write("el valor es "+x+"<br>")
}



//ciclo while 
//paso 1
var y = 1;
//paso 2
while( y <= 30){
    document.write("el valor es"+y+"<br>")
//paso3
y++
}*/

//punto 2
/*
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";

//paso 1      //paso 2           //paso 3
for( var x= 1; pregunta !="si"; x++){
  //volver a digitar otro numero 
  numero = parseInt(prompt("Digite un numero"));
  //guardar los numeros digtados
  guardar=guardar + numero +",";
  //volver apreguntar
  pregunta = prompt("Deseas parar el ciclo");
}
//Mostrar los numeros digitados
document.write("los numeros son:"+guardar);*/
//while
/*
var x = 1
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";
while(pregunta !="si"){
    numero = parseInt(prompt("Digite un numero"))
    guardar=guardar + numero + ",";
    pregunta = prompt("Deseas parar el ciclo")
}
document.write("los numeros son:" +guardar);
*/
//punto 3
/*
var x = 30
while (x >=0) {
    document.write(x + "<br>");
    x = x-1;
}
for (i = 30; i >= 0; i--){
    document.write(i + "<br>")
}*/
//punto4
/*
var x = 1
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";
while(pregunta !="fin"){
    numero = parseInt(prompt("Digite un numero"))
    guardar=guardar + numero + ",";
    pregunta = prompt("Deseas parar el ciclo")
}
document.write("los numeros son:" +guardar);
//for
var pregunta = prompt("Deseas parar el ciclo");
var guardar = "";

for( var x= 1; pregunta !="fin"; x++){
  numero = parseInt(prompt("Digite un numero"));
  guardar=guardar + numero +",";
  pregunta = prompt("Deseas parar el ciclo");
}
document.write("los numeros son:"+guardar);
*/
//punto5
/*
var trabajadores = parseInt(prompt("ingrese cantidad de trabajadores"))
var acumulador = 0;
var x = 1;
while( x <= trabajadores ){
    var profesion = prompt("ingrese la profesion");
    document.write("La profesion es " +profesion+"<br>")
    acumulador=acumulador+profesion;
    x++;
    var totaltrabajadores =acumulador
}
document.write("la cantidad total trabajadores es  " +trabajadores+ " <br>")
document.write("Total con profesion es  " +  totaltrabajadores + "<br>")
*/
//ciclos anidados 
//ciclo for
 /*
document.write("series loteria <br>");
for(x=0; x < 3; x++){
    document.write("numeros de serie " +x+ " <br>");
    for(y=0; y < 5; y++){
        document.write("#" +y+ "<br>")
    }
}
*/
//ciclo while anidado
/*
var x =1;
document.write("series loteria "+"<br>");
while(x <= 3){
       document.write("numeros de serie " +x+ "<br>");
       var y = 1;
       while(y<= 5){
        document.write("#"+y+"<br>");
        y++
       }
       x++
}*/


//punto 8 taller anidados ***
/*
var altura = parseInt(prompt("Digite un numero "))
var x = 1;
while(x <= altura){
    var y = 1
    while (x >= y){
        document.write("*")
        y++
    }
    document.write("<br>")
    x++
}
var altura= parseInt(prompt("digite un numero"))
for(x=1; x <= altura; x++){
    document.write("<br>");
    for(y=1; x >= y; y++){
        document.write("*")
    }
}
*/

/*
//punto 9 
var altura = parseInt(prompt("digite un numero"));
var x = 1;
while (x <= altura){
    var y = altura;
    while (y >= x){
        document.write("*");
        y--;
    }
    document.write("<br>");
    x++;
}
//for 
var altura= parseInt(prompt("digite un numero"))
for(x=1; x <= altura; x++){
    document.write("<br>");
    for(y=altura; y >= x; y--){
        document.write("*")
    }
}*/
//punto 10 ventas 
/*
var compra = prompt("¿cuantos productos desea comprar?");
var con = 1;
var totalcompra = 0;+
var npro=0;
while ( compra != "no"){
    document.write("<p> factura " +con+ "</p>");
    document.write("<p> Numero de productos" +compra+ "<p>")
    var con2= 1;
    var totalpro = 0;
    while(con2 <= parseInt(compra)){
        var valorpro = parseInt(prompt("digite el valor del producto " +con2))
        document.write("<p> el valor del producto " +con2+ " : " +valorpro+ "</p>")
        totalpro= totalpro+valorpro;
        con2++
        npro++
    }
    totalcompra = totalcompra+totalpro;
    document.write("<p> total de la compra:  " +totalpro+ "</p>");
    compra = prompt("¿cuantos productos desea comprar?");
    con++
}
document.write("<p> numero de compras en el dia: " +npro+ "</p>");
document.write("<p> total de compras en el dia: " +totalcompra+ "</p>")
*/
//punto 10 ciclo for 
var compra = prompt("¿cuantos productos desea comprar?");
var totalcompra = 0;
var npro = 0;
for (var con=1; compra != "no"; con++){
    document.write("<p> factura " +con+ "</p>");
    document.write("<p> Numero de productos" +compra+ "<p>")
    var totalpro = 0;
    for( var con2=1; con2<= parseInt(compra); con2++){
        var valorpro = parseInt(prompt("digite el valor del producto" +con2))
        document.write("<p> el valor del producto " +con2+ " : " +valorpro+ "</p>")
        totalpro= totalpro+valorpro;
        npro++;
    }
    totalcompra = totalcompra+totalpro;
    document.write("<p> total de la compra:  " +totalpro+ "</p>");
    compra = prompt("¿cuantos productos desea comprar?");
}
document.write("<p> numero de prodcutos vendidos en el dia: " +npro+ "</p>");
document.write("<p> total de compras en el dia: " +totalcompra+ "</p>")