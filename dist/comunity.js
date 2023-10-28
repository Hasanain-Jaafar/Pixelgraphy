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
  backToSignup = document.getElementById("backToSignup"),
  signinUserName = document.getElementById("signin-user-name"),
  userPageLink = document.getElementById("user-page-link"),
  signupBtn = document.getElementById("signupBtn");

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
    signupBtn.addEventListener("click", (e) => {
      e.preventDefault();
      formWraper.remove();
      signupMsg.classList.remove("hidden");
      signupMsg.classList.add("flex");
    });
  }
});

signInLnk.addEventListener('click', (e)=>{
  e.preventDefault();
  signUpFieldsWrapper.classList.add('disappearing')
  setTimeout(()=>{
    signUpFieldsWrapper.classList.add('hidden');
    signinContainer.classList.remove('hidden');
  },500)
});

backToSignup.addEventListener('click', () =>{
  signinContainer.classList.add('disappearing')
  signUpFieldsWrapper.classList.rmove('hidden');
  signinContainer.classList.add('hidden');
})
