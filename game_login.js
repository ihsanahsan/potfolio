// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_name_input=0;
  player2_name_input=0;

  // Store these values locally
  localStorage.setItem("player1_name_input");
  localStorage.setItem("player2_name_input");

  //Assign "game_page.html" to window.location

  window.location ="game_login.html";
}

