<template>

<nav class="deep-purple lighten-3 lighten-1" role="navigation">
    <div class="nav-wrapper container"><a id="logo-container" href="#" class="brand-logo"><i class="material-icons">check_box</i></a>
      <ul class="right hide-on-med-and-down">
        <li><a href="#">Log in</a></li>
      </ul>

      <ul id="nav-mobile" class="sidenav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a>
    </div>
  </nav>
  <div class="section no-pad-bot" id="index-banner">
    <div class="container">
      <br><br>
      <h1 class="header center white-text">Easy Tasks</h1>
      <div class="row center">
        <h5 class="header col s12 light white-text">A modern plataform to organize your daily tasks</h5>
      </div>
      <div class="row center">
        <a href="/register" id="register-button" class="btn-large waves-effect waves-light deep-purple" style="width:fit-content">Get Started</a>
      </div>
      <br><br>

    </div>
  </div>


  <div class="container">
    <div class="section">

      <!--   Icon Section   -->
      <div class="row">
        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">flash_on</i></h2>
            <h5 class="center">Speeds up development</h5>

            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh odio, rhoncus eu metus at, dictum auctor tortor. Nunc tincidunt tincidunt nisl, ac ultrices ligula malesuada ac. Donec at velit id quam aliquam luctus. Aliquam cursus ipsum quam, id facilisis nulla commodo a. Ut in vulputate nibh. Sed eros elit, vestibulum sit amet urna rutrum, dapibus tempor est. Cras mattis risus nisl, sed aliquet odio cursus nec. Morbi id leo ante. Aenean sodales diam eu risus consectetur efficitur. Fusce semper pulvinar magna sit amet vehicula. Pellentesque placerat fermentum sapien, sit amet tempor lectus condimentum consectetur. Pellentesque sollicitudin tellus a diam vulputate volutpat.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">group</i></h2>
            <h5 class="center">User Experience Focused</h5>

            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh odio, rhoncus eu metus at, dictum auctor tortor. Nunc tincidunt tincidunt nisl, ac ultrices ligula malesuada ac. Donec at velit id quam aliquam luctus. Aliquam cursus ipsum quam, id facilisis nulla commodo a. Ut in vulputate nibh. Sed eros elit, vestibulum sit amet urna rutrum, dapibus tempor est. Cras mattis risus nisl, sed aliquet odio cursus nec. Morbi id leo ante. Aenean sodales diam eu risus consectetur efficitur. Fusce semper pulvinar magna sit amet vehicula. Pellentesque placerat fermentum sapien, sit amet tempor lectus condimentum consectetur. Pellentesque sollicitudin tellus a diam vulputate volutpat.</p>
          </div>
        </div>

        <div class="col s12 m4">
          <div class="icon-block">
            <h2 class="center light-blue-text"><i class="material-icons">settings</i></h2>
            <h5 class="center">Easy to work with</h5>

            <p class="white-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut nibh odio, rhoncus eu metus at, dictum auctor tortor. Nunc tincidunt tincidunt nisl, ac ultrices ligula malesuada ac. Donec at velit id quam aliquam luctus. Aliquam cursus ipsum quam, id facilisis nulla commodo a. Ut in vulputate nibh. Sed eros elit, vestibulum sit amet urna rutrum, dapibus tempor est. Cras mattis risus nisl, sed aliquet odio cursus nec. Morbi id leo ante. Aenean sodales diam eu risus consectetur efficitur. Fusce semper pulvinar magna sit amet vehicula. Pellentesque placerat fermentum sapien, sit amet tempor lectus condimentum consectetur. Pellentesque sollicitudin tellus a diam vulputate volutpat.</p>
          </div>
        </div>
      </div>
    </div>
    <br><br>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"> 
  </div>

  <footer class="page-footer deep-purple lighten-3 lighten-1">
    <div class="container">
      <div class="row">
        <div class="col l12 s12">
          <h5 class="white-text">Easy Tasks</h5>
          <p class="grey-text text-lighten-4">We are a modern plataform to help you simplify your life by organizing your daily tasks</p>


        </div>
      </div>
    </div>
    <div class="footer-copyright">
      <div class="container">
      Made by <a class="orange-text text-lighten-3" href="https://github.com/MathPalma">Matheus Palma dos Santos</a>
      </div>
    </div>
  </footer>
  </template>
  
  <script>
  export default {
    name: "homePage",
    components: {},
    data() {
      return {
        tasks: [
          {
            id: 1,
            name: "Do homework"
          }
        ],
        bg: '#371B58'
      }
    },
    mounted() {
      document.body.style.backgroundColor = this.bg;
    }
  };
  </script>
  
  <style>
  label {
    color: white;
  }
  
  .labelNav {
    cursor: pointer;
  }
  
  .labelNav:hover {
    border: 1px solid #5B4B8A;
    border-radius: 10%;
    margin: -1px;
  }
  
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .StartButton{
    height: 50px;
    background-color: #bca0dc;
    color: #FFFFFF;
  }
  .StartButton:hover{
    background-color: #7c5295;
    color: #FFFFFF;
  }
  </style>
  