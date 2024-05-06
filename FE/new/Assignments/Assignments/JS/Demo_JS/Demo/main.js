// function login() {
//     var user = document.getElementById("username").value;
//     var pass = document.getElementById("password").value;
//     if (user == "hieu" && pass == "12345") {
//       alert("Logged In\n Welcom");
//     } else {
//       alert("wrong user/pass");
//     }
//   }

  function login(username, password) {
    $.ajax({
      url: "login.asmx", 
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
  