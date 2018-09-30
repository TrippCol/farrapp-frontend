var apimock = (function () {

    var mockedUsers = [];

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


    return {
        addNewUser: function (name, lastName, email, password) {
            mockedUsers[email] = {
                name: name,
                lastName: lastName,
                email: email,
                password: password
            };
        },

        enterLogin: function (email, password, callback) {
            if (mockedUsers[email] !== undefined && mockedUsers[email].password === password) {
                callback({
                    data: {
                        accessToken: "testToken"
                    }
                });
            } else{
                localStorage.removeItem("token");
                localStorage.removeItem("isLoggedIn");
                localStorage.removeItem("profileInfo");
            }
        },

        modifyUser: function(email, newName, newLastName, newId, newEmail, newPassword){
            if (mockedUsers[email] !== undefined){
                mockedUsers[email] = {
                    name: newName,
                    lastName: newLastName,
                    id: newId,
                    email: newEmail,
                    password: newPassword
                };
            }
        },

        getUsers: function (callback) {
            callback({
                data: mockedUsers
            });
        },

        getUserByEmail: function (email, callback) {
            callback({
                data: mockedUsers[email]
            });
        },

    }

})();

export default apimock;

