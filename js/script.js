function openLogIn() {
  document.getElementById("logInForm").style.transform = "scale(1.1)";
  document.getElementById("signUpForm").style.transform = "scale(0)";
}
  
  function closeLogIn() {
    document.getElementById("logInForm").style.transform = "scale(0)";
  }

  function openSignUp() {
    document.getElementById("logInForm").style.transform = "scale(0)";

    document.getElementById("signUpForm").style.transform = "scale(1.1)";
  }
    
    function closeSignUp() {
      document.getElementById("signUpForm").style.transform = "scale(0)";
    }