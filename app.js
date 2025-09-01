const listaAlumnos = [];

const agregarAlumno = (nombre, edad) => {
  listaAlumnos.push({ nombre, edad });

  
  const ul = document.getElementById("listaAlumnos");
  const li = document.createElement("li");
  li.textContent = `Nombre: ${nombre} | Edad: ${edad} años`;
  ul.appendChild(li);
};

const form = document.getElementById("formAlumno");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);

  if (nombre && !isNaN(edad)) {
    agregarAlumno(nombre, edad);
    form.reset(); 
  } else {
    alert("Datos inválidos");
  }
});

