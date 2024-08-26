const videos = [
    {
        url: 'https://www.youtube.com/watch?v=B9Z50F1YMtQ',
        artist: 'Lucía Vargas',
        city: 'Cali',
        country: 'Colombia',
        video: 'Por Aguantar',
        id: "B9Z50F1YMtQ",
    },
    {
        url: 'https://www.youtube.com/watch?v=T8g-LDSfRXY',
        artist: 'Diana Avella',
        city: 'Bogotá',
        country: 'Colombia',
        video: 'Micro-documental',
        id: "T8g-LDSfRXY",
    },
    {
        url: 'https://www.youtube.com/watch?v=T_j-718lmfo',
        artist: 'El Flow de las cabronas',
        city: ['Bogotá', 'Cali', 'Medellín'],
        country: 'Colombia',
        video: 'El Flow de las cabronas (Fragmento Colombia)',
        id: "T_j-718lmfo",
    },
    {
        url: 'https://www.youtube.com/watch?v=yIXZNbvHunc',
        artist: 'El Flow de las cabronas',
        city: 'Santiago',
        country: 'Chile',
        video: 'El Flow de las cabronas (Fragmento Chile)',
        id: "yIXZNbvHunc",
    },
    {
        url: 'https://www.youtube.com/watch?v=oR4plT-NqBY',
        artist: 'Indómitamorfosis',
        city: 'Valparaiso',
        country: 'Chile',
        video: 'Homenaje a Nicole Saavedra',
        id: "oR4plT-NqBY",
    },
    {
        url: 'https://www.youtube.com/watch?v=QluevKchlR0',
        artist: 'Krudxs Cubensi',
        city: '',
        country: ['Cuba', 'Estados Unidos', 'Argentina'],
        video: 'Conversatorio',
        id: "QluevKchlR0",
    },
    {
        url: 'https://www.youtube.com/watch?v=1CvxfzBFw_I',
        artist: 'Indómitamorfosis',
        city: 'Buenos Aires',
        country: 'Argentina',
        video: 'en Buenos Aires',
        id: "1CvxfzBFw_I",
    },
];

const map = document.querySelector('.map'); // tomo mapa del DOM
const reproductor = document.querySelector('.rep-outer'); // tomo exterior del modal
const interior = document.querySelector('.rep-inner'); // tomo interior del modal

 // funcion para clickear el mapa
const handleMapClick = () => {

    interior.innerHTML = ''; // limpio el modal
    const videoList = document.createElement('ul'); // creo lista
    interior.appendChild(videoList); // incorporo la lista
    videos.forEach((video) => { // por cada video
        const listItem = document.createElement('li'); // creo un elemento lista
        const videoBtn = document.createElement('button');  // y un boton
        videoBtn.innerText = video.video; // el texto del boton muestra el nombre del video
        listItem.appendChild(videoBtn); // incorporo el boton al li
        videoList.appendChild(listItem); // incorporo li a ul
        videoBtn.addEventListener('click', handleButtonClick); // le doy funcion al boton
    });
    reproductor.classList.add('open'); // hago visible el modal
};

// funcion para cerrar modal
const closeRep = () => {
    reproductor.classList.remove('open'); // cierro modal
};

// función para apretar el botón de retroceso
const handleRetroceder = () => {
    interior.firstChild.style.display = "block";
    interior.removeChild(interior.lastChild);
    interior.removeChild(interior.lastChild);
};


 // función para botón de video dentro del modal
const handleButtonClick = (e) => {
    const btnVolver = document.createElement('button'); // creo boton retroceso
    btnVolver.innerText = 'Volver'; // contenido
    btnVolver.classList.add("retroceder"); // le doy clase
    btnVolver.addEventListener("click", handleRetroceder); // escucho click y mando a handle
    const videoRep = document.createElement("iframe"); // creo iframe
    videoRep.src = `https://www.youtube.com/embed/` + videos.find((video)=>e.target.innerText === video.video).id; // le doy source correspondiente
    videoRep.setAttribute("frameborder", 0); // sin borde
    videoRep.setAttribute("allowfullscreen", true); // se puede maximizar
    videoRep.classList.add("embebido"); // le doy clase
    interior.firstChild.style.display = "none"; // colapso la lista
    interior.appendChild(videoRep); // agrego iframe
    interior.appendChild(btnVolver); // agrego boton retroceso
};

map.addEventListener('click', handleMapClick); // a modificar para integrar las areas

reproductor.addEventListener('click', (event) => { // cierra el modal cuando se cliquea por fuera
    if ([...event.target.classList].includes('rep-outer')) {
        closeRep();
    }
});

// VVV zona de pruebas VVV

// función para manejar el clickeo en un área
const handleAreaClick = (e) => {
    interior.innerHTML = ''; // limpio el modal
    const videoList = document.createElement('ul'); // creo ul
    interior.appendChild(videoList); // incorporo ul  
    const videosSeleccionados = videos.filter((video)=>video.country.includes(e)); // tomo los videos de la lista que corresponden al país seleccionado
    videosSeleccionados.forEach((video) => { // por cada video
        const listItem = document.createElement('li'); // creo un elemento lista
        const videoBtn = document.createElement('button');  // y un boton
        videoBtn.innerText = video.video; // el texto del boton muestra el nombre del video
        listItem.appendChild(videoBtn); // incorporo el boton al li
        videoList.appendChild(listItem); // incorporo li a ul
        videoBtn.addEventListener('click', handleButtonClick); // le doy funcion al boton
    });
    reproductor.classList.add('open'); // hago visible el modal
};

ImageMap('img[usemap]') // tomo este código prestado para reescalar el mapeo de la imagen

// VVV para ver donde está el mouse desde la consola VVV
// map.addEventListener('mousemove', function(event){
//     setTimeout(console.log("x: " + event.offsetX + " y: " + event.offsetY), 1000)

// });