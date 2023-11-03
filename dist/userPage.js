const userPhotosBtn = document.getElementById('userPhotosBtn');
const welcomeMsg = document.getElementById('welcomeMsg');
const usrPhotosContainer =document.getElementById('user_photos_container');
const userPhotography =document.querySelectorAll('#userPhotography img');
//  Pop up modal Variables
const imageModal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-btn");
const popUpImage = document.querySelector(".modal div img");

console.log(userPhotography)
userPhotosBtn.addEventListener('click',()=>{
    userPhotosBtn.classList.toggle('bg-[#d366007d]');
    welcomeMsg.classList.toggle('hidden');
    usrPhotosContainer.classList.toggle('hidden');  
});


for (let i = 0; i < userPhotography.length; i++) {
    userPhotography[i].classList.add(
      "object-contain",
      "rounded-md",
      "mx-auto",
      "shadow-md",
      "transition",
      "ease-in-out",
      "duration-300",
      "hover:scale-110",
      "hover:opacity-60",
      "fad-in",
    );

    userPhotography.forEach((image) => {
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
    
      userPhotography[i].addEventListener("click", openModel);
      closeModalBtn.addEventListener("click", closeModal);
      modalOverlay.addEventListener("click", closeModal);
};

