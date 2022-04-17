document.addEventListener('DOMContentLoaded', load);

//const api = 'gplant-env-1.eba-2mea4cph.us-east-1.elasticbeanstalk.com';
const api = 'Gabverse-env.eba-ppaz8wkp.us-east-1.elasticbeanstalk.com';

// async function getUsuario() {
//     return fetch(`http://${api}/last`)
//         .then(response => response.json())
//         .then(json => json[0]);
// }

async function getEstadisticas() {
    return fetch(`http://localhost:3000/database/estadistica/1`)
        .then(response => response.json())
        .then(json => json[0]);
}


function load() {
    const display = document.getElementById('estadisticas-puntos');
    console.trace('display', display)
    //display.addEventListener('click', () => update(display));
    update(display);
    setInterval(() => update(display), 1000);
}

async function update(display) {
    console.trace('update');
    const { horasJuego } = await getEstadisticas();
    // const { temp_int } = await getData();
    display.innerHTML = `
        <p>El jugador lleva un total de ${horasJuego} horas de juego</p>
    `;
}

// Usuario
// const { userName } = await getUsuario();
// const { nivel } = await getUsuario();

//Estadisticas
// const { puntos } = await getEstadisticas();
// const { wins } = await getEstadisticas();
// const { loses } = await getEstadisticas();
// const { vida } = await getEstadisticas();
// const { mana } = await getEstadisticas();
// const { dano } = await getEstadisticas();
// const { defensa } = await getEstadisticas();


