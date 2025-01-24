
function agreagarTarea() {
  const formulario = document.querySelector("#formulario");
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const crearTarea = document.querySelector(".crearTarea");
    const titulo = document.getElementById("tarea").value;
    const descripcion = document.getElementById("descripcion").value;
    const fechaInicio = document.getElementById("fechaInicio").value;
    const fechaFin = document.getElementById("fechaInicio").value;
    const asignacion = document.getElementById("asignacion").value;
    console.log(asignacion)

    let tarea = {
      "titulo": titulo,
      "descripcion": descripcion,
      "fechaInicio": fechaInicio,
      "fechaFin": fechaFin,
      "asignacion": asignacion
    }


    if (asignacion == "pendiente") {
      const seccion = document.getElementById("pendientes");
      CrearTareaServidor(tarea, "pendiente");
      pintarTareas("pendiente", seccion);
    }

    if (asignacion == "progreso") {
      const seccion = document.getElementById("progreso");
      CrearTareaServidor(tarea, "progreso")
      pintarTareas("progreso", seccion)
    }

    if (asignacion == "completada") {
      const seccion = document.getElementById("completada")
      CrearTareaServidor(tarea, "completada")
      pintarTareas("completada", seccion)
    }

    formulario.reset();

  });
}

async function CrearTareaServidor(tarea, tipo) {
  try {
    let url = `http://localhost:3000/${tipo}`;
    let respuesta = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(tarea),
    });

    if (!respuesta.ok) {
      throw new Error("Error al actualizar la lista n_habitaciones");
    }

    alert("Tarea Creada");
  } catch (error) {
    alert(error);
  }
}



async function traerTareas(tipo) {
  try {
    let url = `http://localhost:3000/${tipo}`;
    let respuesta = await fetch(url);

    if (!respuesta.ok) {
      throw new Error("Error al actualizar la lista n_habitaciones");
    }
    data = respuesta.json();
    return data;

  } catch (error) {
    alert(error);
  }

}
async function pintarTareas(datos, seccion) {
  
  let tarjeta = "";
   tarjeta+=` <h3> Tipo: ${datos[0].asignacion} </h3>`
  datos.forEach(element => {
    tarjeta += ` <div class="p-2 ">

   
   <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
     <img alt="equipo" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80">
     <div class="flex-grow">
       <h2 class="text-gray-900 title-font font-medium">
         <font style="vertical-align: inherit;">
           <font style="vertical-align: inherit;"> ${element.titulo}</font>
         </font>
       </h2>
       <p class="text-gray-500">
         <font style="vertical-align: inherit;">
           <font style="vertical-align: inherit;"> ${element.descripcion}</font>
         </font>
       </p>

       <p class="text-gray-500">
         <font style="vertical-align: inherit;">
           <font style="vertical-align: inherit;"> ${element.fechaInicio}</font>
         </font>
       </p>

       <p class="text-gray-500">
       <font style="vertical-align: inherit;">
         <font style="vertical-align: inherit;"> ${element.fechaFin}</font>
       </font>
     </p>
     </div>
   </div>
 </div>`
  });

 seccion.innerHTML = tarjeta;
}

async function pintarsegun() {

  let datosP = await traerTareas("pendiente");
  let datosPr = await traerTareas("progreso");
  let datosC = await traerTareas("completada");

   console.log(datosP)

   datosP.forEach(element => {
    const seccion = document.getElementById("pendientes");
    pintarTareas(datosP, seccion)
   });


   datosP.forEach(element => {
    const seccion = document.getElementById("progreso");
    pintarTareas(datosPr, seccion)
   });

   datosP.forEach(element => {
    const seccion = document.getElementById("completada");
    pintarTareas(datosC, seccion)
   });

}


pintarsegun();
agreagarTarea();
