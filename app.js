import { saveTask, onGetTasks, deleteTask, getTask, updateTask } from "./scripts/service/firestore.js"

const taskForm = document.getElementById("task-form");
const $tituloToDo = document.getElementById("titulo-hacer");
const $botonNuevaTarea = document.querySelector("#btn-nueva-tarea");
const $listaDeTareas = document.querySelector("#alt-container");

const $botonAgregar = document.querySelector("#agregar-tarea");
const $botonCerrar = document.querySelector("#btn-cerrar-modal");
const $modalForm = document.querySelector("#agregar-tarea-modal");

let editStatus = false;
let id = "";

$botonAgregar.addEventListener("click", () => {
    taskForm["btn-task-save"].innerText = "Agregar Tarea";
    $tituloToDo.innerText = "Agrega una nueva Tarea";
    $modalForm.classList.remove("hidden");
});

$botonNuevaTarea.addEventListener("click", () => {
    taskForm["btn-task-save"].innerText = "Agregar Tarea";
    $tituloToDo.innerText = "Agrega una nueva Tarea";
    $modalForm.classList.remove("hidden");
});

$botonCerrar.addEventListener("click", () => {
    $modalForm.classList.add("hidden");
    taskForm.reset();
})

