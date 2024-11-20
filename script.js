document.addEventListener("DOMContentLoaded", () => {
  const imageWrappers = document.querySelectorAll(".image-wrapper");

  imageWrappers.forEach((wrapper) => {
    const img = wrapper.querySelector(".image");

    img.onload = () => {
      img.classList.add("loaded");
      wrapper.classList.add("loaded");
    };

    if (img.complete) {
      img.classList.add("loaded");
      wrapper.classList.add("loaded");
    }
  });
});
