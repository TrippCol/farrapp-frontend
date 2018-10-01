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

        modifyUserInfo: function(email, name, lastName, id, newEmail, callback){
            if (mockedUsers[email] !== undefined){
                var password = mockedUsers[email].password;
                delete(mockedUsers[email]);
                mockedUsers[newEmail] = {
                    name: name,
                    lastName: lastName,
                    id: id,
                    email: newEmail,
                    password: password
                };
                localStorage.setItem("profileInfo", JSON.stringify(mockedUsers[newEmail]));
                console.log(mockedUsers);
                callback();
            }
        },

        modifyUserPassword: function(newPassword, email, callback){
            if(mockedUsers[email] !== undefined){
                mockedUsers[email].password = newPassword;
                localStorage.setItem("profileInfo", JSON.stringify(mockedUsers[email]));
                callback();
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

