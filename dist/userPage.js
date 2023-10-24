const userPhotosBtn = document.getElementById('userPhotosBtn');
const welcomeMsg = document.getElementById('welcomeMsg');
const usrPhotosContainer =document.getElementById('user_photos_container');

userPhotosBtn.addEventListener('click',()=>{
    userPhotosBtn.classList.toggle('bg-[#d366007d]');
    welcomeMsg.classList.toggle('hidden');
    usrPhotosContainer.classList.toggle('hidden');  
});