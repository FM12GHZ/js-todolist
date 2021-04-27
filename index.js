import App from "./App.js"

const initialState = JSON.parse(localStorage.getItem('derek-todo') || '[]')

App(initialState, "all");
