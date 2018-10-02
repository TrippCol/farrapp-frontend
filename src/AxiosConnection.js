import axios from "axios";


const client = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
}); 


  export function getTodos(callback) {
    client.get("/todos").then(function (response) {
      callback.onSuccess(response);
    })
    .catch(function (error) {
      callback.onFailed(error);
    });
  }

  export function addNewTodo(todo, callback) {
      client.post("/todos", { todo })
      .then(function () {
        callback.onSuccess();
      })
      .catch(error => console.log(error));
  }
