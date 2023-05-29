<template>
<nav class="navbar navbar-expand-lg pt-3">
  <div class="container">
    <router-link to="/" class="navbar-brand" href="#"><i class="fa-solid fa-book-open-reader"></i> <div class="d-flex flex-column g-0"><span class="japan">Japanese</span> <span class="learn">learning</span></div></router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li class="nav-item dropdown">
          <a class="nav-link active pointer"  >
            LEVEL<i class="fa-solid fa-caret-down ms-1"></i>
          </a>
          <ul class="dropdown-menu">
            <li><router-link to="/n5" class="dropdown-item">Nihongo N5</router-link></li>
            <li><a class="dropdown-item" href="#">Nihongo N4</a></li>
            <li><a class="dropdown-item" href="#">Nihongo N3</a></li>
            <li><a class="dropdown-item" href="#">Nihongo N2</a></li>
            <li><a class="dropdown-item" href="#">Nihongo N1</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">KAIWA</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">LISTENING</a>
        </li><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">EXERCISES</a>
        </li><li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">CONTACT</a>
        </li><li class="nav-item pt-1">
          <a class="nav-link active main-btn w-100 text-center" aria-current="page" href="#">LOGIN</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</template>
  

<script>
    export default {
        
    }
</script>

<style scoped>
  .navbar {
    padding: 1px 10%;
    position: sticky;
    top: 0;
    background: #ffe2b5;
    z-index: 9999 !important;
  }
  .navbar-brand i {
    font-size: 2.5rem;
    color: #CD3109;
  }
  .navbar-brand {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .7rem;
  }
  .navbar-brand .learn {
    font-size: 14px;
    letter-spacing: 4px;
    font-weight: bold;
    color: #dc6f54;
  }
  .navbar-brand .japan{
    font-size: 18px;
    font-weight: bold;
  }
  .nav-link {
    font-weight: bold;
    font-size: 12px;
    margin-left: 5px;
    transition: .5s ease;
  }

  .nav-link:hover {
    color: #CD3109;
  }

  

  .dropdown {
    position: relative;
  }

  .dropdown-menu {
    border: none;
    background: #716a61;
  }

  .dropdown:hover .dropdown-menu {
    display: block;
  }


  .dropdown-item {
    font-size: 14px;
    color: #f0ece5;

  }
  .dropdown-item:hover {
    color: #CD3109;
  }


</style>
