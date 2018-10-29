const mockedUsers = {};

mockedUsers["juan.ramirez-me@mail.escuelaing.edu.co"] = {
  name: "Juan David",
  lastName: "Ramirez Mendoza",
  id: "1019139950",
  email: "juan.ramirez-me@mail.escuelaing.edu.co",
  password: "qwerty1"
};

mockedUsers["kevin.mendieta@mail.escuelaing.edu.co"] = {
  name: "Kevin Jeffrey",
  lastName: "Mendieta Perez",
  id: "10204567687",
  email: "kevin.mendieta@mail.escuelaing.edu.co",
  password: "qwerty2"
};

mockedUsers["nicolas.osorio@mail.escuelaing.edu.co"] = {
  name: "Nicolas",
  lastName: "Osorio Arias",
  id: "2345423112",
  email: "nicolas.osorio@mail.escuelaing.edu.co",
  password: "qwerty3"
};

const mockedParties = [
  {
    partyName: "FIECI",
    description: "La mejor fiesta universitaria en Bogotá",
    address: "AK 45 (Autonorte) #205-59, Bogotá, Cundinamarca",
    place: "Escuela Colombiana De Ingeniería Julio Garavito",
    eventDate: "31-10-2018",
    eventHour: "20:00",
    optionalDescription: "Fiesta de rave",
    price: 2000,
    typeOfMusic: "Mix 90's",
    assistants: [],
    likes: 5
  },
  {
    partyName: "Armando",
    description: "Fiesta de Halloween",
    address: "AK 45 (Autonorte) #205-59, Bogotá, Cundinamarca",
    place: "Escuela Colombiana De Ingeniería Julio Garavito",
    eventDate: "31-10-2018",
    eventHour: "20:00",
    optionalDescription: "Fiesta de disfraces",
    price: 2000,
    typeOfMusic: "Mix 90's",
    assistants: [],
    likes: 7
  },
  {
    partyName: "Juarez",
    description: "Fiesta Mexicana",
    address: "AK 45 (Autonorte) #205-59, Bogotá, Cundinamarca",
    place: "Escuela Colombiana De Ingeniería Julio Garavito",
    eventDate: "31-10-2018",
    eventHour: "20:00",
    optionalDescription: "Fiesta Mexicana",
    price: 2000,
    typeOfMusic: "Mix 90's",
    assistants: [],
    likes: 8
  }
];

class ApiMock {
  static addNewUser(user) {
    mockedUsers[user.email] = {
      name: user.name,
      email: user.email,
      password: user.password
    };
    window.location.assign("/login");
  }

  static enterLogin(email, password, callback) {
    if (
      mockedUsers[email] !== undefined &&
      mockedUsers[email].password === password
    ) {
      callback({
        data: {
          accessToken: "testToken"
        }
      });
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
      localStorage.removeItem("profileInfo");
    }
  }

  static modifyUserInfo(email, name, lastName, id, newEmail, callback) {
    if (mockedUsers[email] !== undefined) {
      var password = mockedUsers[email].password;
      delete mockedUsers[email];
      mockedUsers[newEmail] = {
        name: name,
        lastName: lastName,
        id: id,
        email: newEmail,
        password: password
      };
      localStorage.setItem(
        "profileInfo",
        JSON.stringify(mockedUsers[newEmail])
      );
      console.log(mockedUsers);
      callback();
    }
  }

  static modifyUserPassword(newPassword, email, callback) {
    if (mockedUsers[email] !== undefined) {
      mockedUsers[email].password = newPassword;
      localStorage.setItem("profileInfo", JSON.stringify(mockedUsers[email]));
      callback();
    }
  }

  static getUsers(callback) {
    callback({
      data: mockedUsers
    });
  }

  static getUserByEmail(email, callback) {
    callback({
      data: mockedUsers[email]
    });
  }

  static getParties() {
    return mockedParties;
  }

  static addNewParty(
    partyName,
    description,
    eventDate,
    eventHour,
    address,
    place,
    price,
    optionalDescription,
    typeOfMusic,
    assistants
  ) {
    mockedParties.push({
      partyName: partyName,
      description: description,
      eventDate: eventDate,
      eventHour: eventHour,
      address: address,
      place: place,
      price: price,
      optionalDescription: optionalDescription,
      typeOfMusic: typeOfMusic,
      assistants: assistants
    });
    mockedParties[partyName] = {
      partyName: partyName,
      description: description,
      eventDate: eventDate,
      eventHour: eventHour,
      address: address,
      place: place,
      price: price,
      optionalDescription: optionalDescription,
      typeOfMusic: typeOfMusic,
      assistants: assistants
    };
  }
}

export default ApiMock;
