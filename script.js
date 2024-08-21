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

const handleMapClick = () => { // funcion para clickear el mapa

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

const closeRep = () => { // funcion para cerrar modal
    reproductor.classList.remove('open'); // cierro modal
};

const handleRetroceder = () => {

};

const handleButtonClick = (e) => { // función para botón dentro del modal
    const retroceder = document.createElement('button');
    retroceder.innerText = 'Atras';
    retroceder.addEventListener("click", handleMapClick);
    const videoRep = document.createElement("iframe");
    videoRep.src = `https://www.youtube.com/embed/` + videos.find((video)=>e.target.innerText === video.video).id
    videoRep.setAttribute("frameborder", 0)
    videoRep.setAttribute("allowfullscreen", true)
    interior.innerHTML = '';
    interior.appendChild(retroceder);
    interior.appendChild(videoRep);
};

map.addEventListener('click', handleMapClick);

reproductor.addEventListener('click', (event) => {
    if ([...event.target.classList].includes('rep-outer')) {
        closeRep();
    }
});

const paisElegido = "Argentina"
console.log(videos.filter((video)=>video.country.includes(paisElegido)))

videos.forEach(video=>{
    console.log(video.country)
})