window.onload = function () {
  
  const mobileNav = document.getElementById("mobile-nav-menu"),
    humburgerIcon = document.getElementById("humb-menu"),
    MenuCloseIcon = document.getElementById("closeIcon");

  // # Event to Show/Hide Mobile Nav Menu
  humburgerIcon.addEventListener("click", () => {
    humburgerIcon.classList.add("hidden");
    MenuCloseIcon.classList.remove("hidden");
    mobileNav.classList.remove("hidden");
    mobileNav.classList.add("z-10");

    // # Function to Close mobile Nav Menu
    const closeNavMenu = () => {
      humburgerIcon.classList.remove("hidden");
      MenuCloseIcon.classList.add("hidden");
      mobileNav.classList.add("hidden");
    };

    // # Close mobile Nav Menu
    MenuCloseIcon.addEventListener("click", closeNavMenu);
    
  });

};
