function login(username, password) {
  $.ajax({
    url: "login.php",
    type: "POST",
    data: { username: username, password: password },
    success: function (response) {
      if (response === "success") {
        alert("Logged In\nWelcome, " + username);
      } else {
        alert("Wrong user/pass");
      }
    },
    error: function () {
      alert("Error occurred during login");
    },
  });
}
