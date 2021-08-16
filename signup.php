<?php
  include_once 'header.php';
  ?>

<section class="signup-form">
    <h2>Sign Up</h2>
    <form action="includes/signup.inc.php" method="post">
        <input type="text" name="name" placeholder="Your name ...">
        <input type="text" name="email" placeholder="Email ...">
        <input type="text" name="uid" placeholder="Your username ...">
        <input type="password" name="pwd" placeholder="Your password...">
        <input type="password" name="pwdRepeat" placeholder="Repeat password ...">
        <button type="submit" name="submit">Sign Up</button>
    </form>

<?php

if(isset($_GET["error"]))
  if ($_GET["error"] == "emptyinput") {
    echo "<p> Fill in all fields!</p>";
  }
  else if ($_GET["error"] == "invaliduid") {
    echo "<p> Choose a proper username!</p>";
  }
  else if ($_GET["error"] == "invalidemail") {
    echo "<p> invalid email!</p>";
  }
  else if ($_GET["error"] == "passwordsdontmatch") {
    echo "<p> Passwords dont match!</p>";
  }
  else if ($_GET["error"] == "stmtfailed") {
    echo "<p> Something went wrong , try again!</p>";
  }
  else if ($_GET["error"] == "Usernametaken") {
    echo "<p> Choose a proper username!</p>";
  }
  else if ($_GET["error"] == "none") {
    echo "<p> You have signed up!</p>";
  }
?>
</section>
