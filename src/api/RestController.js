import axios from 'axios';

const apiUrl = "https://farrapp-api.herokuapp.com/";


//USERS
export function login(user, callback) {
    axios.post(apiUrl + '/users/login', user)
        .then(function (response) {
            callback.onSuccess(response);
        })
        .catch(function (error) {
            callback.onFailed(error);
        })
};

export function addNewUser(user, callback) {
    axios.post(apiUrl + '/users', user)
        .then(function (response) {
            callback.onSuccess(response);
        })
        .catch(function (error) {
            callback.onFailed(error);
        })
};

export function modifyUserInfo(email, user, callback) {
  axios.put(apiUrl + '/users/user-info/' + email, user)
      .then(function (response) {
          callback.onSuccess(response);
      })
      .catch(function (error) {
          callback.onFailed(error);
      })
};

export function modifyUserPassword(email, user, callback) {
  axios.put(apiUrl + '/users/user-password/' + email, user)
      .then(function (response) {
          callback.onSuccess(response);
      })
      .catch(function (error) {
          callback.onFailed(error);
      })
};

export function getUsers(callback) {
  axios.get(apiUrl + '/users')
      .then(function (response) {
          callback.onSuccess(response);
      })
      .catch(function (error) {
          callback.onFailed(error);
      })
};


export function getUser(email, callback) {
  axios.get(apiUrl + '/users/' + email)
      .then(function (response) {
          callback.onSuccess(response);
      })
      .catch(function (error) {
          callback.onFailed(error);
      })
};


//PARTIES
export function getPartyList(callback) {
  axios.get(apiUrl + '/parties/parties')
      .then(function (response) {
          callback.onSuccess(response);
      })
      .catch(function (error) {
          callback.onFailed(error);
      })
};

