/*
Vamos a programar un cliente mediante el caual vamos a probar la arquitectura cliente-servidor por medio de una peticion mediante protocolo
utilizando metodo GET a la ruta: /api/talleres

Que tenemos que conectarnos al servicio de la base de datos 

El problema es como apuntar al back
*/

const API_URL = 'http://proyectobackcecyt9.onrender.com'; // Cambia esto segun la URL de tu backend 

async function main(){
    console.log("Cliente Peticion Get -> a ${API_URL}/api/talleres");
    const inicio = Date.now();
    const respuesta = await
fetch(`${API_URL}/api/talleres`);//Nos da el tiempo de ida y vuelta por medio de la peticion mediante RTT
    const duracionMs = Date.now() - inicio;
    //un estatus de error 500 seria una respesta valida si el servicio de la base de datos no esta disponible 
    const cuerpo = await respuesta.json();
    console.log("Ciclo de peticion - respuesta");
    console.log("Protocolo HTTPS sobre TCP : ${respuesta.estatus}");
    console.log("Status de recibido : ${respuesta.url}");
}

main();