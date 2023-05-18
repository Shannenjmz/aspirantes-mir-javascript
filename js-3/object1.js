let Pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", " squash", " piano"],
    };

console.log (Pedro.edad);

Pedro.estatura=1.8;

delete Pedro.activo;

for (let propiedad in Pedro) {
        console.log (propiedad + ": "+Pedro [propiedad])
    }
    
function saluda () {
    return "Hola, me llamo " + Pedro.nombre;
        }
      
console.log(saluda());