$(document).ready(() => {
  // Getting references to our form and input
  const signUpForm = $("form.signup");
  const emailInput = $("input#email-input");
  const passwordInput = $("input#password-input");

  const firstNameInput = $("input#firstname-input");
  const lastNameInput = $("input#lastname-input");
  

  // When the signup button is clicked, we validate the email and password are not blank
  signUpForm.on("submit", event => {
    event.preventDefault();
    const userData = {
      email: emailInput.val().trim(),
      password: passwordInput.val().trim(),
      first_name: firstNameInput.val().trim(),
      last_name: lastNameInput.val().trim()
    };

    if (!userData.email || !userData.password || !userData.first_name || !userData.last_name) {
      return;
    }
    // If we have an email and password, run the signUpUser function
    signUpUser(userData.email, userData.password, userData.first_name, userData.last_name);
    emailInput.val("");
    passwordInput.val("");
    firstNameInput.val("");
    lastNameInput.val("");
  });

  // Does a post to the signup route. If successful, we are redirected to the members page
  // Otherwise we log any errors
  function signUpUser(email, password, first_name, last_name) {
    $.post("/api/signup", {
      email: email,
      password: password,
      first_name: first_name,
      last_name: last_name
    })
      .then(() => {
        window.location.replace("/members");
        // If there's an error, handle it by throwing up a bootstrap alert
      })
      .catch(handleLoginErr);
  }

  function handleLoginErr(err) {
    console.log("Login Error");
    $("#alert .msg").text(err.responseJSON);
    $("#alert").fadeIn(500);
  }
});
