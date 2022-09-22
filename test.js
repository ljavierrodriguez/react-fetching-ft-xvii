//let url = "https://3001-ljavierrodr-reactfetchi-o4owvzrv59g.ws-us67.gitpod.io/users";
let url = "https://jsonplaceholder.typicode.com/users";
let options_get = {
    method: 'GET', // GET, POST, PUT, DELETE,
    //body: "", // POST, PUT 
    headers: {
        'Content-Type': 'application/json'
    }
}
let credentials = {
    username: "lrodriguez",
    password: "123456"
}
let options_post = {
    method: 'POST', // GET, POST, PUT, DELETE,
    body: JSON.stringify(credentials), // POST, PUT 
    headers: {
        'Content-Type': 'application/json'
    }
}

fetch(url, options_get) // GET
    .then((response) => { // Respuesta del Servidor
        console.log(response.status)
        return response.json()
    })
    .then((data) => { // Datos Consultados
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message)
    })

fetch(url, options_post) // GET
    .then((response) => { // Respuesta del Servidor
        console.log(response.status)
        return response.json()
    })
    .then((data) => { // Datos Consultados
        console.log(data);
    })
    .catch((error) => {
        console.error(error.message)
    })


    (async () => {

        try {
            const response = await fetch(url, options_get);
            const data = await response.json();
            console.log(data);

            const response2 = await fetch(data.url)
            const data2 = await response2.json()
            console.log(data2)
        } catch (error) {
            console.log(error);
        }
    })()


    (async function(){

    })()

    fetch(url, {})
        .then((response) => {

            console.log(response) // Informacion de la peticion 
             
            return response.json();
        })
        .then((resultado) => {
            console.log(resultado); // informacion consultada (ejemplo listado de usuarios)
        })
        .catch((error) => {
            console.log(error) // Si ocurre algun tipo de error
        })