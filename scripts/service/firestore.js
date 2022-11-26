import { app } from "./firebase.js"
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    onSnapshot,
    doc,
    getDoc,
    updateDoc
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js"

app;
const db = getFirestore();

export const saveTask = (titulo, descripcion, colorNota, colorTexto) => {
    addDoc(collection(db, "tareas"), { titulo, descripcion, colorNota, colorTexto })
}

export const getTasks = () => getDocs(collection(db, "tareas"));

export const onGetTasks = (callback) => onSnapshot(collection(db, "tareas"), callback);

export const deleteTask = (id) => deleteDoc(doc(db, "tareas", id));

export const getTask = (id) => getDoc(doc(db, "tareas", id));

export const updateTask = (id, newFields) => updateDoc(doc(db, "tareas", id), newFields);

