// let yo = {
//     nombre: "yeison",
//     edad: 22,
//     hablar: function () {
//       console.log(this.edad);
//     },
//     descripcion: function () {
//         console.log("Soy "+ this.nombre + " y tengo " + this.edad + " años.")
//     }
//   };

//   yo.hablar();

// yo.descripcion()

function decirNombre(obj) {
  obj.hablar = function () {
    console.log(this.nombre);
  };
}

const Mateo = {
  nombre: "Mateo",
  edad: 22,
};

const juan = {
  nombre: "Juan",
  edad: 25,
};
//   console.log("antes",juan)
decirNombre(juan);
//   decirNombre(Mateo);
//   console.log("despues",juan)
//   juan.hablar();
// Mateo.hablar();

const coche1 = {
  modelo: "kuga",
  marca: "Ford",
  color: "gris",
  arrancar: function () {
    return this.marca + " es de color " + this.color;
  },
};

const coche2 = {
  modelo: "a3",
  marca: "Audi",
  color: "blanco",
  arrancar: function () {
    return this.marca + " es de color " + this.color;
  },
};

const coche3 = {
  modelo: "Sandero",
  marca: "dacia",
  color: "gris",
};

// function Coche(marca, modelo, antiguedad, color, tipo) {
//   this.marca = marca;
//   this.modelo = modelo;
//   this.antiguedad = antiguedad;
//   this.color = color;
//   this.tipo = tipo;
//   this.detalles = () => {
//     return (
//       "Tu coche es un " +
//       this.marca +
//       " " +
//       this.modelo +
//       " con " +
//       (2022 - this.antiguedad) +
//       " años, clase " +
//       this.tipo +
//       " y color " +
//       this.color
//     );
//   };
// }

class Coche{
    static info(edad){
        // edad >= 18 ? 'Puedes conducir': "No puedes conducir"
        console.info(`Tienes ${edad} años ${ edad >= 18 ? "y puedes conducir": "y ... ¡Sorry! Sigue esperando para conducir."}`);
    }
    constructor(marca, modelo, antiguedad, color, tipo) {
      this.marca = marca;
      this.modelo = modelo;
      this.antiguedad = antiguedad;
      this.color = color;
      this.tipo = tipo;
    }
    detalles() {
      console.log(`Tu coche es un ${this.marca} ${this.modelo} con ${this.antiguedad} años, clase ${this.tipo} y color ${this.color}`);
    }
  }
  Coche.info(50);
  Coche.info(8);
//   let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");

 
  class Furgon extends Coche {
    constructor (marca, modelo, antiguedad, color, tipo,taraMinima, cargaUtil, volumenCarga) {
      super(marca, modelo, antiguedad, color, tipo) 
      this.taraMinima = taraMinima;
      this.cargaUtil = cargaUtil;
      this.volumenCarga = volumenCarga;
      }
  };
 
//   let miFurgon = new Furgon("Peugeot", "607", 2002, "rojo", "turismo",1200, 768, 4.5);
// console.log(miFurgon)
// //   let miCoche = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
// //   miCoche.detalles();

// const miCoche = new Coche("Mercedes", "Volador", 2009, "Rojo", "Automatico");
// const miCoche2 = new Coche("Dacia", "Sandero", 2030, "Gris", "Automatico");
// let miCoche3 = new Coche("Peugeot", "607", 2002, "rojo", "turismo");
// console.log(miCoche3.detalles());

function Gato(raza, nombre, color, tamaño, edad) {
  this.raza = raza;
  this.nombre = nombre;
  this.color = color;
  this.tamaño = tamaño;
  this.edad = edad;
  this.acciones = () => {
    return "Miaw";
  };
}

const miGato = new Gato("Maine coon", "Felix", "Cafe", "Medio", 4);

function Libro(titulo, autor, año) {
  this.titulo = titulo;
  this.autor = autor;
  this.año = año;
  this.detalles = function () {
    return this.titulo + " año publicación " + this.año
  }
}

function Revista(titulo, autor, año, mes) {
  Libro.call(this, titulo, autor, año);
  this.mes = mes;
}

const mag1 = new Revista("Mag One", "John Doe", "2018", "Enero");

// console.log(mag1.detalles())
