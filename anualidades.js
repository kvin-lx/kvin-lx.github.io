function anualidad_vencida() {
    //// Obtener los valores de los inputs
    //var anualidad = document.getElementById("input_anualidad").value;
    //var interes = document.getElementById("interes").value;
    //var periodo = document.getElementById("periodo").value;
    //var tipo_anualidad = document.querySelector('input[name="type"]:checked').value;
    //var frecuencia = document.querySelector('input[name="frequency"]:checked').value;
    //// 
    //var pagoV = document.getElementById("pagoV");
    //// Convertir los valores a números
    //var i = interes / 100;
    //// numero de pagos
    //var n = periodo;
    //// numero de pagos por año
    //var t = 1;
   //// valor presente
    //var a = anualidad;
    //// pagoV es el valor que se va a calcular
    //var pagoV = 0;
    //// si la anualidad es vencida - valor presente
    //if (tipo_anualidad == "A_v") {
    //    // si la frecuencia es anual
    //    if (frecuencia == "anualV") {
    //        pagoV = a * ((1 - (Math.pow(1 + i, -n))) / i);
    //    // si la anualidad es venida - valor futuro
    //    } else if (frecuencia == "semestralV") {
    //        pagoV = a * ((1 - (Math.pow(1 + (i / 2), -n))) / (i / 2));
    //    // si la frecuencia es cuatrimestral
    //    } else if (frecuencia == "cuatrimestralV") {
    //        pagoV = a * ((1 - (Math.pow(1 + (i / 3), -n))) / (i / 3));
    //    // si la frecuencia es trimestral
    //    } else if (frecuencia == "trimestralV") {
    //        pagoV = a * ((1 - (Math.pow(1 + (i / 4), -n))) / (i / 4));
    //    // si la frecuencia es bimestral
    //    } else if (frecuencia == "bimestralV") {
    //        pagoV = a * ((1 - (Math.pow(1 + (i / 6), -n))) / (i / 6));
    //    // si la frecuencia es mensual
    //    } else if (frecuencia == "mensualV") {
    //        pagoV = a * ((1 - (Math.pow(1 + (i / 12), -n))) / (i / 12));
    //    }
    //// si la anualidad es vencida - valor futuro
    //} else if (tipo_anualidad == "A_v") {
    //    // si la frecuencia es anual
    //    if (frecuencia == "anualV") {
    //        pagoV = a * (((Math.pow(1 + (i), n) - 1) / (i)));
    //    // si la frecuencia es semestral
    //    } else if (frecuencia == "semestralV") {
    //        pagoV = a * (((Math.pow(1 + (i / 2), n) - 1) / (i / 2)));
    //    // si la frecuencia es cuatrimestral
    //    } else if (frecuencia == "cuatrimestralV") {
    //        pagoV = a * (((Math.pow(1 + (i / 3), n) - 1) / (i / 3)));
    //    // si la frecuencia es trimestral
    //    } else if (frecuencia == "trimestralV") {
    //        pagoV = a * (((Math.pow(1 + (i / 4), n) - 1) / (i / 4)));
    //    // si la frecuencia es bimestral
    //    } else if (frecuencia == "bimestralV") {
    //        pagoV = a * (((Math.pow(1 + (i / 6), n) - 1) / (i / 6)));
    //    // si la frecuencia es mensual
    //    } else if (frecuencia == "mensualV") {
    //        pagoV = a * (((Math.pow(1 + (i / 12), n) - 1) / (i / 12)));
    //    }
    //}
    //// Redondear el resultado a 2 decimales
    //pagoV = pagoV.toFixed(2);
    //// Mostrar el resultado en el input
    //document.getElementById("pagoV").value = pagoV;
}