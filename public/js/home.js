function elNombreEs(name) {
    var name;
    var gender;

    if (name == "Solange") {
        gender = "Femenino";
    } else if (name == "Matías") {
        gender = "Masculino";
    }

    console.log("El nombre " + name + " es: " + gender);
}

function seSale(estaNublado, llueve) {
    var seSale = "";
    if (estaNublado == true || llueve == true) {
        seSale = "No se sale nada!!!! El día está feo."
    } else {
        seSale = "Hoy sí que se sale!!!"
    }
    console.log(seSale);
}

function resta(numero1, numero2) {
    var resultado = numero1 - numero2;
    console.log(resultado)

}

function multiplicacion(numero1, numero2) {
    var resultado = numero1 * numero2;
    console.log(resultado)
}

function entraAlBoliche(edad) {
    var entra;
    if (edad < 18) {
        entra = " No ";
    } else {
        entra = " Si "; 
    }
    console.log ("La edad es: " + edad + " por lo tanto, entra? " + entra);
}

function iteracion (numero){
    for (var i = 0; i <= numero; i++){
        console.log ("El numero es " + i)
    }
}


elNombreEs("Matías");
seSale(true, false);
resta(4, 2);
multiplicacion(5, 5)
entraAlBoliche (17)
iteracion (100000)

