import { galleryItems } from "./gallery-items.js";

// Change code below this line

console.log(galleryItems);
const listOfGallery = document.querySelector(".gallery");

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
  `
  )
  .join("");
listOfGallery.insertAdjacentHTML("beforeend", markup);

listOfGallery.addEventListener("click", selectUrlImg);

function selectUrlImg(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const originalUrlImg = event.target.getAttribute("data-source");
  console.log(originalUrlImg);
  const instance = basicLightbox.create(`
    <img src="${originalUrlImg}" width="500">
`);

  instance.show();
  window.addEventListener("keydown", onEscBtnPress);

  function onEscBtnPress(evt) {
    if (evt.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onEscBtnPress);
    }
  }
}
