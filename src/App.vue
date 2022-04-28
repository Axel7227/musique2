<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand">Musique</router-link>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link to="/categories" class="nav-link">Catégorie</router-link>
      </li>
    </div>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;


}

body{
  background-image: url("assets/musique6.png");
  background-size: cover;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
