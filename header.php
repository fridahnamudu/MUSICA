<?php
session_start();
?>

<!DOCTYPE html>
<html>
    <tittle></tittle>
    <head> 
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <!-- <link rel="shortcut icon" href=""> -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css">     
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <link href="css/styles.css" rel="stylesheet" type="text/css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css.map">
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Niconne&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.css">
        <link rel="stylesheet" href="APlayer.min.css">
        <link href="/css/styles.css" rel="stylesheet" type="text/css">
        <link href="css/songs.css" rel="stylesheet" type="text/css">
        <link href="css/play.css" rel="stylesheet" type="text/css">


        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
            <!-- <script
        src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc="
        crossorigin="anonymous"></script> -->

        <script src="js/script.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/aplayer/1.10.1/APlayer.min.js.map"></script>
    </head>
    <body>
    <div class="top-bar">
            <div class="container">
                <div class="col-12 text-right">
                    <p>welcome!</p>
                </div>
            </div>
    </div>
        
        <nav class="navbar navbar-toggleable-sm bg-infp navabe-inverse navbar bg-light navbar-light navbar-expand-lg">  
         <!--navbar bg-light navbar-light navbar-expand-lg-->
            <div class="container">

            
                <button class="navbar-toggler"  data-toggle="collapse" data-target="#navbarResponsive">
                    <span class="navbar-toggler-icon"></span>
                </button>

                    <div class="collapse navbar-collapse" id="navbarResponsive"> 
                        <ul class="navbar-nav">
                            <li class="nav-item"><a  href="index.php" class="nav-link active" style="color: hotpink;" >Home</a></li>
                            <li class="nav-item"><a href="services.php"class="nav-link"style="color: hotpink;">About</a></li>
                            <li class="nav-item"><a href="playlists.php" class="nav-link"style="color: hotpink;">Playlists</a></li>
                            <li class="nav-item"> <a href="contacts.php" class="nav-link" style="color: hotpink;">Contact Us</a></li>
                           
                        </ul>
                    </div>
                
            </div>
        
        </nav>
        
        </div>

        
       
</body>
</html>