const videos = [
    {
        url: 'https://www.youtube.com/watch?v=B9Z50F1YMtQ',
        artist: 'Lucía Vargas',
        city: 'Cali',
        country: 'Colombia',
        video: 'Por Aguantar - Lucía Vargas',
        id: "B9Z50F1YMtQ",
    },
    {
        url: 'https://www.youtube.com/watch?v=T8g-LDSfRXY',
        artist: 'Diana Avella',
        city: 'Bogotá',
        country: 'Colombia',
        video: 'Entrevista Diana Avella',
        id: "T8g-LDSfRXY",
    },
    {
        url: 'https://www.youtube.com/watch?v=T_j-718lmfo',
        artist: 'El Flow de las cabronas',
        city: ['Bogotá', 'Cali', 'Medellín'],
        country: 'Colombia',
        video: 'Corte Colombia',
        id: "T_j-718lmfo",
    },
    {
        url: 'https://www.youtube.com/watch?v=yIXZNbvHunc',
        artist: 'El Flow de las cabronas',
        city: 'Santiago',
        country: 'Chile',
        video: 'Corte Chile',
        id: "yIXZNbvHunc",
    },
    {
        url: 'https://www.youtube.com/watch?v=oR4plT-NqBY',
        artist: 'Indómitamorfosis',
        city: 'Valparaiso',
        country: 'Chile',
        video: 'Homenaje a Nicole Saavedra - Indómitamorfosis',
        id: "oR4plT-NqBY",
    },
    {
        url: 'https://www.youtube.com/watch?v=QluevKchlR0',
        artist: 'Krudxs Cubensi',
        city: '',
        country: 'Argentina',
        video: 'Feminismo antirracista y apropiación cultural por Krudxs Cubensi',
        id: "QluevKchlR0",
    },
    {
        url: 'https://www.youtube.com/watch?v=1CvxfzBFw_I',
        artist: 'Indómitamorfosis',
        city: 'Buenos Aires',
        country: 'Argentina',
        video: 'Por la absolución de Higui - Indómitamorfosis',
        id: "1CvxfzBFw_I",
    },
];
const fotos = [
    {
        country: "México",
        img: [
            "La Mare 1.png",
            "la mare advertencia lírika.png",
            "La Mare.png"
        ],
    },
    {
        country: "Argentina",
        img: [
            "Indómita Morfosis.png",
            "Indómita Morfosis2.png",
            "Karen Pastrana.png",
            "Kris Alaniz1.JPG",
            "Kris Alaniz2.JPG",
            "Kriz Alanis.png",
            "Kriz Alanis1.png",
            "tink 2.png",
            "tink 3.png",
            "Tink.png",
            "tink3.png"
        ],
    },
    {
        country: "Chile",
        img: [
            "Deyas Klan .png",
            "Gabi de Deyas Klan.png",
            "Indómita Morfosis.png",
            "Isa de Deyas Klan.JPG",
            "Millaray 1.png",
            "millaray.JPG",
            "Millaray.png",
        ],
    },
    {
        country: "Colombia",
        img: [
            "11040578_403555226515885_8394124775578554301_o.jpg",
            "Aura del Mar 2.jpg",
            "Aura del Mar.jpg",
            "De Loto1.jpg",
            "De Loto2.jpg",
            "De Loto3.jpg",
            "De Loto4.jpg",
            "De Loto5.jpg",
            "Lucía Vargas.png",
            "Lucía Vargas1.JPG",
            "Lucía Vargas2.JPG",
            "Lucía Vargas3.JPG",
        ],
    },
];
const map = document.querySelector('.map'); // tomo mapa
const reproductor = document.querySelector('.rep-outer'); // tomo exterior del modal
const interior = document.querySelector('.rep-inner'); // tomo interior del modal

// funcion para cerrar modal
const closeRep = () => {
    reproductor.classList.remove('open'); // cierro modal
};

reproductor.addEventListener('click', (event) => { // cierra el modal cuando se cliquea por fuera
    if ([...event.target.classList].includes('rep-outer')) {
        closeRep();
    }
});

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
    const divVideo = document.createElement("div");
    const videoRep = document.createElement("iframe"); // creo iframe
    videoRep.src = `https://www.youtube.com/embed/` + videos.find((video)=>e.target.innerText === video.video).id; // le doy source correspondiente
    videoRep.setAttribute("frameborder", 0); // sin borde
    videoRep.setAttribute("allowfullscreen", true); // se puede maximizar
    videoRep.classList.add("responsive-iframe-inner"); // le doy clase
    interior.firstChild.style.display = "none"; // colapso la lista
    divVideo.appendChild(videoRep);
    interior.appendChild(divVideo); // agrego iframe
    interior.appendChild(btnVolver); // agrego boton retroceso
};


// función para botón de galería dentro del modal
const handleGalleryBtnClick = (e) => {
    const btnVolver = document.createElement('button'); // creo boton retroceso
    btnVolver.innerText = 'Volver'; // contenido
    btnVolver.classList.add("retroceder"); // le doy clase
    btnVolver.addEventListener("click", handleRetroceder); // escucho click y mando a handle
    const gallery = document.createElement("div"); // creo div galeria
    gallery.classList.add("galería")
    const imagenGalería = document.createElement("img");
    imagenGalería.classList.add("imagenGalería");
    let index = 0
    imagenGaleríaSrc = fotos.find((pais)=>e.target.id === pais.country).img[index];
    const handleImgClick = () => {
        if (index === fotos.find((pais)=>e.target.id === pais.country).img.length-1) {
            index = 0;
        } else {
            index++;
        }
        imagenGaleríaSrc = fotos.find((pais)=>e.target.id === pais.country).img[index];
        imagenGalería.src = `images/${e.target.id}/${imagenGaleríaSrc}`;
    };
    imagenGalería.addEventListener("click", handleImgClick);
    imagenGalería.src = `images/${e.target.id}/${imagenGaleríaSrc}`;
    gallery.appendChild(imagenGalería);
    interior.firstChild.style.display = "none"; // colapso la lista
    interior.appendChild(gallery); // agrego galeria
    interior.appendChild(btnVolver); // agrego boton retroceso
};

// función para manejar el clickeo en un área
const handleAreaClick = (e) => {
    interior.innerHTML = ''; // limpio el modal
    const divContent = document.createElement('div'); // creo div contenedora
    const contentTitle = document.createElement('h2'); // creo h2
    contentTitle.innerText = e; // le doy texto a h2
    divContent.appendChild(contentTitle); // incorporo h2 a div
    const videosSeleccionados = videos.filter((video)=>video.country.includes(e)); // tomo los videos de la lista que corresponden al país seleccionado
    if (videosSeleccionados.length > 0) 
    {const videoList = document.createElement('ul'); // creo ul
    divContent.appendChild(videoList); // incorporo ul a div
    videosSeleccionados.forEach((video) => { // por cada video
        const listItem = document.createElement('li'); // creo un elemento lista
        const videoBtn = document.createElement('button');  // y un boton
        videoBtn.innerText = video.video; // el texto del boton muestra el nombre del video
        listItem.appendChild(videoBtn); // incorporo el boton al li
        videoList.appendChild(listItem); // incorporo li a ul
        videoBtn.addEventListener('click', handleButtonClick); // le doy funcion al boton
    });}
    const galleryBtn = document.createElement("button");
    galleryBtn.innerText = "Fotos";
    galleryBtn.id = e;
    divContent.appendChild(galleryBtn);
    galleryBtn.addEventListener("click", handleGalleryBtnClick);
    interior.appendChild(divContent); // incorporo div a modal  
    reproductor.classList.add('open'); // hago visible el modal
};

ImageMap('img[usemap]') // tomo este código prestado para reescalar el mapeo de la imagen