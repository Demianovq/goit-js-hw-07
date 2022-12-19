import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const listOfGallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
  `
  )
  .join("");
listOfGallery.insertAdjacentHTML("beforeend", markup);

const listOfBigImg = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
listOfBigImg.on("shown.simplelightbox", function (event) {
  const a = event.target.firstElementChild.alt;
  console.log(a);
  captionType = a;
});
