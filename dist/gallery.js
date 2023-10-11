//  Selecting DOM Elements
const photosArr = document.querySelectorAll("#photos-wrapper img"),
  mainContainer = document.getElementById("main-container"),
  showAllBtn = document.getElementById("showAllBtn"),
  cityBtn = document.getElementById("cityBtn"),
  natureBtn = document.getElementById("natureBtn"),
  portraitBtn = document.getElementById("portraitBtn");

//  Pop up modal Variables
const imageModal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-btn");
const popUpImage = document.querySelector(".modal div img");

/*Events to filter Images*/
showAllBtn.addEventListener("click", () => {
  showAllBtn.classList.add("hidden");
  photosArr.forEach((e) => {
    e.classList.remove("hidden");
  });
});
cityBtn.addEventListener("click", () => {
  photosArr.forEach((e) => {
    showAllBtn.classList.remove("hidden");
    e.classList.remove("hidden");
    if (e.alt !== "city") {
      e.classList.add("hidden");
    }
  });
});
natureBtn.addEventListener("click", () => {
  photosArr.forEach((e) => {
    showAllBtn.classList.remove("hidden");
    e.classList.remove("hidden");
    if (e.alt !== "nature") {
      e.classList.add("hidden");
    }
  });
});
portraitBtn.addEventListener("click", () => {
  photosArr.forEach((e) => {
    showAllBtn.classList.remove("hidden");
    e.classList.remove("hidden");
    if (e.alt !== "portrait") {
      e.classList.add("hidden");
    }
  });
});

// applying css style to all images
for (let i = 0; i < photosArr.length; i++) {
  photosArr[i].classList.add(
    "object-contain",
    "rounded-md",
    "w-[90%]",
    "mx-auto",
    "shadow-md",
    "transition",
    "ease-in-out",
    "duration-300",
    "hover:scale-110",
    "hover:opacity-60",
    "fad-in",
  );
  photosArr.forEach((image) => {
    image.addEventListener("click", () => {
      imageModal.classList.remove("hidden");
      modalOverlay.classList.remove("hidden");
      popUpImage.src = image.getAttribute("src");
      popUpImage.alt = image.getAttribute("alt");
    });
  });

  //  Function to Close the Pop up modal
  const closeModal = () => {
    imageModal.classList.add("hidden");
    modalOverlay.classList.add("hidden");
  };
  //  Function to Open the Pop up modal
  const openModel = () => {
    imageModal.classList.remove("hidden");
    modalOverlay.classList.remove("hidden");
  };

  photosArr[i].addEventListener("click", openModel);
  closeModalBtn.addEventListener("click", closeModal);
  modalOverlay.addEventListener("click", closeModal);

  //  Press ESC key to Close the Pop up model
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && !modalOverlay.classList.contains("hidden")) {
      closeModal();
    }
  });
}
