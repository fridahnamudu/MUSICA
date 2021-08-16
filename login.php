<?php
  include_once 'header.php';
  ?>

<section class="signup-form">
    <h2>Sign Up</h2>
    <form action="includes/login.inc.php" method="post">
        <input type="text" name="uid" placeholder="Username/ email ...">
        <input type="password" name="pwd" placeholder=" password ...">
        <button type="submit" name="submit">Log in</button>
    </form>
    <?php 
    if(isset($_GET["error"])){
      if ($_GET["error"] == "emptyinput") {
        echo "<p> Fill in all fields!</p>";
      }
      else if ($_GET["error"] == "wronglogin") {
        echo "<p> incorrect login information!</p>";
      }
    }
?>
</section>