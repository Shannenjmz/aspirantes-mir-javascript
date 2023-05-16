let Pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", " squash", " piano"]
    };

console.log (Pedro.edad);

Pedro.estatura=1.8;

delete Pedro.activo;

for (let propiedad in Pedro) {
        console.log (propiedad + ": "+Pedro [propiedad])
    }
    
Pedro.saluda = function() {
    return "Hola, me llamo " + this.nombre;
        }
      
console.log(Pedro.saluda);