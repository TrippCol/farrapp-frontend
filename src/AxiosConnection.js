import axios from "axios";


const client = axios.create({
  baseURL: "http://localhost:8080/api",
  timeout: 1000,
  headers: { Authorization: "Bearer " + localStorage.getItem("token") }
}); 


  export function getParties(callback) {
    client.get("/parties").then(function (response) {
      callback.onSuccess(response);
    })
    .catch(function (error) {
      callback.onFailed(error);
    });
  }

  export function addNewParty(party, callback) {
      client.post("/parties", { party })
      .then(function () {
        callback.onSuccess();
      })
      .catch(error => console.log(error));
  }
