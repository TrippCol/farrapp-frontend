var apimock = (function () {

    var mockedUsers = [];

    mockedUsers["juan.ramirez-me@mail.escuelaing.edu.co"] = {
        name: "Juan David",
        lastName: "Ramirez Mendoza",
        email: "juan.ramirez-me@mail.escuelaing.edu.co",
        password: "qwerty1"
    };

    mockedUsers["kevin.mendieta@mail.escuelaing.edu.co"] = {
        name: "Kevin Jeffrey",
        lastName: "Mendieta Perez",
        email: "kevin.mendieta@mail.escuelaing.edu.co",
        password: "qwerty2"
    };

    mockedUsers["nicolas.osorio@mail.escuelaing.edu.co"] = {
        name: "Nicolas",
        lastName: "Osorio Arias",
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
            }
        },

        getUsers: function (callback) {
            callback(mockedUsers);
        },

        getUserByEmail: function (email, callback) {
            callback(mockedUsers[email]);
        },

    }

})();

export default apimock;

/*
apiclient = (function () {
    return {
        getBlueprintsByAuthor: function (authname, callback) {
            $.get("/blueprints/" + authname).then(
                callback,
                function (response) {
                    alert(response.responseText);
                }
            );
        },

        getBlueprintsByNameAndAuthor: function (authname, bpname, callback) {
            $.get("/blueprints/" + authname + "/" + bpname).then(
                callback,
                function (response) {
                    alert(response.responseText);
                }
            );
        },

        updateAuthorBlueprint: function (blueprint, callback) {
            $.ajax({
                url: "/blueprints/" + blueprint.author + "/" + blueprint.name,
                type: 'PUT',
                data: JSON.stringify(blueprint),
                contentType: "application/json"
            }).then(
                function () {
                    $.get("/blueprints/" + blueprint.author, callback);
                },
                function (response) {
                    alert(response.responseText);
                }
            );
        },

        createBlueprint: function (blueprint, callback) {
            $.ajax({
                url: "/blueprints",
                type: 'POST',
                data: JSON.stringify(blueprint),
                contentType: "application/json"
            }).then(
                function () {
                    $.get("/blueprints/" + blueprint.author, callback);
                },
                function (response) {
                    alert(response.responseText);
                }
            );
        },

        deleteBlueprint: function (blueprint, callback) {
            $.ajax({
                url: "/blueprints/" + blueprint.author + "/" + blueprint.name,
                type: 'DELETE'
            }).then(
                function () {
                    $.get("/blueprints/" + blueprint.author, callback);
                },
                function (response) {
                    alert(response.responseText);
                }
            );
        }
    };
})();*/
