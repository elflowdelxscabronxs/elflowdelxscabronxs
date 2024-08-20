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

const map = document.querySelector('.map');
const reproductor = document.querySelector('.rep-outer');
const interior = document.querySelector('.rep-inner');

const handleMapClick = () => {
    interior.innerHTML = '';
    reproductor.classList.add('open');
    const videoList = document.createElement('ul');
    interior.appendChild(videoList);
    videos.forEach((video) => {
        const listItem = document.createElement('li');
        const videoBtn = document.createElement('button');
        videoBtn.innerText = video.video;
        listItem.appendChild(videoBtn);
        videoList.appendChild(listItem);
        videoBtn.addEventListener('click', handleButtonClick);
    });
};

const closeRep = () => {
    reproductor.classList.remove('open');
};

const handleRetroceder = () => {

};

const handleButtonClick = (e) => {
    const retroceder = document.createElement('button');
    retroceder.innerText = 'Atras';
    retroceder.addEventListener("click", handleMapClick);
    const videoRep = document.createElement("iframe");
    videoRep.src = `https://www.youtube.com/embed/` + videos.find((video)=>e.target.innerText === video.video).id
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