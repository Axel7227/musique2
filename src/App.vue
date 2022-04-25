<template>
  <nav>
    <router-link to="/">Musiques</router-link>
    <router-link to="/categories">Catégories</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
nav {
  padding: 30px;
  background-color: greenyellow;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  margin: 10px;
  font-size: 1.5rem;
}
nav a.router-link-exact-active {
  color: #42b983;
}
htlm {
  height: 100vh;
}
body {
  //background-image: url("");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: top;
}
</style>