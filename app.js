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

window.addEventListener("DOMContentLoaded", async () => {

    onGetTasks((tasks) => {

        $listaDeTareas.innerHTML = "";

        tasks.forEach(doc => {
            const task = doc.data();

            const tareaLi = document.createElement("li");
            tareaLi.classList.add("group", `bg-[${task.colorNota}]`, "rounded-md", "p-3", "ring-1", "ring-slate-200", "shadow-sm", "hover:shadow-md");
            tareaLi.innerHTML = `
        <dl class="relative w-full h-full flex flex-col justify-between content-between gap-2">
            <div class="absolute right-0">
                <img class="w-9 " src="./assets/images/pushpin.svg"/>
            </div>
            <div>
                <dt class="sr-only">Title</dt>
                <dd class="font-['Exo_2'] font-semibold text-2xl text-[${task.colorTexto}]">${task.titulo}</dd>
            </div>
            <div>
                <dt class="sr-only">Description</dt>
                <dd class="font-['Patrick_Hand'] text-[${task.colorTexto}]">${task.descripcion}</dd>
            </div>
            <div class="w-full gap-1 mt-2 p-2 flex justify-between">
                <button class="btn-delete rounded w-1/2 h-10 bg-gray-400/50 hover:bg-[#Ff0003] flex justify-center content-center items-center" title="Borrar" data-id="${doc.id}"><i class="fas fa-trash text-[#0000000] text-base group-hover:text-[white]" data-id="${doc.id}"></i></button>
                <button class="btn-edit rounded w-1/2 h-10 bg-gray-400/50 hover:bg-[#138713] flex justify-center content-center items-center" title="Editar" data-id="${doc.id}"><i class="fas fa-pen text-[#000000] text-base group-hover:text-[white]" data-id="${doc.id}"></i></button>
            </div>
        </dl>
        `;
            $listaDeTareas.appendChild(tareaLi);
        });



});
