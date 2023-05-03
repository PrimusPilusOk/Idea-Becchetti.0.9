console.log("Hola! Bienvenid@ a PetCare!");

let turnosDisponibles = 5;
let boton_turnos = document.getElementById("boton_turnos");

boton_turnos.addEventListener("click", function() {
    let turnosElegidos = parseInt(prompt(`En este momento hay ${turnosDisponibles} turnos disponibles. ¿Cuántos turnos desea tomar?`));
    let descuento = false;
    let porcentajeDescuento = 0;
    if (prompt("¿Es usted jubilad@? (si/no)").toUpperCase() == "SI") {
        descuento = true;
        porcentajeDescuento = 30;
    }
    if (descuento) {
        alert(`Por ser jubilad@ tiene un ${porcentajeDescuento}% de descuento.`);
    }
    turnosDisponibles = turnosDisponibles - turnosElegidos;
    alert(`Usted ha tomado ${turnosElegidos} turnos. Ahora quedan disponibles ${turnosDisponibles} turnos.`);
});

let boton_guardia = document.getElementById("boton_guardia");
boton_guardia.addEventListener("click", function() {
    let pacientes = parseInt(prompt("Hola! ¿Cuantos pacientes atendemos hoy?"));
    for (let guardia = 1; guardia <= pacientes; guardia++) {
        let nombre = prompt("¿Como se llama el paciente numero " + guardia + "?")
        alert("El paciente " + nombre + ", tiene asignado el turno numero " + guardia);
        console.log("El paciente " + nombre + ", tiene asignado el turno numero " + guardia);
    }
});

const botonDistribuidores = document.getElementById("boton_distribuidores");
botonDistribuidores.addEventListener("click", function() {
  let nombre = prompt("Hola! Vas a ingresar un producto para el stock ¿Cómo se llama el producto?");
  let precio = prompt("¿Cuánto cuesta en pesos el producto?");
  let cantidad = prompt("¿Qué cantidad tenes para agregar al stock?");
  let unProducto = new Producto(nombre, precio, cantidad);
  alert("Gracias! Recuerde que los productos cargados se muestran en la consola (Presione F12)")
  console.log("--> Los productos que cargaste para el stock son", unProducto);
});

class Producto {
constructor(nombre, precio, cantidad) {
    this.nombre_articulo = nombre;
    this.precio_en_pesos = parseFloat(precio);
    this.cantidad = parseInt(cantidad);
    this.hay_inventario = !!parseInt(cantidad);
    }
}

const botonStaff = document.getElementById("boton_staff");
botonStaff.addEventListener("click", function() {
let datos = [
    { nombre: "Tuki", especie: "Perro", raza: "Labrador", edad: 5, veterinario: "Jorge" },
    { nombre: "Michi", especie: "Gato", raza: "Siames", edad: 2, veterinario: "Maria" },
    { nombre: "Jorge", especialidad: "Perros", telefono: "0-800-1234" },
    { nombre: "Maria", especialidad: "Gatos", telefono: "0-800-4321" }
];

function buscarVeterinario(nombreVeterinario) {
    let paciente = datos.find(function(elemento) {
    return (elemento.veterinario === nombreVeterinario);
});

if (paciente) {
    let veterinario = datos.find(function(elemento) {
    return (elemento.nombre === paciente.veterinario && "especialidad" in elemento);
    });
if (veterinario) {
    return veterinario;
    }
}
return null;
}

let nombreVeterinario = prompt("Introduzca el nombre del profesional veterinario a buscar (usar mayúsculas en la letra inicial): Jorge o Maria");
let veterinarioEncontrado = buscarVeterinario(nombreVeterinario);
if (veterinarioEncontrado !== null) {
    alert("Especialidad: " + veterinarioEncontrado.especialidad + " Teléfono: " + veterinarioEncontrado.telefono );
} else {
    alert("Perdon! No se encontró ningún profesional veterinario con ese nombre.");
}
});

////////////////////////////

const clienteNuevo = {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "555-1234",
    mascotas: ["Fido", "Luna"],
};

const clienteJSONNuevo = JSON.stringify(clienteNuevo);

localStorage.setItem("cliente", clienteJSONNuevo);

const clienteJSONRecuperado = localStorage.getItem("cliente");

const clienteRecuperado = JSON.parse(clienteJSONRecuperado);

console.log(clienteRecuperado.nombre);

const serviciosContainer = document.querySelector("#servicios-container");

const servicios = ["Consulta general", "Vacunación", "Cirugía"];

const serviciosList = document.createElement("ul");

servicios.forEach((servicio) => {
const servicioItem = document.createElement("li");
servicioItem.textContent = servicio;
serviciosList.appendChild(servicioItem);
});

serviciosContainer.appendChild(serviciosList);

////////////////////////////////////////////////////

const form_turnos = document.getElementById("form_turnos");
form_turnos.addEventListener("submit", function(event) {
event.preventDefault(); 
let turnosElegidos = parseInt(document.getElementById("cantidad_turnos").value);
let descuento = false;
let porcentajeDescuento = 0;
if (document.getElementById("jubilado").checked) {
    descuento = true;
    porcentajeDescuento = 30;
}
});
