  <?php
  include_once 'header.php';
  ?>  
   <div id="carousel" class="carousel slide" data-ride="carousel" data-interval="500">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
        </ol>

            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img  class="d-block w-100" src="/images/blue.jpeg" alt=""class="w-100">
                    <div class="carousel-caption">
                      <div class="container">
                        <div class="row justify-content-center">
                          <div class="col-8 bg-custom">
                            

                          </div>
                        </div>

                        
                      </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img  class="d-block w-100" src="/images/pink.jpeg" alt="" class="w-100">
                    <div class="carousel-caption">
                      <div class="container">
                        <div class="row justify-content-center">
                          <div class="col-8">
                            
                            <div class="border-top border-primary w-50"></div>

                          </div>
                        </div>

                        
                      </div>
                    </div>
                    
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100"  src="/images/purple2.jpeg" alt="" class="w-100">
                    <div class="carousel-caption">
                      <div class="container">
                        <div class="row justify-content-center">
                          <div class="col-8">
                            

                          </div>
                        </div>

                        
                      </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100" src="/images/purple.jpeg" alt="" class="w-100">
                    <div class="carousel-caption">
                      <div class="container">
                        <div class="row justify-content-center">
                          <div class="col-8">
                          

                          </div>
                        </div>

                        
                      </div>
                    </div>
                </div>
                <div class="carousel-item ">
                    <img class="d-block w-100"  src="/images/pink2.jpeg" alt="" class="w-100">
                    <div class="carousel-caption">
                      <div class="container">
                        <div class="row justify-content-center">
                          <div class="col-8">
                            

                          </div>
                        </div>

                        
                      </div>
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="sr-only">Next</span>
                </a>
  </div>     
 </div>
<div class="container my-5">
  <div class="row py-4">
  <div class="col-lg-8 mb-4 my-lg-auto">
    <h1 class="text-light font-weight-bold mb-3 ">
    We've been expecting you
    </h1>
    <p class="mb-4">
    </p>

  </div>
  <div class="col-lg-4"><img src="/images/logo3.jpeg" alt="" lass="w-100" style="width: 50%; height:50%;"></div>
  </div>
</div>
<div class="jumbotron py-5 mb-0">
  <div class="container">
    <div class="row">
    <div class="col-md-7 col-lg-8 col-xl-9 my-auto" style="height: 1%;">
    Looking for a cool playlist?
    <?php
                                if (isset($_SESSION["useruid"])) {
                                    echo  "<a  class='nav-item' class='active' href='index.php' class='nav-link'  style='color: hotpink; heigth: 5rem'></a>";
                                    echo  "<a class='nav-item' href='logout.php' class='nav-link' style='color: hotpink; height:5rem'>Log out</a>";
                                }
                                else {
                                    echo "<a  class='nav-item' href='login.php' class='nav-link' style='color: hotpink; height: 5rem'>Log in</a>";
                                    echo "<a class='nav-item'  href='signup.php' class='nav-link' style='color: hotpink; height: 5rem'>Sign up</a>";
                                }
    ?>

    </div>
    </div>
  </div>
</div>
<div class="footer">
<div class="container" style="background-color: black; height:5rem;" style="bottom:5rem;">
  <div class="row text-light text-center py-4 justify-content-center">
  <div class="col-sm-10 col-md-8 col-lg-6">
    <!-- <img src="/images/logo2.jpeg" alt="" style="height: 3rem;"> -->
  </div>
  <p></p>
  <ul class="social pt-3">
    <li><a href=""><i class="fab fa-twitter"></i></a></li>
    <li><a href=""><i class="fab fa-instagram"></i></a></li>
    <li><a href="https://www.linkedin.com/in/fridah-namudu-758a98207/"><i class="fab fa-linkedin"></i></a></li>
    <li><a href="https://github.com/"><i class="fab fa-github"></i></a></li>
  </ul>
  </div>
</div></div>
<div class="socket text-light text-center py-3">
<p> &copy;<a href="" target="_blank">fridahnamudu</p>
</div>

        
  </body>
</html>