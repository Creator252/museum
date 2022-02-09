const pictures = document.getElementsByClassName("picture-rand");
const arrPictures = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

shuffle(arrPictures);

for (let i = 0; i < 12; i++) {
    pictures[i].src = `./images/jpg/galery${arrPictures[i]}.png`;
};