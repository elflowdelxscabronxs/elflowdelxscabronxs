const videos = [
    {
        url: "https://www.youtube.com/watch?v=B9Z50F1YMtQ",
        artist: "Lucía Vargas",
        city: "Cali",
        country: "Colombia",
        video: "Por Aguantar",
    },
    {
        url: "https://www.youtube.com/watch?v=T8g-LDSfRXY",
        artist: "Diana Avella",
        city: "Bogotá",
        country: "Colombia",
        video: "Micro-documental",
    },
    {
        url: "https://www.youtube.com/watch?v=T_j-718lmfo",
        artist: "El Flow de las cabronas",
        city: ["Bogotá", "Cali", "Medellín"],
        country: "Colombia",
        video: "El Flow de las cabronas (Fragmento)",
    },
    {
        url: "https://www.youtube.com/watch?v=yIXZNbvHunc",
        artist: "El Flow de las cabronas",
        city: "Santiago",
        country: "Chile",
        video: "El Flow de las cabronas (Fragmento)",
    },
    {
        url: "https://www.youtube.com/watch?v=oR4plT-NqBY",
        artist: "Indómitamorfosis",
        city: "Valparaiso",
        country: "Chile",
        video: "Homenaje a Nicole Saavedra",
    },
    {
        url: "https://www.youtube.com/watch?v=QluevKchlR0",
        artist: "Krudxs Cubensi",
        city: "",
        country: ["Cuba", "Estados Unidos", "Argentina"],
        video: "Conversatorio",
    },
    {
        url: "https://www.youtube.com/watch?v=1CvxfzBFw_I",
        artist: "Indómitamorfosis",
        city: "Buenos Aires",
        country: "Argentina",
        video: "en Buenos Aires",
    },
];

const map = document.querySelector(".map");
const reproductor = document.querySelector(".rep-outer");
const interior = document.querySelector(".rep-inner")


const handleMapClick = () => {
    reproductor.classList.add("open");
}
const closeRep = () => {
    reproductor.classList.remove("open");
}

videos.forEach(video=>{
    const videoLink = document.createElement("a");
    videoLink.innerText = video.video
    videoLink.href = video.url
    interior.appendChild(videoLink);

})


map.addEventListener("click", handleMapClick);

reproductor.addEventListener("click", (event) => {
    if (!event.target.closest('.rep-inner')) {
        closeRep();
    }
})
