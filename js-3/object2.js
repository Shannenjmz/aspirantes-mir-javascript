let persona = {
    nombre: "Pedro Perez",
    edad: 30,
    ciudad: "Bucaramanga",
    profesion: "arquitecto"
    };

console.log(persona);

function presentacion(persona) {
    return "Hola, soy " + persona.nombre + ", tengo " + persona.edad + " años y vivo en " + persona.ciudad + ".";
}

var mensaje = presentacion(persona);

console.log(mensaje);

persona.hobbies = (["leer", "dibujar", "cantar"]);

console.log(persona.hobbies);

for (var i = 0; i < persona.hobbies.length; i++) {
    console.log(persona.hobbies[i]);
}