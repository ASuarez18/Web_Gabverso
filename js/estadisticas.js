document.addEventListener('DOMContentLoaded', load);

//const api = 'gplant-env-1.eba-2mea4cph.us-east-1.elasticbeanstalk.com';
const api = 'Gabverse-env.eba-ppaz8wkp.us-east-1.elasticbeanstalk.com';

// async function getUsuario() {
//     return fetch(`http://${api}/last`)
//         .then(response => response.json())
//         .then(json => json[0]);
// }

async function getEstadisticas() {
    return fetch(`http://localhost:3001/database/estadistica/1`)
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
    display.innerHTML = `
        <p>El jugador lleva un total de ${horasJuego} horas de juego</p>
    `;

    drawGraph(30);
}

let grafica = null;
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


