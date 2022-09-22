import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    //getUsers();
    getUsersAsync();
  }, [])

  const getUsers = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    //let url = "https://3001-ljavierrodr-reactfetchi-o4owvzrv59g.ws-us67.gitpod.io/users"
    let options_get = {
      method: 'GET', // GET, POST, PUT, DELETE,
      //body: "", // POST, PUT 
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
        setUsers(data);
      })
      .catch((error) => {
        console.error(error.message)
      })
  }

  const getUsersAsync = async () => {
    //let url = "https://jsonplaceholder.typicode.com/users";
    let url = "https://3001-ljavierrodr-reactfetchi-o4owvzrv59g.ws-us67.gitpod.io/users"
    let options_get = {
      method: 'GET', // GET, POST, PUT, DELETE,
      //body: "", // POST, PUT 
      headers: {
        'Content-Type': 'application/json'
      }
    }

    try {
      const response = await fetch(url, options_get);
      const data = await response.json();
      console.log(data);

      setUsers(data);

    } catch (error) {
      console.log(error);
    }


  }

  return (
    <>
      <h1>Fetching React</h1>
      <ul>
        {/* {
          !!users && // Validar que exista la variable o datos
          users.length > 0 &&
          users.map((user, index) => {
            return <li key={index}>{user.name && user.name} - {user.email2 ? user.email2.toLowerCase(): "no disponible"}</li>
          })
        } */}

        {
          !!users && // Validar que exista la variable o datos
          users.length > 0 &&
          users.map((user, index) => {
            return (
              <li key={index}>
                {user?.name} {user?.lastname?.toLowerCase()} - {user.email2 ? user?.email2?.toLowerCase() : "no disponible"}
                <p>Lat: {user.address.geo?.lat} Lng: {user.address.geo?.lng}</p>
              </li>
            )
          })
        }
      </ul>
    </>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

