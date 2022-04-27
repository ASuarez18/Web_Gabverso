document.addEventListener('DOMContentLoaded', load);

//const api = 'gplant-env-1.eba-2mea4cph.us-east-1.elasticbeanstalk.com';
const api = 'Gabverse-env.eba-ppaz8wkp.us-east-1.elasticbeanstalk.com';

async function getEstadisticas() {
    return fetch(`http://localhost:3001/database/estadistica/1`)
        .then(response => response.json())
        .then(json => json[0]);
}

async function getLogros() {
    return fetch(`http://localhost:3001/database/logro/1`)
        .then(response => response.json())
        .then(json => json[0]);
}


function load() {
    const display = document.getElementById('estadisticas-horas');
    const displayP = document.getElementById('estadisticas-puntos');
    const displayL = document.getElementById('estadisticas-logros');
    console.trace('display', display)
    console.trace('display', displayP)
    console.trace('display', displayL)
    //display.addEventListener('click', () => update(display));
    update(display);
    updateP(displayP)
    updateL(displayL)
    setInterval(() => update(display), 1000);
    setInterval(() => updateP(displayP), 1000);
    setInterval(() => updateL(displayL), 1000);
}
 
// Funcion para horas de juego y graficas
async function update(display) {
    console.trace('update');
    const { horasJuego } = await getEstadisticas();
    display.innerHTML = `
        <p>El jugador lleva un total de ${horasJuego} horas de juego</p>
    `;

    drawGraph(30);
    drawGraph2(30);
    drawGraph3(30);
    drawGraph4(30);
}

// Funcion para puntos
async function updateP(display) {
    console.trace('update');
    const { puntos } = await getEstadisticas();
    display.innerHTML = `
        <p>El jugador cuenta con un total de ${puntos} puntos canjeables</p>
    `;
}

// Funcion para logros
async function updateL(display) {
    console.trace('update');
    const { nombreLogro } = await getLogros();
    const { descripcion } = await getLogros();
    display.innerHTML = `
        <p>- ${nombreLogro} > ${descripcion}</p>
    `;
}

let grafica = null;
let grafica2 = null;
let grafica3 = null;
let grafica4 = null;

function drawGraph(aciertos) {
    if (!grafica) {
        const g = document.getElementById('e-aciertos');
        const ctx = g.getContext("2d");

        let config = {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [ aciertos, 100 - aciertos],
                        backgroundColor: [
                            '#29BB2E',
                            '#f54242'
                        ]
                    }
                ]
            }
            ,
            options: {
                responsive: true,
                circumference: 360,
                rotation: -90,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                }
            }
        }
        grafica = new Chart(ctx, config)
    } else {
        grafica.data.datasets[0].data = [ aciertos, 100 - aciertos];
        grafica.update();
    }
}

function drawGraph2(aciertos) {
    if (!grafica2) {
        const g2 = document.getElementById('e-aciertos2');
        const ctx2 = g2.getContext("2d");

        let config = {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [ aciertos, 100 - aciertos],
                        backgroundColor: [
                            '#29BB2E',
                            '#f54242'
                        ]
                    }
                ]
            }
            ,
            options: {
                responsive: true,
                circumference: 360,
                rotation: -90,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                }
            }
        }
        grafica2 = new Chart(ctx2, config)
    } else {
        grafica2.data.datasets[0].data = [ aciertos, 100 - aciertos];
        grafica2.update();
    }
}

function drawGraph3(aciertos) {
    if (!grafica3) {
        const g3 = document.getElementById('e-aciertos3');
        const ctx3 = g3.getContext("2d");

        let config = {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [ aciertos, 100 - aciertos],
                        backgroundColor: [
                            '#29BB2E',
                            '#f54242'
                        ]
                    }
                ]
            }
            ,
            options: {
                responsive: true,
                circumference: 360,
                rotation: -90,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                }
            }
        }
        grafica3 = new Chart(ctx3, config)
    } else {
        grafica3.data.datasets[0].data = [ aciertos, 100 - aciertos];
        grafica3.update();
    }
}

function drawGraph4(aciertos) {
    if (!grafica4) {
        const g4 = document.getElementById('e-aciertos4');
        const ctx4 = g4.getContext("2d");

        let config = {
            type: 'doughnut',
            data: {
                datasets: [
                    {
                        data: [ aciertos, 100 - aciertos],
                        backgroundColor: [
                            '#29BB2E',
                            '#f54242'
                        ]
                    }
                ]
            }
            ,
            options: {
                responsive: true,
                circumference: 360,
                rotation: -90,
                plugins: {
                    legend: {
                        position: 'top'
                    },
                }
            }
        }
        grafica4 = new Chart(ctx4, config)
    } else {
        grafica4.data.datasets[0].data = [ aciertos, 100 - aciertos];
        grafica4.update();
    }
}

// Usuario
// const { userName } = await getUsuario();
// const { nivel } = await getUsuario();

//Estadisticas
// const { wins } = await getEstadisticas();
// const { loses } = await getEstadisticas();
// const { vida } = await getEstadisticas();
// const { mana } = await getEstadisticas();
// const { dano } = await getEstadisticas();
// const { defensa } = await getEstadisticas();


