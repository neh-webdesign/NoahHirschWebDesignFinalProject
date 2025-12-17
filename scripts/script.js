const headers = [
  { id: "aboutheader", pageTitle: "About" },
  { id: "musicheader", pageTitle: "Music" },
  { id: "soundheader", pageTitle: "Sound Design" }
];

headers.forEach(headerInfo => {
  const headerElement = document.getElementById(headerInfo.id);

  if (headerElement) {
    headerElement.addEventListener("mouseover", () => {
      headerElement.textContent = `Noah Hirsch Portfolio (${headerInfo.pageTitle})`;
    });

    headerElement.addEventListener("mouseout", () => {
      headerElement.textContent = "Noah Hirsch Portfolio";
    });
  }
});


const clickImage = document.getElementById("clickimage");

const images = [
  {
    src: "./images/studio1x.png",
    srcset: "./images/studio1x.png 480w, ./images/studio2x.png 960w, ./images/studio3x.png 1440w",
    alt: "Studio Image",
    width: 650,
    height: 400
  },
  {
    src: "./images/noahguitar1x.png",
    srcset: "./images/noahguitar1x.png 480w, ./images/noahguitar2x.png 960w, ./images/noahguitar3x.png 1440w",
    alt: "Noah Guitar Image",
    width: 440,
    height: 400
  },
  {
    src: "./images/babypiano1x.png",
    srcset: "./images/babypiano1x.png 480w, ./images/babypiano2x.png 960w, ./images/babypiano3x.png 1440w",
    alt: "Baby Piano Image",
    width: 520,
    height: 400
  },
  {
    src: "./images/babydj1x.png",
    srcset: "./images/babydj1x.png 480w, ./images/babydj2x.png 960w, ./images/babydj3x.png 1440w",
    alt: "Baby DJ Image",
    width: 520,
    height: 400
  }
];

let currentIndex = 0;

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  const img = images[currentIndex];

  clickImage.src = img.src;
  clickImage.srcset = img.srcset;
  clickImage.alt = img.alt;
  clickImage.width = img.width;
  clickImage.height = img.height;
}

clickImage.addEventListener("click", nextImage);

clickImage.addEventListener("mouseover", () => {
  clickImage.style.border = "7px solid #00548F";
});

clickImage.addEventListener("mouseout", () => {
  clickImage.style.border = "none";
});