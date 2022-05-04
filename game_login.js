// Create function addUser()
function addUser() {
  // Get value of user by id player1_name_input and player2_name_input
  player1_name_input = document.getElementById("player1_name").value;
  player2_name_input = document.getElementById("player2_name").value;
  // Store these values locally
  localStorage.setItem("user_1", player1_name_input);
  localStorage.setItem("user_2", player2_name_input);
  //Assign "game_page.html" to window.location
  window.location = "game_page.html"
}

