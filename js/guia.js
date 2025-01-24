
let tareasPendientes = []


function crearTarea() {
    const formulario = document.querySelector("#formulario");
    formulario.addEventListener("submit", (e) => {
        e.preventDefault();
        const tareaNueva = document.querySelector("#tarea").value
        tareasPendientes.push(tareaNueva);
        formulario.reset();
        guardarLocalStorage(tareaNueva);
        opcionesDeTarea();
    })
}


let guardarLocalStorage = (tareaNueva) => {

    if (localStorage.getItem("tareasPendientes")) {
        let tareasGuardadas = JSON.parse(localStorage.getItem("tareasPendientes"));
        tareasGuardadas.push(tareaNueva);
        localStorage.setItem("tareasPendientes", JSON.stringify(tareasGuardadas));
        pintarTareas()
    }
    else {
        localStorage.setItem("tareasPendientes", JSON.stringify(tareasPendientes));
        pintarTareas()
    }

}

function opcionesDeTarea() {
    let eliminar = document.querySelectorAll("#tareasPendientes");
    eliminar.forEach(tareaPendiente => {
        tareaPendiente.addEventListener("click", (e) => {

            if (e.target.textContent === "completada") {
                tareaPendiente.classList.toggle('fondoVerde');
            }
            if (e.target.textContent === "eliminar") {
                tareaPendiente.remove();
                localStorage.removeItem("tareasPendientes");
            }
            else {
                console.log("no se ha seleccionado ninguna opcion")
            }
        })
    });

}

const pintarTareas = () => {
    let tareasGuardadas = JSON.parse(localStorage.getItem("tareasPendientes"));
    let listaTareas = ``
    for (let i = 0; i < tareasGuardadas.length; i++) {
        listaTareas += `<li id="tareasPendientes"> ${tareasGuardadas[i]}<button type="">completada</button>
                                                   <button type="">eliminar</button> </li>`
    }
    document.querySelector("#pendientes").innerHTML = listaTareas;
}


crearTarea();
pintarTareas();
opcionesDeTarea();