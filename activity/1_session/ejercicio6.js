console.log("Ejercicio 6");

//Función constructora
function formatter (prefix){
    this.prefix =prefix;
};

//Uso de prototipos para crear la función append
let formatter1 = new formatter ("Hello");
console.log (formatter.prefix);
formatter.prototype.append = function(string1){
    let finalResult = `${this.prefix} ${string1}`;
    return finalResult;
};
console.log (formatter1.append("world"));

//Uso de prototipos para añadir un segundo método que convierta una string de texto en minúsculas
formatter.prototype.lowerString = function(string2){
    let finalString = string2.toLowerCase();
    return finalString;
};
console.log (formatter1.lowerString("HOLAAAAA!"));