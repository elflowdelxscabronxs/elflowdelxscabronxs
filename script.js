const videos = [
  {
    url: 'https://www.youtube.com/watch?v=B9Z50F1YMtQ',
    artist: 'Lucía Vargas',
    city: 'Cali',
    country: 'Colombia',
    video: 'Por Aguantar',
  },
  {
    url: 'https://www.youtube.com/watch?v=T8g-LDSfRXY',
    artist: 'Diana Avella',
    city: 'Bogotá',
    country: 'Colombia',
    video: 'Micro-documental',
  },
  {
    url: 'https://www.youtube.com/watch?v=T_j-718lmfo',
    artist: 'El Flow de las cabronas',
    city: ['Bogotá', 'Cali', 'Medellín'],
    country: 'Colombia',
    video: 'El Flow de las cabronas (Fragmento Colombia)',
  },
  {
    url: 'https://www.youtube.com/watch?v=yIXZNbvHunc',
    artist: 'El Flow de las cabronas',
    city: 'Santiago',
    country: 'Chile',
    video: 'El Flow de las cabronas (Fragmento Chile)',
  },
  {
    url: 'https://www.youtube.com/watch?v=oR4plT-NqBY',
    artist: 'Indómitamorfosis',
    city: 'Valparaiso',
    country: 'Chile',
    video: 'Homenaje a Nicole Saavedra',
  },
  {
    url: 'https://www.youtube.com/watch?v=QluevKchlR0',
    artist: 'Krudxs Cubensi',
    city: '',
    country: ['Cuba', 'Estados Unidos', 'Argentina'],
    video: 'Conversatorio',
  },
  {
    url: 'https://www.youtube.com/watch?v=1CvxfzBFw_I',
    artist: 'Indómitamorfosis',
    city: 'Buenos Aires',
    country: 'Argentina',
    video: 'en Buenos Aires',
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
    // hacer que los links lleven a el video correspondiente embebido
    videoBtn.addEventListener('click', handleButtonClick);
  });
};

const closeRep = () => {
  reproductor.classList.remove('open');
};

const handleButtonClick = (e) => {
  const retroceder = document.createElement('button');
  retroceder.innerText = 'Atras';
  interior.innerHTML = '';
  interior.appendChild(retroceder);
  interior.appendChild();
};

map.addEventListener('click', handleMapClick);

reproductor.addEventListener('click', (event) => {
  console.log([...event.target.classList].includes('rep-outer'));

  if ([...event.target.classList].includes('rep-outer')) {
    closeRep();
  }
});
