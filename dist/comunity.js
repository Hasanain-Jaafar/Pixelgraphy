// >>  sign-Up Form Variables.
const firstName = document.getElementById("fName"),
  checkBox = document.getElementById("checkBox"),
  formWraper = document.getElementById("formWraper"),
  lastName = document.getElementById("lName"),
  email = document.getElementById("emailVal"),
  passWord = document.getElementById("passwordVal"),
  signupMsg = document.getElementById("signupMsg"),
  signUpFieldsWrapper = document.getElementById("signupField"),
  signInLnk = document.getElementById("signin"),
  signinContainer = document.getElementById("signinContainer"),
  signinBtn = document.getElementById("signinBtn"),
  signinPassword = document.getElementById("signin-password"),
  signinUserName = document.getElementById("signin-user-name"),
  userPageLink = document.getElementById("user-page-link"),
  signupBtn = document.getElementById("signupBtn");

  const signin = `
  <div class=" fad-in w-5/7 flex flex-col justify-center items-center gap-x-4 mx-auto mt-6 lg:w-5/6">
        <div class="w-10/12 flex flex-col">
          <label class="font-Kanit pl-1">User Name</label>
          <input id="signin-user-name" class="rounded-sm bg-[#7FD1AE] bg-opacity-60 border border-gray-500 pl-2 h-8" />
        </div>
        <div class="w-10/12 flex flex-col mt-4">
          <label class="font-Kanit pl-1">Password</label>
          <input id="signin-password" class="rounded-sm bg-[#7FD1AE] bg-opacity-60 border border-gray-500 pl-2 h-8" type="password" />
        </div>
        <a id="user-page-link" href="./userPage.html" class="flex justify-center items-center mt-8 w-full">
          <button id="signinBtn"
            class=" text-white text-lg font-bold py-2 px-2 rounded-lg bg-[#C23257]  transition ease-in-out duration-300 tracking-widest hover:bg-slate-800 shadow-lg w-10/12">
            Sign In
          </button>
        </a>
      </div>
  `;

  signInLnk.addEventListener('click', (e)=>{
    e.preventDefault();
    console.log('clicked')
    signUpFieldsWrapper.classList.add('disappearing')
    setTimeout(()=>{
      signUpFieldsWrapper.classList.add('hidden');
      signinContainer.classList.remove('hidden');
      signinContainer.innerHTML = (signin);
    },500)
  });

checkBox.addEventListener("change", () => {
  const formValues = [
    firstName.value,
    lastName.value,
    email.value,
    passWord.value,
  ];
  let checkedValues = [];

  for (let i = 0; i < formValues.length; i++) {
    if (formValues[i] !== "") {
      checkedValues.push(formValues[i]);
    } else {
      signupBtn.classList.remove("bg-[#C23257]");
      signupBtn.classList.remove("hover:bg-gray-300");
      signupBtn.classList.remove("hover:text-gray-900");
    }
  }
  if (formValues.length === checkedValues.length) {
    signupBtn.classList.add("bg-[#C23257]", "text-black");
    signupBtn.classList.add("hover:bg-gray-300");
    signupBtn.classList.add("hover:text-gray-900");

    // >> Activate Sign Up Btn if all fields !==""
    signupBtn.addEventListener("click", () => {
      formWraper.remove();
      signupMsg.classList.remove("hidden");
      signupMsg.classList.add("flex");
    });
  }
});
